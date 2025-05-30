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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common"); // En supposant l'utilisation de NestJS, sinon ajuster les décorateurs/DI
let NotificationService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var NotificationService = _classThis = class {
        // private transporter; // Pour Nodemailer
        constructor(notificationRepository) {
            this.notificationRepository = notificationRepository;
            // Configuration de Nodemailer (à faire avec les identifiants SMTP)
            // this.transporter = nodemailer.createTransport({
            //   host: process.env.SMTP_HOST,
            //   port: process.env.SMTP_PORT,
            //   secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            //   auth: {
            //     user: process.env.SMTP_USER,
            //     pass: process.env.SMTP_PASS,
            //   },
            // });
        }
        createNotification(notificationData) {
            return __awaiter(this, void 0, void 0, function* () {
                const notification = this.notificationRepository.create({
                    user_id: notificationData.userId,
                    type: notificationData.type,
                    message: notificationData.message,
                    data: notificationData.data,
                });
                yield this.notificationRepository.save(notification);
                // TODO: Déclencher l'envoi d'email si nécessaire
                // const user = await this.userRepository.findOne(notificationData.userId); // Nécessite userRepository
                // if (user && user.email) { // et que l'utilisateur a des préférences pour email
                //   this.sendEmailNotification(user.email, notificationData.type, notificationData.message);
                // }
                return notification;
            });
        }
        getUserNotifications(userId_1) {
            return __awaiter(this, arguments, void 0, function* (userId, page = 1, limit = 10) {
                return this.notificationRepository.find({
                    where: { user_id: userId },
                    order: { created_at: 'DESC' },
                    skip: (page - 1) * limit,
                    take: limit,
                });
            });
        }
        markAsRead(notificationId, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                const notification = yield this.notificationRepository.findOne({ where: { id: notificationId, user_id: userId } });
                if (notification && !notification.read_at) {
                    notification.read_at = new Date();
                    return this.notificationRepository.save(notification);
                }
                return notification; // ou null si non trouvée / déjà lue
            });
        }
        markAllAsRead(userId) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.notificationRepository.update({ user_id: userId, read_at: null }, { read_at: new Date() });
            });
        }
    };
    __setFunctionName(_classThis, "NotificationService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationService = _classThis;
})();
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map