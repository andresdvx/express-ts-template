import { Application, Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}

  configureRoutes(app: Application) {
    app.get("/api/users/getAll", this.getAll.bind(this));
    app.post("/api/users/create", this.create.bind(this));
  }

  async getAll(req: Request, res: Response) {
    const users = await this.userService.getAll();
    return res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const user = await this.userService.create(data);
    return res.status(201).json(user);
  }
}
