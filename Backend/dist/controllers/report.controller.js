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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard"); // Ajuster le chemin si nécessaire
const roles_guard_1 = require("../auth/guards/roles.guard"); // Ajuster le chemin si nécessaire
const roles_decorator_1 = require("../auth/decorators/roles.decorator"); // Ajuster le chemin si nécessaire
const class_validator_1 = require("class-validator");
let ReportRequestDto = (() => {
    var _a;
    let _format_decorators;
    let _format_initializers = [];
    let _format_extraInitializers = [];
    let _dateFrom_decorators;
    let _dateFrom_initializers = [];
    let _dateFrom_extraInitializers = [];
    let _dateTo_decorators;
    let _dateTo_initializers = [];
    let _dateTo_extraInitializers = [];
    let _technicianId_decorators;
    let _technicianId_initializers = [];
    let _technicianId_extraInitializers = [];
    let _clientId_decorators;
    let _clientId_initializers = [];
    let _clientId_extraInitializers = [];
    return _a = class ReportRequestDto {
            constructor() {
                this.format = __runInitializers(this, _format_initializers, void 0);
                this.dateFrom = (__runInitializers(this, _format_extraInitializers), __runInitializers(this, _dateFrom_initializers, void 0));
                this.dateTo = (__runInitializers(this, _dateFrom_extraInitializers), __runInitializers(this, _dateTo_initializers, void 0));
                this.technicianId = (__runInitializers(this, _dateTo_extraInitializers), __runInitializers(this, _technicianId_initializers, void 0));
                this.clientId = (__runInitializers(this, _technicianId_extraInitializers), __runInitializers(this, _clientId_initializers, void 0));
                __runInitializers(this, _clientId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _format_decorators = [(0, class_validator_1.IsIn)(['pdf', 'excel'])];
            _dateFrom_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _dateTo_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _technicianId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _clientId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _format_decorators, { kind: "field", name: "format", static: false, private: false, access: { has: obj => "format" in obj, get: obj => obj.format, set: (obj, value) => { obj.format = value; } }, metadata: _metadata }, _format_initializers, _format_extraInitializers);
            __esDecorate(null, null, _dateFrom_decorators, { kind: "field", name: "dateFrom", static: false, private: false, access: { has: obj => "dateFrom" in obj, get: obj => obj.dateFrom, set: (obj, value) => { obj.dateFrom = value; } }, metadata: _metadata }, _dateFrom_initializers, _dateFrom_extraInitializers);
            __esDecorate(null, null, _dateTo_decorators, { kind: "field", name: "dateTo", static: false, private: false, access: { has: obj => "dateTo" in obj, get: obj => obj.dateTo, set: (obj, value) => { obj.dateTo = value; } }, metadata: _metadata }, _dateTo_initializers, _dateTo_extraInitializers);
            __esDecorate(null, null, _technicianId_decorators, { kind: "field", name: "technicianId", static: false, private: false, access: { has: obj => "technicianId" in obj, get: obj => obj.technicianId, set: (obj, value) => { obj.technicianId = value; } }, metadata: _metadata }, _technicianId_initializers, _technicianId_extraInitializers);
            __esDecorate(null, null, _clientId_decorators, { kind: "field", name: "clientId", static: false, private: false, access: { has: obj => "clientId" in obj, get: obj => obj.clientId, set: (obj, value) => { obj.clientId = value; } }, metadata: _metadata }, _clientId_initializers, _clientId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let ReportController = (() => {
    let _classDecorators = [(0, common_1.Controller)('reports'), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _generateTechnicianActivityReport_decorators;
    let _generateFinancialReport_decorators;
    var ReportController = _classThis = class {
        constructor(reportService) {
            this.reportService = (__runInitializers(this, _instanceExtraInitializers), reportService);
        }
        generateTechnicianActivityReport(body, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let buffer;
                let filename;
                let contentType;
                if (body.format === 'excel') {
                    buffer = yield this.reportService.generateTechnicianActivityReportExcel(body);
                    filename = `rapport_activite_technicien_${Date.now()}.xlsx`;
                    contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                }
                else { // pdf
                    buffer = yield this.reportService.generateTechnicianActivityReportPdf(body);
                    filename = `rapport_activite_technicien_${Date.now()}.pdf`;
                    contentType = 'application/pdf';
                }
                res.setHeader('Content-Type', contentType);
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
                res.send(buffer);
            });
        }
        generateFinancialReport(body, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let buffer;
                let filename;
                let contentType;
                if (body.format === 'excel') {
                    buffer = yield this.reportService.generateFinancialReportExcel(body);
                    filename = `rapport_financier_${Date.now()}.xlsx`;
                    contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                }
                else { // pdf
                    buffer = yield this.reportService.generateFinancialReportPdf(body);
                    filename = `rapport_financier_${Date.now()}.pdf`;
                    contentType = 'application/pdf';
                }
                res.setHeader('Content-Type', contentType);
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
                res.send(buffer);
            });
        }
    };
    __setFunctionName(_classThis, "ReportController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _generateTechnicianActivityReport_decorators = [(0, common_1.Post)('technician-activity'), (0, roles_decorator_1.Roles)('admin', 'manager')];
        _generateFinancialReport_decorators = [(0, common_1.Post)('financial'), (0, roles_decorator_1.Roles)('admin', 'manager')];
        __esDecorate(_classThis, null, _generateTechnicianActivityReport_decorators, { kind: "method", name: "generateTechnicianActivityReport", static: false, private: false, access: { has: obj => "generateTechnicianActivityReport" in obj, get: obj => obj.generateTechnicianActivityReport }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _generateFinancialReport_decorators, { kind: "method", name: "generateFinancialReport", static: false, private: false, access: { has: obj => "generateFinancialReport" in obj, get: obj => obj.generateFinancialReport }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReportController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReportController = _classThis;
})();
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map