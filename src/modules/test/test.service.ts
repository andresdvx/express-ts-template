import {NotFoundError} from 'express-zen'

export class TestService {
  constructor() {}
  
  async test() {
    // throw new NotFoundError("not found user");
    return { ok: true, user : {name : 'juancho', 'mail': 'juancho@mail.com'} };
  }
}
