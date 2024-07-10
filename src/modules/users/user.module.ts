import { Application } from "express";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "../../common/prisma/prisma.service";

export class UserModule {
  private userController: UserController;
  private userService: UserService;
  private prismaService: PrismaService;

  constructor() {
    this.prismaService = new PrismaService();
    this.userService = new UserService(this.prismaService);
    this.userController = new UserController(this.userService);
  }

  configureRoutes(app: Application) {
    this.prismaService
      .$connect()
      .then(() => console.log("db conectada"))
      .catch((error) => console.log(error));

    this.userController.configureRoutes(app);
  }
}
