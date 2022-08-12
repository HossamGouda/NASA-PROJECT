import express from "express"
import cors from "cors"
import planetsRouter from "./routes/plantes/planets.router.js"
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
app.use(morgan("combined"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "build")))
app.use(planetsRouter)
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})
console.log(path.join(__dirname, "..", "build"))

export default app
