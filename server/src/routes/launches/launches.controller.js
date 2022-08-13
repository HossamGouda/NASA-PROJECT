import { launches, addNewLaunch } from "../../models/launches.model.js"

export const getAllLaunches = (req, res) => {
  res.status(200).json(Array.from(launches.values()))
}

export const httpAddNewLaunch = (req, res) => {
  const launch = req.body
  launch.launchDate = new Date(launch.launchDate)
  addNewLaunch(launch)
  return res.status(201).json(launch)
}
