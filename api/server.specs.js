const request = require('supertest');
const server = require("./server.js");
const db = require("../data/dbConfig");
const testUser = {username: "testing", password:"testing"}

describe("register", () => {
    it("should return 201 status code when adding new user", async () => {
    await db("users").truncate()
    const res = await request(server).post("/api/auth/register")
    .send(testUser);
    expect(res.status).toBe(201)
})
it("should return 500 status code for invalid user", async () => {
    const res = await request(server).post("/api/auth/register")
    .send({user: "test", pass: "test"});
    expect(res.status).toBe(500);
})
})

