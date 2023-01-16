// npm imports
import supertest from "supertest";

// local imports
import { app } from "../server/server";

describe("Testing another service route", () => {
  test("Testing another service route", async () => {
    const response = await supertest(app).get("/services/credentials");
    expect(response.statusCode).toEqual(200);
  });
});
