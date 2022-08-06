import express from "express"
import cors from "cors"
import planetsRouter from "./routes/plantes/planets.router.js"

const app = express()
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
app.use(express.json())
app.use(planetsRouter)

export default app