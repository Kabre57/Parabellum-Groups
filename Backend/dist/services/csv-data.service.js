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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvDataService = exports.CsvEntityType = void 0;
const common_1 = require("@nestjs/common");
const fastCsv = __importStar(require("fast-csv"));
const stream_1 = require("stream");
// Importer les services nécessaires pour les données (Client, Mission, User)
// import { ClientService } from "../clients/client.service";
// import { MissionService } from "../missions/mission.service";
// import { UserService } from "../users/user.service";
// import { AuditLogService } from "./audit-log.service"; // Pour logger les actions d'import/export
var CsvEntityType;
(function (CsvEntityType) {
    CsvEntityType["CLIENTS"] = "clients";
    CsvEntityType["MISSIONS"] = "missions";
    CsvEntityType["UTILISATEURS"] = "utilisateurs";
})(CsvEntityType || (exports.CsvEntityType = CsvEntityType = {}));
let CsvDataService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CsvDataService = _classThis = class {
        constructor(
        // @Inject(ClientService) private clientService: ClientService,
        // @Inject(MissionService) private missionService: MissionService,
        // @Inject(UserService) private userService: UserService,
        // @Inject(AuditLogService) private auditLogService: AuditLogService,
        ) { }
        exportData(entityType, filters) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = [];
                let headers = [];
                switch (entityType) {
                    case CsvEntityType.CLIENTS:
                        // data = await this.clientService.findAll(filters); // Récupérer les données clients
                        // headers = ["id", "nom", "email", "telephone", ...]; // Définir les en-têtes pour clients
                        data = [{ id: "cli1", nom: "Client Alpha", email: "alpha@example.com" }]; // Mock data
                        headers = ["id", "nom", "email"];
                        break;
                    case CsvEntityType.MISSIONS:
                        // data = await this.missionService.findAll(filters);
                        // headers = ["id", "titre", "clientId", "technicienId", "statut", ...];
                        data = [{ id: "mis1", titre: "Mission X", clientId: "cli1" }]; // Mock data
                        headers = ["id", "titre", "clientId"];
                        break;
                    case CsvEntityType.UTILISATEURS:
                        // data = await this.userService.findAll(filters);
                        // headers = ["id", "nomUtilisateur", "email", "role", ...];
                        data = [{ id: "usr1", nomUtilisateur: "admin", email: "admin@parabellum.com" }]; // Mock data
                        headers = ["id", "nomUtilisateur", "email"];
                        break;
                    default:
                        throw new common_1.BadRequestException("Type d'entité non supporté pour l'export CSV.");
                }
                if (!data.length) {
                    // Retourner un CSV avec seulement les en-têtes si pas de données
                    return headers.join(",") + "\n";
                }
                // S'assurer que les headers correspondent aux clés des objets de données ou transformer les données
                const csvStream = fastCsv.format({ headers: true });
                const readableStream = new stream_1.Readable();
                readableStream._read = () => { }; // Implémentation de _read requise
                // Pipe data to csvStream then to string
                const promise = new Promise((resolve, reject) => {
                    let csvString = "";
                    csvStream.on("data", (chunk) => (csvString += chunk));
                    csvStream.on("end", () => resolve(csvString));
                    csvStream.on("error", (err) => reject(err));
                    readableStream.pipe(csvStream);
                    data.forEach(row => readableStream.push(this.prepareRowForCsv(row, headers)));
                    readableStream.push(null); // Signale la fin du stream
                });
                return promise;
            });
        }
        prepareRowForCsv(row, headers) {
            // Optionnel: S'assurer que seules les colonnes des headers sont présentes et dans le bon ordre
            // Ou que les données complexes (objets imbriqués, dates) sont bien formatées
            const preparedRow = {};
            headers.forEach(header => {
                preparedRow[header] = row[header] !== undefined ? row[header] : "";
            });
            return preparedRow;
        }
        importData(entityType, fileBuffer, importOptions) {
            return __awaiter(this, void 0, void 0, function* () {
                const results = { successCount: 0, errorCount: 0, errors: [] };
                let lineNumber = 1; // CSV line number, 1 for header
                return new Promise((resolve, reject) => {
                    const stream = stream_1.Readable.from(fileBuffer.toString());
                    fastCsv
                        .parseStream(stream, { headers: true })
                        .on("error", (error) => {
                        results.errorCount++;
                        results.errors.push({ lineNumber: -1, message: `Erreur de parsing CSV: ${error.message}` });
                        reject(new common_1.BadRequestException(`Erreur de parsing CSV: ${error.message}`));
                    })
                        .on("data", (row) => __awaiter(this, void 0, void 0, function* () {
                        lineNumber++;
                        try {
                            // Mettre en pause le stream pour traiter la ligne de manière asynchrone
                            stream.pause();
                            // Valider et traiter la ligne `row`
                            // Exemple de validation et traitement (à adapter pour chaque entityType)
                            // if (!row.nom || !row.email) { // Validation basique
                            //   throw new Error("Champs 'nom' et 'email' requis.");
                            // }
                            // await this.clientService.createOrUpdateFromCsv(row, importOptions);
                            console.log(`Processing row ${lineNumber}:`, row); // Placeholder
                            // Simuler un traitement pour l'exemple
                            if (entityType === CsvEntityType.CLIENTS) {
                                if (!row.nom)
                                    throw new Error("Le nom du client est requis.");
                                // await this.clientService.create({ nom: row.nom, email: row.email, ... });
                            }
                            else if (entityType === CsvEntityType.MISSIONS) {
                                if (!row.titre)
                                    throw new Error("Le titre de la mission est requis.");
                                // await this.missionService.create({ titre: row.titre, clientId: row.clientId, ... });
                            }
                            results.successCount++;
                        }
                        catch (e) {
                            results.errorCount++;
                            results.errors.push({ lineNumber, message: e.message, rowData: row });
                        }
                        finally {
                            // Reprendre le stream après le traitement asynchrone
                            stream.resume();
                        }
                    }))
                        .on("end", (rowCount) => {
                        console.log(`Parsed ${rowCount} rows (excluding header)`);
                        // Logger l'action d'import
                        // await this.auditLogService.logAction({ /* ... */ });
                        resolve(results);
                    });
                });
            });
        }
    };
    __setFunctionName(_classThis, "CsvDataService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CsvDataService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CsvDataService = _classThis;
})();
exports.CsvDataService = CsvDataService;
//# sourceMappingURL=csv-data.service.js.map