import { Application, Request, Response } from "express";
import { TestService } from "./test.service";
import { ResMethod } from "express-http-error-handler";

export class TestController {
  constructor(private testService: TestService) {}

  configureRoutes(app: Application) {
    app.get("/", this.test.bind(this));
  }

  @ResMethod()
  test(req: Request, res: Response) {
    const users = this.testService.test();
    return res.status(200).json(users);
  }
}
