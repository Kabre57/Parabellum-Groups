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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common"); // Supposant NestJS
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard"); // Supposant un guard JWT existant
let NotificationController = (() => {
    let _classDecorators = [(0, common_1.Controller)('notifications'), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getUserNotifications_decorators;
    let _markAsRead_decorators;
    let _markAllAsRead_decorators;
    var NotificationController = _classThis = class {
        constructor(notificationService) {
            this.notificationService = (__runInitializers(this, _instanceExtraInitializers), notificationService);
        }
        getUserNotifications(req, page, limit) {
            return __awaiter(this, void 0, void 0, function* () {
                const userId = req.user.id;
                const pageNumber = parseInt(page, 10) || 1;
                const limitNumber = parseInt(limit, 10) || 10;
                return this.notificationService.getUserNotifications(userId, pageNumber, limitNumber);
            });
        }
        markAsRead(notificationId, req) {
            return __awaiter(this, void 0, void 0, function* () {
                const userId = req.user.id;
                return this.notificationService.markAsRead(notificationId, userId);
            });
        }
        markAllAsRead(req) {
            return __awaiter(this, void 0, void 0, function* () {
                const userId = req.user.id;
                yield this.notificationService.markAllAsRead(userId);
                return { message: 'All notifications marked as read.' };
            });
        }
    };
    __setFunctionName(_classThis, "NotificationController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getUserNotifications_decorators = [(0, common_1.Get)()];
        _markAsRead_decorators = [(0, common_1.Post)(':id/read')];
        _markAllAsRead_decorators = [(0, common_1.Post)('read-all')];
        __esDecorate(_classThis, null, _getUserNotifications_decorators, { kind: "method", name: "getUserNotifications", static: false, private: false, access: { has: obj => "getUserNotifications" in obj, get: obj => obj.getUserNotifications }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _markAsRead_decorators, { kind: "method", name: "markAsRead", static: false, private: false, access: { has: obj => "markAsRead" in obj, get: obj => obj.markAsRead }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _markAllAsRead_decorators, { kind: "method", name: "markAllAsRead", static: false, private: false, access: { has: obj => "markAllAsRead" in obj, get: obj => obj.markAllAsRead }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationController = _classThis;
})();
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map