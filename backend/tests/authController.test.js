const request = require("supertest");
const express = require("express");
const authRoutes = require("../routes/auth");

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

describe("Auth Routes", () => {
  it("POST /auth/login should respond with 200 and token on valid credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "viviana.calva@unl.edu.ec", password: "Mayonesa12345" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it.skip("POST /auth/login should respond with 401 on invalid credentials", async () => {});

  it.skip("POST /auth/register should respond with 200 and token on successful registration", async () => {});
});
