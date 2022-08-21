import express from "express"
import cors from "cors"
import planetsRouter from "./routes/plantes/planets.router.js"
import launchesRouter from "./routes/launches/launches.router.js"
import path from "path"
import morgan from "morgan"

import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
app.use(morgan("short"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "build")))
app.use("/planets", planetsRouter)
app.use("/launches", launchesRouter)

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})

export default app
