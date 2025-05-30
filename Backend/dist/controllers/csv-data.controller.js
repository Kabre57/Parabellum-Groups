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
exports.CsvDataController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const csv_data_service_1 = require("./csv-data.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let CsvDataController = (() => {
    let _classDecorators = [(0, common_1.Controller)("csv-data"), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _exportData_decorators;
    let _importData_decorators;
    let _getCsvTemplate_decorators;
    var CsvDataController = _classThis = class {
        constructor(csvDataService) {
            this.csvDataService = (__runInitializers(this, _instanceExtraInitializers), csvDataService);
        }
        exportData(entityType, filters, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const csvString = yield this.csvDataService.exportData(entityType, filters);
                const filename = `export_${entityType}_${Date.now()}.csv`;
                // await this.auditLogService.logAction({
                //   userId: req.user.id,
                //   username: req.user.username,
                //   actionType: `EXPORT_${entityType.toUpperCase()}_CSV`,
                //   ipAddress: req.ip,
                //   details: `Exported ${entityType} with filters: ${JSON.stringify(filters)}`,
                //   entityType: entityType,
                // });
                res.setHeader("Content-Type", "text/csv");
                res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
                res.send(csvString);
            });
        }
        importData(entityType, file) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!file) {
                    throw new Error("Aucun fichier n\'a été uploadé."); // Ou BadRequestException
                }
                const importResult = yield this.csvDataService.importData(entityType, file.buffer /*, importOptions */);
                // await this.auditLogService.logAction({
                //   userId: req.user.id,
                //   username: req.user.username,
                //   actionType: `IMPORT_${entityType.toUpperCase()}_CSV`,
                //   ipAddress: req.ip,
                //   details: `Import attempt for ${entityType}. Success: ${importResult.successCount}, Errors: ${importResult.errorCount}`,
                //   entityType: entityType,
                // });
                return importResult;
            });
        }
        // Endpoint pour télécharger un template CSV
        getCsvTemplate(entityType, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let headers = [];
                switch (entityType) {
                    case csv_data_service_1.CsvEntityType.CLIENTS:
                        headers = ["nom", "email", "telephone", "adresse"]; // Champs typiques pour un client
                        break;
                    case csv_data_service_1.CsvEntityType.MISSIONS:
                        headers = ["titre", "description", "clientId", "technicienId_ou_nom", "dateDebut", "dateFinPrevue"]; // Champs typiques pour une mission
                        break;
                    // Pas de template pour utilisateurs car la gestion est plus sensible (mots de passe, rôles)
                    default:
                        throw new Error("Type d\'entité non supporté pour le template CSV."); // Ou BadRequestException
                }
                const csvString = headers.join(",") + "\n";
                const filename = `template_${entityType}.csv`;
                res.setHeader("Content-Type", "text/csv");
                res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
                res.send(csvString);
            });
        }
    };
    __setFunctionName(_classThis, "CsvDataController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _exportData_decorators = [(0, common_1.Get)("export/:entityType"), (0, roles_decorator_1.Roles)("admin", "manager")];
        _importData_decorators = [(0, common_1.Post)("import/:entityType"), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
            // TODO: Ajouter des validateurs de fichier (taille, type MIME)
            // limits: { fileSize: 1024 * 1024 * 5 }, // Exemple: 5MB
            // fileFilter: (req, file, cb) => {
            //   if (file.mimetype === "text/csv") {
            //     cb(null, true);
            //   } else {
            //     cb(new BadRequestException("Seuls les fichiers CSV sont autorisés"), false);
            //   }
            // },
            })), (0, roles_decorator_1.Roles)("admin", "manager")];
        _getCsvTemplate_decorators = [(0, common_1.Get)("template/:entityType"), (0, roles_decorator_1.Roles)("admin", "manager")];
        __esDecorate(_classThis, null, _exportData_decorators, { kind: "method", name: "exportData", static: false, private: false, access: { has: obj => "exportData" in obj, get: obj => obj.exportData }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _importData_decorators, { kind: "method", name: "importData", static: false, private: false, access: { has: obj => "importData" in obj, get: obj => obj.importData }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCsvTemplate_decorators, { kind: "method", name: "getCsvTemplate", static: false, private: false, access: { has: obj => "getCsvTemplate" in obj, get: obj => obj.getCsvTemplate }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CsvDataController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CsvDataController = _classThis;
})();
exports.CsvDataController = CsvDataController;
//# sourceMappingURL=csv-data.controller.js.map