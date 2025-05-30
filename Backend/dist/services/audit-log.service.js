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
exports.AuditLogService = void 0;
const common_1 = require("@nestjs/common");
const audit_log_model_1 = require("../models/audit-log.model");
let AuditLogService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuditLogService = _classThis = class {
        constructor(auditLogRepository) {
            this.auditLogRepository = auditLogRepository;
        }
        logAction(entry) {
            return __awaiter(this, void 0, void 0, function* () {
                const newLog = this.auditLogRepository.create({
                    user_id: entry.userId,
                    username: entry.username,
                    action_type: entry.actionType,
                    ip_address: entry.ipAddress,
                    details: entry.details ? (typeof entry.details === 'string' ? entry.details : JSON.stringify(entry.details)) : undefined,
                    entity_type: entry.entityType,
                    entity_id: entry.entityId,
                });
                return this.auditLogRepository.save(newLog);
            });
        }
        getAuditLogs() {
            return __awaiter(this, arguments, void 0, function* (page = 1, limit = 20, filters = {}) {
                const queryBuilder = this.auditLogRepository.createQueryBuilder('audit_log');
                if (filters.userId) {
                    queryBuilder.andWhere('audit_log.user_id = :userId', { userId: filters.userId });
                }
                if (filters.actionType) {
                    queryBuilder.andWhere('audit_log.action_type = :actionType', { actionType: filters.actionType });
                }
                if (filters.entityType) {
                    queryBuilder.andWhere('audit_log.entity_type = :entityType', { entityType: filters.entityType });
                }
                if (filters.entityId) {
                    queryBuilder.andWhere('audit_log.entity_id = :entityId', { entityId: filters.entityId });
                }
                if (filters.dateFrom) {
                    queryBuilder.andWhere('audit_log.timestamp >= :dateFrom', { dateFrom: filters.dateFrom });
                }
                if (filters.dateTo) {
                    // Pour inclure toute la journée de dateTo, on peut ajuster à la fin de la journée
                    const endOfDay = new Date(filters.dateTo);
                    endOfDay.setHours(23, 59, 59, 999);
                    queryBuilder.andWhere('audit_log.timestamp <= :dateTo', { dateTo: endOfDay });
                }
                queryBuilder
                    .orderBy('audit_log.timestamp', 'DESC')
                    .skip((page - 1) * limit)
                    .take(limit);
                const [logs, total] = yield queryBuilder.getManyAndCount();
                return { logs, total };
            });
        }
        // Méthode pour la purge des logs (à appeler par une tâche planifiée)
        purgeOldLogs(retentionDays) {
            return __awaiter(this, void 0, void 0, function* () {
                const retentionDate = new Date();
                retentionDate.setDate(retentionDate.getDate() - retentionDays);
                yield this.auditLogRepository
                    .createQueryBuilder()
                    .delete()
                    .from(audit_log_model_1.AuditLog)
                    .where("timestamp < :retentionDate", { retentionDate })
                    .execute();
                console.log(`Audit logs older than ${retentionDays} days have been purged.`);
            });
        }
    };
    __setFunctionName(_classThis, "AuditLogService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditLogService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditLogService = _classThis;
})();
exports.AuditLogService = AuditLogService;
//# sourceMappingURL=audit-log.service.js.map