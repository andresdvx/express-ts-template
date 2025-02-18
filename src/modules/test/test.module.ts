import { Application } from "express";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

export class UserModule {
  private testController: TestController;
  private testService: TestService;

  constructor() {
    this.testService = new TestService();
    this.testController = new TestController(this.testService);
  }

  configure(app: Application) {
    this.testController.Router(app);
  }
}
