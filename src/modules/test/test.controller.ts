import { Application, Request, Response } from "express";
import { TestService } from "./test.service";
import { ResMethod } from "../../common/http/decorators/resMethod.decorator";

export class TestController {
  constructor(private testService: TestService) {}

  configureRoutes(app: Application) {
    app.get("/", this.test.bind(this));
  }

  @ResMethod()
  async test(req: Request, res: Response) {
    const trin = await this.testService.test();
    return trin;
  }
}
