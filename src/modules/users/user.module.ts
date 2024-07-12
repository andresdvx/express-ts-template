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

  configure(app: Application) {
    this.prismaService.$connect();
    this.userController.configureRoutes(app);
  }
}
