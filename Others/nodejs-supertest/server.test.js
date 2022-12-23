// npm imports
import supertest from "supertest";

// local imports
import { app } from "./server";

/* To test when the app is deployed use the url of the app instead of import it
 for example use
 test("Testing status code", async()=> {
    const response = await supertest("localhost:3000").get("/");
    expect(response.statusCode).toEqual(200);
 })
 */

describe("Integration Testing with Supertest", () => {
  test("Testing the status code", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toEqual(200);
  });
  test("Testing the Content Type", async () => {
    const response = await supertest(app).get("/");
    console.log("response is", response);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
});
