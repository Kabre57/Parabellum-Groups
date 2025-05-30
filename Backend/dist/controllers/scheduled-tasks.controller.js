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
exports.ScheduledTasksController = void 0;
const common_1 = require("@nestjs/common");
const api_key_auth_guard_1 = require("../auth/guards/api-key-auth.guard"); // Supposant un guard pour clé API
let ScheduledTasksController = (() => {
    let _classDecorators = [(0, common_1.Controller)("scheduled-tasks"), (0, common_1.UseGuards)(api_key_auth_guard_1.ApiKeyAuthGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _runWeeklyReports_decorators;
    let _runMonthlyArchival_decorators;
    var ScheduledTasksController = _classThis = class {
        constructor(scheduledTasksService, auditLogService) {
            this.scheduledTasksService = (__runInitializers(this, _instanceExtraInitializers), scheduledTasksService);
            this.auditLogService = auditLogService;
        }
        runWeeklyReports(req, ip) {
            return __awaiter(this, void 0, void 0, function* () {
                const taskName = "Exécution des rapports hebdomadaires via API";
                try {
                    const result = yield this.scheduledTasksService.runWeeklyReportGeneration();
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_API_CALL_SUCCESS",
                        ipAddress: ip || req.ip, // Utiliser @Ip() si disponible, sinon req.ip
                        details: `${taskName} appelée avec succès. Résultat: ${result}`,
                        entityType: "SystemTaskTrigger",
                    });
                    return { message: "Tâche d'envoi des rapports hebdomadaires initiée.", details: result };
                }
                catch (error) {
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_API_CALL_FAILURE",
                        ipAddress: ip || req.ip,
                        details: `${taskName} a échoué lors de l'appel API: ${error.message}`,
                        entityType: "SystemTaskTrigger",
                    });
                    // Renvoyer une réponse d'erreur appropriée au cron externe
                    // Il est important que le cron puisse savoir si l'appel a échoué
                    throw new Error(`Échec de l'initiation de la tâche d'envoi des rapports hebdomadaires: ${error.message}`);
                }
            });
        }
        runMonthlyArchival(req, ip) {
            return __awaiter(this, void 0, void 0, function* () {
                const taskName = "Exécution de l'archivage mensuel via API";
                try {
                    const result = yield this.scheduledTasksService.runMonthlyDataArchival();
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_API_CALL_SUCCESS",
                        ipAddress: ip || req.ip,
                        details: `${taskName} appelée avec succès. Résultat: ${result}`,
                        entityType: "SystemTaskTrigger",
                    });
                    return { message: "Tâche d'archivage mensuel initiée.", details: result };
                }
                catch (error) {
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_API_CALL_FAILURE",
                        ipAddress: ip || req.ip,
                        details: `${taskName} a échoué lors de l'appel API: ${error.message}`,
                        entityType: "SystemTaskTrigger",
                    });
                    throw new Error(`Échec de l'initiation de la tâche d'archivage mensuel: ${error.message}`);
                }
            });
        }
    };
    __setFunctionName(_classThis, "ScheduledTasksController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _runWeeklyReports_decorators = [(0, common_1.Post)("run/weekly-reports")];
        _runMonthlyArchival_decorators = [(0, common_1.Post)("run/monthly-archival")];
        __esDecorate(_classThis, null, _runWeeklyReports_decorators, { kind: "method", name: "runWeeklyReports", static: false, private: false, access: { has: obj => "runWeeklyReports" in obj, get: obj => obj.runWeeklyReports }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _runMonthlyArchival_decorators, { kind: "method", name: "runMonthlyArchival", static: false, private: false, access: { has: obj => "runMonthlyArchival" in obj, get: obj => obj.runMonthlyArchival }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScheduledTasksController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScheduledTasksController = _classThis;
})();
exports.ScheduledTasksController = ScheduledTasksController;
//# sourceMappingURL=scheduled-tasks.controller.js.map