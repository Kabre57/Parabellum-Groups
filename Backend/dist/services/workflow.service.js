"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowService = void 0;
const common_1 = require("@nestjs/common");
const validation_instance_model_1 = require("../models/validation-instance.model");
let WorkflowService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var WorkflowService = _classThis = class {
        constructor(validationInstanceRepository, notificationService) {
            this.validationInstanceRepository = validationInstanceRepository;
            this.notificationService = notificationService;
        }
        requestValidation(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                // TODO: Vérifier que l'entité (entityId, entityType) existe et est dans un état qui permet la soumission à validation.
                // TODO: Déterminer le(s) valideur(s) (gestionnaires). Pour l'instant, on suppose qu'ils seront notifiés globalement ou via un autre mécanisme.
                const newValidation = this.validationInstanceRepository.create({
                    entity_type: payload.entityType,
                    entity_id: payload.entityId,
                    requested_by_user_id: payload.requestedByUserId,
                    status: validation_instance_model_1.ValidationStatus.PENDING_VALIDATION,
                    // assigned_validator_id: determinedValidatorId, // Si applicable
                });
                yield this.validationInstanceRepository.save(newValidation);
                // Notifier les gestionnaires (besoin de récupérer la liste des gestionnaires)
                // Pour l'exemple, on notifie un admin placeholder. Ceci doit être affiné.
                const managers = []; // await this.userService.findAllByRole('manager');
                for (const manager of managers) {
                    yield this.notificationService.createNotification({
                        userId: manager.id, // ID du gestionnaire
                        type: `NEW_${payload.entityType.toUpperCase()}_VALIDATION_REQUEST`,
                        message: `Une nouvelle demande de validation pour ${payload.entityType} (${payload.entityId}) nécessite votre attention.`,
                        data: { validationInstanceId: newValidation.id, entityId: payload.entityId, entityType: payload.entityType },
                    });
                }
                // Mettre à jour le statut de l'entité elle-même (ex: mission.status = 'PENDING_APPROVAL')
                // await this.updateEntityStatus(payload.entityType, payload.entityId, ValidationStatus.PENDING_VALIDATION);
                return newValidation;
            });
        }
        approveValidation(payload, currentUser) {
            return __awaiter(this, void 0, void 0, function* () {
                const validationInstance = yield this.findValidationInstanceOrFail(payload.validationInstanceId);
                if (validationInstance.status !== validation_instance_model_1.ValidationStatus.PENDING_VALIDATION) {
                    throw new common_1.ForbiddenException('Cette demande de validation a déjà été traitée.');
                }
                // TODO: Vérifier que currentUser.id (payload.processedByUserId) a le droit d'approuver (est un gestionnaire concerné)
                // if (currentUser.role !== 'manager' && currentUser.role !== 'admin') { // Simplification
                //   throw new ForbiddenException('Vous n\'avez pas les droits pour approuver cette demande.');
                // }
                validationInstance.status = validation_instance_model_1.ValidationStatus.APPROVED;
                validationInstance.validated_by_user_id = payload.processedByUserId;
                validationInstance.validated_at = new Date();
                validationInstance.comments = payload.comments;
                yield this.validationInstanceRepository.save(validationInstance);
                // Notifier l'initiateur
                yield this.notificationService.createNotification({
                    userId: validationInstance.requested_by_user_id,
                    type: `${validationInstance.entity_type.toUpperCase()}_VALIDATION_APPROVED`,
                    message: `Votre demande de validation pour ${validationInstance.entity_type} (${validationInstance.entity_id}) a été approuvée.`,
                    data: { entityId: validationInstance.entity_id, entityType: validationInstance.entity_type },
                });
                // Mettre à jour le statut de l'entité elle-même (ex: mission.status = 'APPROVED')
                // await this.updateEntityStatus(validationInstance.entity_type, validationInstance.entity_id, ValidationStatus.APPROVED);
                return validationInstance;
            });
        }
        rejectValidation(payload, currentUser) {
            return __awaiter(this, void 0, void 0, function* () {
                const validationInstance = yield this.findValidationInstanceOrFail(payload.validationInstanceId);
                if (validationInstance.status !== validation_instance_model_1.ValidationStatus.PENDING_VALIDATION) {
                    throw new common_1.ForbiddenException('Cette demande de validation a déjà été traitée.');
                }
                // TODO: Vérifier que currentUser.id (payload.processedByUserId) a le droit de rejeter
                // if (currentUser.role !== 'manager' && currentUser.role !== 'admin') { // Simplification
                //   throw new ForbiddenException('Vous n\'avez pas les droits pour rejeter cette demande.');
                // }
                if (!payload.comments) {
                    throw new common_1.ForbiddenException('Un commentaire est requis pour rejeter une validation.');
                }
                validationInstance.status = validation_instance_model_1.ValidationStatus.REJECTED;
                validationInstance.validated_by_user_id = payload.processedByUserId;
                validationInstance.validated_at = new Date();
                validationInstance.comments = payload.comments;
                yield this.validationInstanceRepository.save(validationInstance);
                // Notifier l'initiateur
                yield this.notificationService.createNotification({
                    userId: validationInstance.requested_by_user_id,
                    type: `${validationInstance.entity_type.toUpperCase()}_VALIDATION_REJECTED`,
                    message: `Votre demande de validation pour ${validationInstance.entity_type} (${validationInstance.entity_id}) a été rejetée. Motif: ${payload.comments}`,
                    data: { entityId: validationInstance.entity_id, entityType: validationInstance.entity_type },
                });
                // Mettre à jour le statut de l'entité elle-même (ex: mission.status = 'REJECTED_FOR_MODIFICATION')
                // await this.updateEntityStatus(validationInstance.entity_type, validationInstance.entity_id, ValidationStatus.REJECTED);
                return validationInstance;
            });
        }
        getPendingValidationsForUser(userId_1) {
            return __awaiter(this, arguments, void 0, function* (userId, page = 1, limit = 10) {
                // Cette logique doit être affinée: un gestionnaire ne voit que les validations qui lui sont assignées
                // ou celles qui concernent son équipe/périmètre.
                // Pour l'instant, on retourne toutes les PENDING_VALIDATION si l'utilisateur est manager/admin (simplification)
                // const user = await this.userService.findById(userId); // Nécessite userService
                // if (user.role !== 'manager' && user.role !== 'admin') return [];
                return this.validationInstanceRepository.find({
                    where: { status: validation_instance_model_1.ValidationStatus.PENDING_VALIDATION /*, assigned_validator_id: userId ou logique d'équipe */ },
                    relations: ['requested_by_user'], // Pour afficher qui a demandé
                    order: { submitted_at: 'ASC' },
                    skip: (page - 1) * limit,
                    take: limit,
                });
            });
        }
        getValidationStatusForEntity(entityType, entityId) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.validationInstanceRepository.findOne({
                    where: { entity_type: entityType, entity_id: entityId },
                    order: { submitted_at: 'DESC' } // La plus récente instance de validation pour cette entité
                });
            });
        }
        findValidationInstanceOrFail(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const instance = yield this.validationInstanceRepository.findOne({ where: { id } });
                if (!instance) {
                    throw new common_1.NotFoundException(`Instance de validation avec ID ${id} non trouvée.`);
                }
                return instance;
            });
        }
    };
    __setFunctionName(_classThis, "WorkflowService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WorkflowService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WorkflowService = _classThis;
})();
exports.WorkflowService = WorkflowService;
//# sourceMappingURL=workflow.service.js.map