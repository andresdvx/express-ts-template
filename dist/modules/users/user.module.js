"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
class UserModule {
    constructor() {
        this.userService = new user_service_1.UserService();
        this.userController = new user_controller_1.UserController(this.userService);
    }
    configure(app) {
        this.userController.configureRoutes(app);
    }
}
exports.UserModule = UserModule;
