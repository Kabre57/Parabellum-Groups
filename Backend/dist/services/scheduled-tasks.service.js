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
exports.ScheduledTasksService = void 0;
const common_1 = require("@nestjs/common");
// Importer d'autres services si nécessaire pour l'archivage (ex: MissionService, AuditLogService pour purger ses propres logs)
let ScheduledTasksService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ScheduledTasksService = _classThis = class {
        constructor(reportService, notificationService, auditLogService) {
            this.reportService = reportService;
            this.notificationService = notificationService;
            this.auditLogService = auditLogService;
        }
        runWeeklyReportGeneration() {
            return __awaiter(this, void 0, void 0, function* () {
                const taskName = "Génération et Envoi des Rapports Hebdomadaires";
                console.log(`[ScheduledTask] Démarrage de : ${taskName}`);
                try {
                    // Logique pour déterminer quels rapports générer et à qui les envoyer
                    // Exemple: Générer un rapport d'activité global et un rapport financier global
                    const adminUsers = []; // await this.userService.findAllByRole('admin'); // Nécessite UserService
                    // Rapport d'activité
                    // const activityReportParams = { /* pas de filtre spécifique pour un rapport global */ };
                    // const activityPdfBuffer = await this.reportService.generateTechnicianActivityReportPdf(activityReportParams);
                    // const activityExcelBuffer = await this.reportService.generateTechnicianActivityReportExcel(activityReportParams);
                    // Rapport financier
                    // const financialReportParams = {};
                    // const financialPdfBuffer = await this.reportService.generateFinancialReportPdf(financialReportParams);
                    // const financialExcelBuffer = await this.reportService.generateFinancialReportExcel(financialReportParams);
                    // Envoyer les rapports par email aux administrateurs (exemple)
                    // for (const admin of adminUsers) {
                    //   if (admin.email) {
                    //     await this.notificationService.sendEmailWithAttachments(
                    //       admin.email,
                    //       "Vos Rapports Hebdomadaires Parabellum",
                    //       "Veuillez trouver ci-joints vos rapports hebdomadaires.",
                    //       [
                    //         { filename: "rapport_activite_hebdomadaire.pdf", content: activityPdfBuffer, contentType: "application/pdf" },
                    //         { filename: "rapport_activite_hebdomadaire.xlsx", content: activityExcelBuffer, contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
                    //         { filename: "rapport_financier_hebdomadaire.pdf", content: financialPdfBuffer, contentType: "application/pdf" },
                    //         { filename: "rapport_financier_hebdomadaire.xlsx", content: financialExcelBuffer, contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
                    //       ]
                    //     );
                    //   }
                    // }
                    const message = `${taskName} exécutée avec succès. (Simulation actuelle).`;
                    console.log(`[ScheduledTask] ${message}`);
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_SUCCESS",
                        details: message,
                        entityType: "SystemTask",
                    });
                    return message;
                }
                catch (error) {
                    const errorMessage = `${taskName} a échoué: ${error.message}`;
                    console.error(`[ScheduledTask] ${errorMessage}`, error);
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_FAILURE",
                        details: errorMessage,
                        entityType: "SystemTask",
                    });
                    throw new Error(errorMessage);
                }
            });
        }
        runMonthlyDataArchival() {
            return __awaiter(this, void 0, void 0, function* () {
                const taskName = "Archivage Mensuel des Données Anciennes";
                console.log(`[ScheduledTask] Démarrage de : ${taskName}`);
                try {
                    // Logique d'archivage
                    // Exemple: Purger les logs d'audit plus vieux que 2 ans (730 jours)
                    // La durée de rétention est de 2 ans selon les specs.
                    const auditLogRetentionDays = 730;
                    yield this.auditLogService.purgeOldLogs(auditLogRetentionDays);
                    // Exemple: Archiver les missions terminées depuis plus de X temps
                    // const missionsToArchive = await this.missionService.findOldCompletedMissions( /* criteres */ );
                    // for (const mission of missionsToArchive) {
                    //   await this.missionService.archive(mission.id);
                    // }
                    const message = `${taskName} exécutée avec succès. Logs d'audit purgés. (Simulation partielle).`;
                    console.log(`[ScheduledTask] ${message}`);
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_SUCCESS",
                        details: message,
                        entityType: "SystemTask",
                    });
                    return message;
                }
                catch (error) {
                    const errorMessage = `${taskName} a échoué: ${error.message}`;
                    console.error(`[ScheduledTask] ${errorMessage}`, error);
                    yield this.auditLogService.logAction({
                        actionType: "SCHEDULED_TASK_FAILURE",
                        details: errorMessage,
                        entityType: "SystemTask",
                    });
                    throw new Error(errorMessage);
                }
            });
        }
    };
    __setFunctionName(_classThis, "ScheduledTasksService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScheduledTasksService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScheduledTasksService = _classThis;
})();
exports.ScheduledTasksService = ScheduledTasksService;
//# sourceMappingURL=scheduled-tasks.service.js.map