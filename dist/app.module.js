"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const user_module_1 = require("./modules/users/user.module");
class AppModule {
    constructor() {
        this.modules = [new user_module_1.UserModule()];
    }
    configure(app) {
        for (let module of this.modules) {
            module.configure(app);
        }
    }
}
exports.AppModule = AppModule;
