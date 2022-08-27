import supertest from "supertest"
import app from "../../app.js"

const request = supertest(app)

describe("Test GET/Launches", () => {
  test(`It Should respond with 200 Success`, async () => {
    const response = await request
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200)
  })
})

describe("Test Post/launches", () => {
  const completeLaunchData = {
    mission: "US",
    rocket: "NCC 170",
    target: "Kepler-186 f",
    launchDate: "January 4 , 2028",
  }

  const launchDataWithoutDate = {
    mission: "US",
    rocket: "NCC 170",
    target: "Kepler-186 f",
  }

  const launchDataWithInvalidDate = {
    mission: "US",
    rocket: "NCC 170",
    target: "Kepler-186 f",
    launchDate: "Hoss",
  }
  test("It Should respond with 201 Created", async () => {
    const response = await request
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201)

    const requestDate = new Date(completeLaunchData.launchDate).valueOf()
    const responseDate = new Date(response.body.launchDate).valueOf()
    expect(responseDate).toBe(requestDate)
    expect(response.body).toMatchObject(launchDataWithoutDate)
  })
  test("It Should Catch Missing properties", async () => {
    const response = await request
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400)
    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    })
  })
  test("It Should Catch Invalid Date ", async () => {
    const response = await request
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400)
    expect(response.body).toStrictEqual({
      error: "Invalid Date",
    })
  })
})
