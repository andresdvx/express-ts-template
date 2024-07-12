import { getRandomUser, RandomUser } from "./getRandomUser";

describe("get random user", () => {
  test("get random user should return an random email and name", async () => {
    const data: RandomUser = await getRandomUser();
    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("email");
    expect(typeof data).toBe('object');
  });
});
