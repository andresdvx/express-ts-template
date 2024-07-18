import { Application, Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}

  configureRoutes(app: Application) {
    app.get("/api/users/getAll", this.getAllUsers.bind(this));
    app.post("/api/users/create", this.createUser.bind(this));
    app.get("/api/users/signIn", this.signIn.bind(this));
    app.delete("/api/users/delete/:userId", this.deleteUser.bind(this));
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();
    return res.status(200).json(users);
  }

  async createUser(req: Request, res: Response) {
    const data = req.body;
    const user = await this.userService.createUser(data);
    return res.status(201).json(user);
  }

  async signIn(req: Request, res: Response) {
    const data = req.body;
    const user = await this.userService.signIn(data);
    return res.status(200).json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await this.userService.deleteUser(Number(userId));
    return res.status(200).json(user);
  }
}
