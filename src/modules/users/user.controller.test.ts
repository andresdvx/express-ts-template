import express, { Application } from "express";
import superTest from "supertest";
import { AppModule } from "../../app.module";
import { User } from "@prisma/client";

describe("user controller", () => {
  let app: Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const appModule = new AppModule();
    appModule.configure(app);
  });

  it("/getAll should return an user array", async () => {
    await superTest(app)
      .get("/api/users/getAll")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(async (response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });

  it("/create should create an return an user", async () => {
    const data = {
      name: "andres",
      email: "andres@mail.com",
    };
    await superTest(app)
      .post("/api/users/create")
      .send(data)
      .expect(201)
      .then(async (response) => {
        expect(response.error).toBeFalsy();
        const user = response.body;
        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("email");
      });
  });
});
