import { Application } from "express";
import { UserModule } from "./modules/users/user.module";

export class AppModule {
  private modules = [new UserModule()];

  constructor() {}

  configure(app: Application) {
    for (let module of this.modules) {
      module.configureRoutes(app);
    }
  }
}
