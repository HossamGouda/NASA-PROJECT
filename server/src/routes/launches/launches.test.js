const supertest = require("supertest")
const app = require("../../app")
const request = supertest(app)

describe("Test GET/Launches", () => {
  test(`It Should respond with 200 Success`, async () => {
    const response = await request
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200)
  })
})
