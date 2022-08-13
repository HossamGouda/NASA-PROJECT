import express from "express"

import { getAllLaunches, httpAddNewLaunch } from "./launches.controller.js"
const launchesRouter = express.Router()

launchesRouter.get("/launches", getAllLaunches)
launchesRouter.post("/launches", httpAddNewLaunch)

export default launchesRouter
