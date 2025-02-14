import {BadRequestError} from "express-http-error-handler";

export class TestService {
  constructor() {}
  
  test() {
    throw new BadRequestError("Bad Request Error");
  }
}
