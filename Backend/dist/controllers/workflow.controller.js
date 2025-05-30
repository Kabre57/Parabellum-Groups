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
exports.WorkflowController = void 0;
const common_1 = require("@nestjs/common");
const workflow_service_1 = require("./workflow.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const class_validator_1 = require("class-validator");
let RequestValidationDto = (() => {
    var _a;
    let _entityType_decorators;
    let _entityType_initializers = [];
    let _entityType_extraInitializers = [];
    let _entityId_decorators;
    let _entityId_initializers = [];
    let _entityId_extraInitializers = [];
    return _a = class RequestValidationDto {
            constructor() {
                this.entityType = __runInitializers(this, _entityType_initializers, void 0);
                this.entityId = (__runInitializers(this, _entityType_extraInitializers), __runInitializers(this, _entityId_initializers, void 0)); // UUID de l'entité
                __runInitializers(this, _entityId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _entityType_decorators = [(0, class_validator_1.IsEnum)(workflow_service_1.ValidatableEntityType), (0, class_validator_1.IsNotEmpty)()];
            _entityId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _entityType_decorators, { kind: "field", name: "entityType", static: false, private: false, access: { has: obj => "entityType" in obj, get: obj => obj.entityType, set: (obj, value) => { obj.entityType = value; } }, metadata: _metadata }, _entityType_initializers, _entityType_extraInitializers);
            __esDecorate(null, null, _entityId_decorators, { kind: "field", name: "entityId", static: false, private: false, access: { has: obj => "entityId" in obj, get: obj => obj.entityId, set: (obj, value) => { obj.entityId = value; } }, metadata: _metadata }, _entityId_initializers, _entityId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let ProcessValidationDto = (() => {
    var _a;
    let _comments_decorators;
    let _comments_initializers = [];
    let _comments_extraInitializers = [];
    return _a = class ProcessValidationDto {
            constructor() {
                this.comments = __runInitializers(this, _comments_initializers, void 0);
                __runInitializers(this, _comments_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _comments_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _comments_decorators, { kind: "field", name: "comments", static: false, private: false, access: { has: obj => "comments" in obj, get: obj => obj.comments, set: (obj, value) => { obj.comments = value; } }, metadata: _metadata }, _comments_initializers, _comments_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let WorkflowController = (() => {
    let _classDecorators = [(0, common_1.Controller)("workflows"), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _requestValidation_decorators;
    let _approveValidation_decorators;
    let _rejectValidation_decorators;
    let _getPendingValidations_decorators;
    let _getEntityValidationStatus_decorators;
    var WorkflowController = _classThis = class {
        constructor(workflowService) {
            this.workflowService = (__runInitializers(this, _instanceExtraInitializers), workflowService);
        }
        requestValidation(body, req) {
            return __awaiter(this, void 0, void 0, function* () {
                const requestedByUserId = req.user.id;
                return this.workflowService.requestValidation({
                    entityType: body.entityType,
                    entityId: body.entityId,
                    requestedByUserId,
                });
            });
        }
        approveValidation(instanceId, body, req) {
            return __awaiter(this, void 0, void 0, function* () {
                const processedByUserId = req.user.id;
                return this.workflowService.approveValidation({ validationInstanceId: instanceId, processedByUserId, comments: body.comments }, req.user);
            });
        }
        rejectValidation(instanceId, body, req) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!body.comments) {
                    throw new Error("Un commentaire est requis pour le rejet."); // Ou BadRequestException
                }
                const processedByUserId = req.user.id;
                return this.workflowService.rejectValidation({ validationInstanceId: instanceId, processedByUserId, comments: body.comments }, req.user);
            });
        }
        getPendingValidations(req, page, limit) {
            return __awaiter(this, void 0, void 0, function* () {
                const userId = req.user.id; // Le service devra filtrer en fonction du rôle et du périmètre du manager
                const pageNumber = page ? parseInt(page, 10) : 1;
                const limitNumber = limit ? parseInt(limit, 10) : 10;
                return this.workflowService.getPendingValidationsForUser(userId, pageNumber, limitNumber);
            });
        }
        getEntityValidationStatus(entityType, entityId) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!Object.values(workflow_service_1.ValidatableEntityType).includes(entityType)) {
                    throw new Error("Invalid entity type for validation status check."); // Ou BadRequestException
                }
                return this.workflowService.getValidationStatusForEntity(entityType, entityId);
            });
        }
    };
    __setFunctionName(_classThis, "WorkflowController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _requestValidation_decorators = [(0, common_1.Post)("request"), (0, roles_decorator_1.Roles)("admin", "manager", "technician")];
        _approveValidation_decorators = [(0, common_1.Post)("instances/:instanceId/approve"), (0, roles_decorator_1.Roles)("admin", "manager")];
        _rejectValidation_decorators = [(0, common_1.Post)("instances/:instanceId/reject"), (0, roles_decorator_1.Roles)("admin", "manager")];
        _getPendingValidations_decorators = [(0, common_1.Get)("pending"), (0, roles_decorator_1.Roles)("admin", "manager")];
        _getEntityValidationStatus_decorators = [(0, common_1.Get)("entity-status/:entityType/:entityId"), (0, roles_decorator_1.Roles)("admin", "manager", "technician")];
        __esDecorate(_classThis, null, _requestValidation_decorators, { kind: "method", name: "requestValidation", static: false, private: false, access: { has: obj => "requestValidation" in obj, get: obj => obj.requestValidation }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _approveValidation_decorators, { kind: "method", name: "approveValidation", static: false, private: false, access: { has: obj => "approveValidation" in obj, get: obj => obj.approveValidation }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _rejectValidation_decorators, { kind: "method", name: "rejectValidation", static: false, private: false, access: { has: obj => "rejectValidation" in obj, get: obj => obj.rejectValidation }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPendingValidations_decorators, { kind: "method", name: "getPendingValidations", static: false, private: false, access: { has: obj => "getPendingValidations" in obj, get: obj => obj.getPendingValidations }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getEntityValidationStatus_decorators, { kind: "method", name: "getEntityValidationStatus", static: false, private: false, access: { has: obj => "getEntityValidationStatus" in obj, get: obj => obj.getEntityValidationStatus }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WorkflowController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WorkflowController = _classThis;
})();
exports.WorkflowController = WorkflowController;
//# sourceMappingURL=workflow.controller.js.map