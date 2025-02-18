import { Application, Request, Response } from "express";
import { TestService } from "./test.service";
import { ResMethod } from "express-zen";
// import { ResMethod } from "../../common/http/decorators/resMethod.decorator";

export class TestController {
  constructor(private testService: TestService) {}

  Router(app: Application) {
    app.get("/test", this.test.bind(this));
  }

  @ResMethod()
  private async test(req: Request, res: Response) {
    const trin = this.testService.test();
    return trin;
  }
}
