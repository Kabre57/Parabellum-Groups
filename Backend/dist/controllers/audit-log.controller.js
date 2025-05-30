"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
exports.AuditLogController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard"); // S'assurer que le chemin est correct
const roles_guard_1 = require("../auth/guards/roles.guard"); // S'assurer que le chemin est correct
const roles_decorator_1 = require("../auth/decorators/roles.decorator"); // S'assurer que le chemin est correct
let AuditLogController = (() => {
    let _classDecorators = [(0, common_1.Controller)('audit-logs'), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getAuditLogs_decorators;
    var AuditLogController = _classThis = class {
        constructor(auditLogService) {
            this.auditLogService = (__runInitializers(this, _instanceExtraInitializers), auditLogService);
        }
        getAuditLogs(req, page, limit, userIdFilter, actionType, dateFrom, dateTo, entityType, entityId) {
            return __awaiter(this, void 0, void 0, function* () {
                const pageNumber = parseInt(page, 10) || 1;
                const limitNumber = parseInt(limit, 10) || 20;
                const currentUserRole = req.user.role;
                const currentUserId = req.user.id;
                const filters = {
                    actionType,
                    entityType,
                    entityId,
                };
                if (dateFrom)
                    filters.dateFrom = new Date(dateFrom);
                if (dateTo)
                    filters.dateTo = new Date(dateTo);
                // Les managers ne voient que les logs de leur équipe (simplifié ici, nécessite une logique de "équipe")
                // Pour l'instant, un manager ne peut filtrer que par son propre userId ou voir plus largement si pas de filtre userId
                // Une logique plus fine de "mon équipe" serait à implémenter dans le service ou via des conditions plus complexes ici.
                if (currentUserRole === 'manager') {
                    // Si un manager filtre par un userId, il ne peut être que le sien (ou ceux de son équipe, non implémenté ici)
                    if (userIdFilter && userIdFilter !== currentUserId) {
                        // Option 1: Interdire
                        // throw new ForbiddenException('Managers can only view their own logs or logs of their team.');
                        // Option 2: Forcer le filtre à son ID (ou ne rien retourner si on veut être strict)
                        // Pour l'instant, on laisse le service gérer le filtrage, mais on pourrait ajouter une contrainte ici.
                        // Si aucun userIdFilter n'est fourni par un manager, il voit potentiellement plus (selon la logique du service).
                        // Il faudrait affiner cela pour que le service filtre par défaut les logs de l'équipe du manager.
                        // Pour cette version, on se contente de passer le filtre tel quel.
                        filters.userId = userIdFilter;
                    }
                    else if (userIdFilter) {
                        filters.userId = userIdFilter; // Le manager filtre par son propre ID
                    }
                    else {
                        // Si un manager ne filtre pas par userId, il pourrait voir plus. À restreindre dans le service.
                        // Pour l'instant, on ne restreint pas ici, mais on pourrait vouloir que filters.userId = currentUserId par défaut pour un manager.
                    }
                }
                else if (currentUserRole === 'admin') {
                    if (userIdFilter) {
                        filters.userId = userIdFilter;
                    }
                }
                return this.auditLogService.getAuditLogs(pageNumber, limitNumber, filters);
            });
        }
    };
    __setFunctionName(_classThis, "AuditLogController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAuditLogs_decorators = [(0, common_1.Get)(), (0, roles_decorator_1.Roles)('admin', 'manager')];
        __esDecorate(_classThis, null, _getAuditLogs_decorators, { kind: "method", name: "getAuditLogs", static: false, private: false, access: { has: obj => "getAuditLogs" in obj, get: obj => obj.getAuditLogs }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditLogController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditLogController = _classThis;
})();
exports.AuditLogController = AuditLogController;
//# sourceMappingURL=audit-log.controller.js.map