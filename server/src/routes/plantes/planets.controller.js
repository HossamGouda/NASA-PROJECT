import { getAllPlanets } from "../../models/planets.model.js"

export const httpGetAllPlanets = (req, res) => {
  res.status(200).json(getAllPlanets())
}
