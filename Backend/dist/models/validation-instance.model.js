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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationInstance = exports.ValidatableEntityType = exports.ValidationStatus = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model"); // S'assurer que le chemin est correct
var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
    ValidationStatus["APPROVED"] = "APPROVED";
    ValidationStatus["REJECTED"] = "REJECTED";
})(ValidationStatus || (exports.ValidationStatus = ValidationStatus = {}));
var ValidatableEntityType;
(function (ValidatableEntityType) {
    ValidatableEntityType["MISSION"] = "Mission";
    ValidatableEntityType["INTERVENTION_REPORT"] = "InterventionReport";
    // Ajouter d'autres types d'entités validables si nécessaire
})(ValidatableEntityType || (exports.ValidatableEntityType = ValidatableEntityType = {}));
let ValidationInstance = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('validation_instances')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _entity_type_decorators;
    let _entity_type_initializers = [];
    let _entity_type_extraInitializers = [];
    let _entity_id_decorators;
    let _entity_id_initializers = [];
    let _entity_id_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _requested_by_user_id_decorators;
    let _requested_by_user_id_initializers = [];
    let _requested_by_user_id_extraInitializers = [];
    let _requested_by_user_decorators;
    let _requested_by_user_initializers = [];
    let _requested_by_user_extraInitializers = [];
    let _assigned_validator_id_decorators;
    let _assigned_validator_id_initializers = [];
    let _assigned_validator_id_extraInitializers = [];
    let _assigned_validator_decorators;
    let _assigned_validator_initializers = [];
    let _assigned_validator_extraInitializers = [];
    let _validated_by_user_id_decorators;
    let _validated_by_user_id_initializers = [];
    let _validated_by_user_id_extraInitializers = [];
    let _validated_by_user_decorators;
    let _validated_by_user_initializers = [];
    let _validated_by_user_extraInitializers = [];
    let _comments_decorators;
    let _comments_initializers = [];
    let _comments_extraInitializers = [];
    let _submitted_at_decorators;
    let _submitted_at_initializers = [];
    let _submitted_at_extraInitializers = [];
    let _validated_at_decorators;
    let _validated_at_initializers = [];
    let _validated_at_extraInitializers = [];
    var ValidationInstance = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.entity_type = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _entity_type_initializers, void 0));
            this.entity_id = (__runInitializers(this, _entity_type_extraInitializers), __runInitializers(this, _entity_id_initializers, void 0));
            this.status = (__runInitializers(this, _entity_id_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.requested_by_user_id = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _requested_by_user_id_initializers, void 0));
            this.requested_by_user = (__runInitializers(this, _requested_by_user_id_extraInitializers), __runInitializers(this, _requested_by_user_initializers, void 0));
            // assigned_validator_id peut être un groupe de gestionnaires ou un gestionnaire spécifique.
            // Pour simplifier, on peut le laisser null ou le lier à un utilisateur spécifique si le workflow l'exige.
            this.assigned_validator_id = (__runInitializers(this, _requested_by_user_extraInitializers), __runInitializers(this, _assigned_validator_id_initializers, void 0));
            this.assigned_validator = (__runInitializers(this, _assigned_validator_id_extraInitializers), __runInitializers(this, _assigned_validator_initializers, void 0));
            this.validated_by_user_id = (__runInitializers(this, _assigned_validator_extraInitializers), __runInitializers(this, _validated_by_user_id_initializers, void 0));
            this.validated_by_user = (__runInitializers(this, _validated_by_user_id_extraInitializers), __runInitializers(this, _validated_by_user_initializers, void 0));
            this.comments = (__runInitializers(this, _validated_by_user_extraInitializers), __runInitializers(this, _comments_initializers, void 0)); // Pour les motifs de rejet ou commentaires d'approbation
            this.submitted_at = (__runInitializers(this, _comments_extraInitializers), __runInitializers(this, _submitted_at_initializers, void 0));
            this.validated_at = (__runInitializers(this, _submitted_at_extraInitializers), __runInitializers(this, _validated_at_initializers, void 0));
            __runInitializers(this, _validated_at_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ValidationInstance");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _entity_type_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ValidatableEntityType,
            })];
        _entity_id_decorators = [(0, typeorm_1.Column)('uuid')];
        _status_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ValidationStatus,
                default: ValidationStatus.PENDING_VALIDATION,
            })];
        _requested_by_user_id_decorators = [(0, typeorm_1.Column)('uuid')];
        _requested_by_user_decorators = [(0, typeorm_1.ManyToOne)(() => user_model_1.User, { onDelete: 'SET NULL' }), (0, typeorm_1.JoinColumn)({ name: 'requested_by_user_id' })];
        _assigned_validator_id_decorators = [(0, typeorm_1.Column)({ type: 'uuid', nullable: true })];
        _assigned_validator_decorators = [(0, typeorm_1.ManyToOne)(() => user_model_1.User, { nullable: true, onDelete: 'SET NULL' }), (0, typeorm_1.JoinColumn)({ name: 'assigned_validator_id' })];
        _validated_by_user_id_decorators = [(0, typeorm_1.Column)({ type: 'uuid', nullable: true })];
        _validated_by_user_decorators = [(0, typeorm_1.ManyToOne)(() => user_model_1.User, { nullable: true, onDelete: 'SET NULL' }), (0, typeorm_1.JoinColumn)({ name: 'validated_by_user_id' })];
        _comments_decorators = [(0, typeorm_1.Column)('text', { nullable: true })];
        _submitted_at_decorators = [(0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' })];
        _validated_at_decorators = [(0, typeorm_1.Column)({ type: 'timestamp with time zone', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _entity_type_decorators, { kind: "field", name: "entity_type", static: false, private: false, access: { has: obj => "entity_type" in obj, get: obj => obj.entity_type, set: (obj, value) => { obj.entity_type = value; } }, metadata: _metadata }, _entity_type_initializers, _entity_type_extraInitializers);
        __esDecorate(null, null, _entity_id_decorators, { kind: "field", name: "entity_id", static: false, private: false, access: { has: obj => "entity_id" in obj, get: obj => obj.entity_id, set: (obj, value) => { obj.entity_id = value; } }, metadata: _metadata }, _entity_id_initializers, _entity_id_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _requested_by_user_id_decorators, { kind: "field", name: "requested_by_user_id", static: false, private: false, access: { has: obj => "requested_by_user_id" in obj, get: obj => obj.requested_by_user_id, set: (obj, value) => { obj.requested_by_user_id = value; } }, metadata: _metadata }, _requested_by_user_id_initializers, _requested_by_user_id_extraInitializers);
        __esDecorate(null, null, _requested_by_user_decorators, { kind: "field", name: "requested_by_user", static: false, private: false, access: { has: obj => "requested_by_user" in obj, get: obj => obj.requested_by_user, set: (obj, value) => { obj.requested_by_user = value; } }, metadata: _metadata }, _requested_by_user_initializers, _requested_by_user_extraInitializers);
        __esDecorate(null, null, _assigned_validator_id_decorators, { kind: "field", name: "assigned_validator_id", static: false, private: false, access: { has: obj => "assigned_validator_id" in obj, get: obj => obj.assigned_validator_id, set: (obj, value) => { obj.assigned_validator_id = value; } }, metadata: _metadata }, _assigned_validator_id_initializers, _assigned_validator_id_extraInitializers);
        __esDecorate(null, null, _assigned_validator_decorators, { kind: "field", name: "assigned_validator", static: false, private: false, access: { has: obj => "assigned_validator" in obj, get: obj => obj.assigned_validator, set: (obj, value) => { obj.assigned_validator = value; } }, metadata: _metadata }, _assigned_validator_initializers, _assigned_validator_extraInitializers);
        __esDecorate(null, null, _validated_by_user_id_decorators, { kind: "field", name: "validated_by_user_id", static: false, private: false, access: { has: obj => "validated_by_user_id" in obj, get: obj => obj.validated_by_user_id, set: (obj, value) => { obj.validated_by_user_id = value; } }, metadata: _metadata }, _validated_by_user_id_initializers, _validated_by_user_id_extraInitializers);
        __esDecorate(null, null, _validated_by_user_decorators, { kind: "field", name: "validated_by_user", static: false, private: false, access: { has: obj => "validated_by_user" in obj, get: obj => obj.validated_by_user, set: (obj, value) => { obj.validated_by_user = value; } }, metadata: _metadata }, _validated_by_user_initializers, _validated_by_user_extraInitializers);
        __esDecorate(null, null, _comments_decorators, { kind: "field", name: "comments", static: false, private: false, access: { has: obj => "comments" in obj, get: obj => obj.comments, set: (obj, value) => { obj.comments = value; } }, metadata: _metadata }, _comments_initializers, _comments_extraInitializers);
        __esDecorate(null, null, _submitted_at_decorators, { kind: "field", name: "submitted_at", static: false, private: false, access: { has: obj => "submitted_at" in obj, get: obj => obj.submitted_at, set: (obj, value) => { obj.submitted_at = value; } }, metadata: _metadata }, _submitted_at_initializers, _submitted_at_extraInitializers);
        __esDecorate(null, null, _validated_at_decorators, { kind: "field", name: "validated_at", static: false, private: false, access: { has: obj => "validated_at" in obj, get: obj => obj.validated_at, set: (obj, value) => { obj.validated_at = value; } }, metadata: _metadata }, _validated_at_initializers, _validated_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ValidationInstance = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ValidationInstance = _classThis;
})();
exports.ValidationInstance = ValidationInstance;
//# sourceMappingURL=validation-instance.model.js.map