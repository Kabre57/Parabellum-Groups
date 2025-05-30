"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const ExcelJS = __importStar(require("exceljs"));
const puppeteer_1 = __importDefault(require("puppeteer")); // Pour la génération PDF via HTML
let ReportService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ReportService = _classThis = class {
        constructor(
        // @Inject(MissionService) private readonly missionService: MissionService,
        // @Inject(UserService) private readonly userService: UserService,
        // Injecter d'autres services si nécessaire
        ) { }
        getCommonReportData(params) {
            return __awaiter(this, void 0, void 0, function* () {
                // Logique de récupération des données communes ou spécifiques
                // Exemple simplifié:
                // const missions = await this.missionService.findAll({ /* filtres basés sur params */ });
                // return missions;
                console.log('Fetching data with params:', params); // Placeholder
                // Simuler des données pour l'exemple
                const mockData = [
                    { id: '1', technicien: 'Dupont', client: 'Client A', heures: 8, cout: 200, date: '2023-10-01' },
                    { id: '2', technicien: 'Martin', client: 'Client B', heures: 6, cout: 150, date: '2023-10-02' },
                    { id: '3', technicien: 'Dupont', client: 'Client C', heures: 10, cout: 250, date: '2023-10-03' },
                ];
                let filteredData = mockData;
                if (params.technicianId) {
                    // Supposons que technicianId correspond au nom pour la démo
                    filteredData = filteredData.filter(d => d.technicien === params.technicianId);
                }
                if (params.clientId) {
                    filteredData = filteredData.filter(d => d.client === params.clientId);
                }
                // Filtrage par date à implémenter si nécessaire
                return filteredData;
            });
        }
        generateTechnicianActivityReportExcel(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield this.getCommonReportData(params); // Adapter pour les données spécifiques
                if (!data.length && params.technicianId) {
                    // Optionnel: vérifier si le technicien existe même s'il n'a pas d'activité
                    // const technicien = await this.userService.findOne(params.technicianId);
                    // if (!technicien) throw new NotFoundException(`Technician with ID ${params.technicianId} not found`);
                }
                const workbook = new ExcelJS.Workbook();
                workbook.creator = 'Parabellum App';
                workbook.lastModifiedBy = 'Parabellum App';
                workbook.created = new Date();
                workbook.modified = new Date();
                const sheet = workbook.addWorksheet('Rapport Activité Technicien');
                sheet.columns = [
                    { header: 'ID Mission', key: 'id', width: 10 },
                    { header: 'Technicien', key: 'technicien', width: 30 },
                    { header: 'Client', key: 'client', width: 30 },
                    { header: 'Date', key: 'date', width: 15 },
                    { header: 'Heures Travaillées', key: 'heures', width: 20, style: { numFmt: '#,##0.00' } },
                    // Ajouter d'autres colonnes selon le modèle
                ];
                sheet.getRow(1).font = { bold: true };
                data.forEach(item => {
                    sheet.addRow(item);
                });
                // Ajouter des totaux ou des informations de résumé si nécessaire
                // Exemple: sheet.addRow({ heures: data.reduce((sum, item) => sum + item.heures, 0) });
                return Buffer.from(yield workbook.xlsx.writeBuffer());
            });
        }
        generateFinancialReportExcel(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield this.getCommonReportData(params); // Adapter pour les données financières
                const workbook = new ExcelJS.Workbook();
                const sheet = workbook.addWorksheet('Rapport Financier');
                sheet.columns = [
                    { header: 'ID Mission', key: 'id', width: 10 },
                    { header: 'Client', key: 'client', width: 30 },
                    { header: 'Date', key: 'date', width: 15 },
                    { header: 'Coût Total', key: 'cout', width: 15, style: { numFmt: '#,##0.00 €' } },
                    // Ajouter d'autres colonnes (revenus, marge, etc.)
                ];
                sheet.getRow(1).font = { bold: true };
                data.forEach(item => sheet.addRow(item));
                return Buffer.from(yield workbook.xlsx.writeBuffer());
            });
        }
        generatePdfFromHtml(htmlContent) {
            return __awaiter(this, void 0, void 0, function* () {
                const browser = yield puppeteer_1.default.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
                const page = yield browser.newPage();
                yield page.setContent(htmlContent, { waitUntil: 'networkidle0' });
                const pdfBuffer = yield page.pdf({ format: 'A4', printBackground: true });
                yield browser.close();
                return pdfBuffer;
            });
        }
        generateTechnicianActivityReportPdf(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield this.getCommonReportData(params);
                // Générer le contenu HTML basé sur les données et un template
                // Ce template doit être plus élaboré et respecter les modèles fournis
                let htmlContent = `<html><head><style>
      body { font-family: Arial, sans-serif; margin: 20px; }
      h1 { color: #333; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background-color: #f2f2f2; }
      .total { font-weight: bold; }
      </style></head><body>`;
                htmlContent += `<h1>Rapport d'Activité Technicien</h1>`;
                if (params.technicianId)
                    htmlContent += `<p>Technicien: ${params.technicianId}</p>`; // Remplacer par le nom si possible
                if (params.dateFrom)
                    htmlContent += `<p>Période du ${params.dateFrom} au ${params.dateTo || new Date().toISOString().split('T')[0]}</p>`;
                htmlContent += '<table><tr><th>ID Mission</th><th>Technicien</th><th>Client</th><th>Date</th><th>Heures</th></tr>';
                let totalHeures = 0;
                data.forEach(item => {
                    htmlContent += `<tr><td>${item.id}</td><td>${item.technicien}</td><td>${item.client}</td><td>${item.date}</td><td>${item.heures}</td></tr>`;
                    totalHeures += item.heures;
                });
                htmlContent += `<tr class="total"><td colspan="4">Total Heures</td><td>${totalHeures.toFixed(2)}</td></tr>`;
                htmlContent += '</table></body></html>';
                return this.generatePdfFromHtml(htmlContent);
            });
        }
        generateFinancialReportPdf(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield this.getCommonReportData(params);
                let htmlContent = `<html><head><style>
      body { font-family: Arial, sans-serif; margin: 20px; }
      h1 { color: #333; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background-color: #f2f2f2; }
      .total { font-weight: bold; }
      </style></head><body>`;
                htmlContent += '<h1>Rapport Financier</h1>';
                if (params.clientId)
                    htmlContent += `<p>Client: ${params.clientId}</p>`; // Remplacer par le nom si possible
                if (params.dateFrom)
                    htmlContent += `<p>Période du ${params.dateFrom} au ${params.dateTo || new Date().toISOString().split('T')[0]}</p>`;
                htmlContent += '<table><tr><th>ID Mission</th><th>Client</th><th>Date</th><th>Coût Total</th></tr>';
                let totalCouts = 0;
                data.forEach(item => {
                    htmlContent += `<tr><td>${item.id}</td><td>${item.client}</td><td>${item.date}</td><td>${item.cout.toFixed(2)} €</td></tr>`;
                    totalCouts += item.cout;
                });
                htmlContent += `<tr class="total"><td colspan="3">Total Coûts</td><td>${totalCouts.toFixed(2)} €</td></tr>`;
                htmlContent += '</table></body></html>';
                return this.generatePdfFromHtml(htmlContent);
            });
        }
    };
    __setFunctionName(_classThis, "ReportService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReportService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReportService = _classThis;
})();
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map