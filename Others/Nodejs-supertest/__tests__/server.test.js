// npm imports
import supertest from "supertest";

// local imports
import { app } from "../server";

/* To test when the app is deployed use the url of the app instead of importing it.
 For example use
  test("Testing status code", async()=> {
     const response = await supertest("localhost:3000").get("/");
     // assertion
  })
 */

describe("Integration Testing with Supertest: for the path /", () => {
  test("Testing the status code", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toEqual(200);
  });

  test("Testing the Content Type", async () => {
    const response = await supertest(app).get("/");
    // to see the response uncomment below line
    // console.log("response is", response);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
});

describe("Integration Testing with Supertest: for the path /login", () => {
  test("Testing the status code", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ username: "john", password: "xvyeooepp" });
    expect(response.statusCode).toEqual(200);
  });

  test("Testing the status code when no username", async () => {
    const response = await supertest(app).post("/login");
    expect(response.statusCode).toEqual(400);
  });

  test("Testing the response", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ username: "john", password: "xvyeooepp" });
    expect(response.body).toMatchObject({ message: "login success" });
  });
});
