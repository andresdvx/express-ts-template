import express, { Application } from "express";
import superTest from "supertest";
import { getRandomUser, RandomUser } from "../../common/utils/getRandomUser";
import { AppModule } from "../../app.module";

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
        const data = response.body;
        expect(Array.isArray(data)).toBeTruthy();
      });
  });

  it("/create should create an return an user", async () => {
    const { name, email }: RandomUser = await getRandomUser();
    const data = {
      name,
      email,
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

  it("/signIn should return null if user does not exists", async () => {
    const data = {
      email: "notExists@mail.com",
      name: "notexists",
    };

    return await superTest(app)
      .get("/api/users/signIn")
      .send(data)
      .expect(200)
      .then(async (response) => {
        const data = response.body;
        expect(data).toBeNull();
      });
  });
});
