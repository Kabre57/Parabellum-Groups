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
exports.AuditLog = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model"); // S'assurer que le chemin est correct
let AuditLog = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('audit_logs')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _user_id_decorators;
    let _user_id_initializers = [];
    let _user_id_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _username_extraInitializers = [];
    let _action_type_decorators;
    let _action_type_initializers = [];
    let _action_type_extraInitializers = [];
    let _entity_type_decorators;
    let _entity_type_initializers = [];
    let _entity_type_extraInitializers = [];
    let _entity_id_decorators;
    let _entity_id_initializers = [];
    let _entity_id_extraInitializers = [];
    let _details_decorators;
    let _details_initializers = [];
    let _details_extraInitializers = [];
    let _ip_address_decorators;
    let _ip_address_initializers = [];
    let _ip_address_extraInitializers = [];
    let _timestamp_decorators;
    let _timestamp_initializers = [];
    let _timestamp_extraInitializers = [];
    var AuditLog = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.user_id = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _user_id_initializers, void 0));
            this.user = (__runInitializers(this, _user_id_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.username = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _username_initializers, void 0));
            this.action_type = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _action_type_initializers, void 0)); // Ex: 'USER_LOGIN_SUCCESS', 'CREATE_CLIENT'
            this.entity_type = (__runInitializers(this, _action_type_extraInitializers), __runInitializers(this, _entity_type_initializers, void 0)); // Ex: 'Client', 'Mission'
            this.entity_id = (__runInitializers(this, _entity_type_extraInitializers), __runInitializers(this, _entity_id_initializers, void 0));
            this.details = (__runInitializers(this, _entity_id_extraInitializers), __runInitializers(this, _details_initializers, void 0));
            this.ip_address = (__runInitializers(this, _details_extraInitializers), __runInitializers(this, _ip_address_initializers, void 0));
            this.timestamp = (__runInitializers(this, _ip_address_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
            __runInitializers(this, _timestamp_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AuditLog");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _user_id_decorators = [(0, typeorm_1.Column)({ type: 'uuid', nullable: true })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(() => user_model_1.User, { nullable: true, onDelete: 'SET NULL' }), (0, typeorm_1.JoinColumn)({ name: 'user_id' })];
        _username_decorators = [(0, typeorm_1.Column)({ length: 255, nullable: true })];
        _action_type_decorators = [(0, typeorm_1.Column)({ length: 255 })];
        _entity_type_decorators = [(0, typeorm_1.Column)({ length: 100, nullable: true })];
        _entity_id_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true })];
        _details_decorators = [(0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _ip_address_decorators = [(0, typeorm_1.Column)({ length: 45, nullable: true })];
        _timestamp_decorators = [(0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: obj => "user_id" in obj, get: obj => obj.user_id, set: (obj, value) => { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _user_id_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
        __esDecorate(null, null, _action_type_decorators, { kind: "field", name: "action_type", static: false, private: false, access: { has: obj => "action_type" in obj, get: obj => obj.action_type, set: (obj, value) => { obj.action_type = value; } }, metadata: _metadata }, _action_type_initializers, _action_type_extraInitializers);
        __esDecorate(null, null, _entity_type_decorators, { kind: "field", name: "entity_type", static: false, private: false, access: { has: obj => "entity_type" in obj, get: obj => obj.entity_type, set: (obj, value) => { obj.entity_type = value; } }, metadata: _metadata }, _entity_type_initializers, _entity_type_extraInitializers);
        __esDecorate(null, null, _entity_id_decorators, { kind: "field", name: "entity_id", static: false, private: false, access: { has: obj => "entity_id" in obj, get: obj => obj.entity_id, set: (obj, value) => { obj.entity_id = value; } }, metadata: _metadata }, _entity_id_initializers, _entity_id_extraInitializers);
        __esDecorate(null, null, _details_decorators, { kind: "field", name: "details", static: false, private: false, access: { has: obj => "details" in obj, get: obj => obj.details, set: (obj, value) => { obj.details = value; } }, metadata: _metadata }, _details_initializers, _details_extraInitializers);
        __esDecorate(null, null, _ip_address_decorators, { kind: "field", name: "ip_address", static: false, private: false, access: { has: obj => "ip_address" in obj, get: obj => obj.ip_address, set: (obj, value) => { obj.ip_address = value; } }, metadata: _metadata }, _ip_address_initializers, _ip_address_extraInitializers);
        __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: obj => "timestamp" in obj, get: obj => obj.timestamp, set: (obj, value) => { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditLog = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditLog = _classThis;
})();
exports.AuditLog = AuditLog;
//# sourceMappingURL=audit-log.model.js.map