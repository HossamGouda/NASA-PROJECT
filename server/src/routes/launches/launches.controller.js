import {
  getAllLaunches,
  addNewLaunch,
  exixtLaunchWithId,
  abortLaunchById,
} from "../../models/launches.model.js"

export const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches())
}

export const httpAddNewLaunch = (req, res) => {
  const launch = req.body
  if (
    !launch.launchDate ||
    !launch.mission ||
    !launch.target ||
    !launch.rocket
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    })
  }
  launch.launchDate = new Date(launch.launchDate)
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Date",
    })
  }
  addNewLaunch(launch)
  return res.status(201).json(launch)
}
export function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id)
  if (!exixtLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    })
  }
  const aborted = abortLaunchById(launchId)
  return res.status(200).json(aborted)
}
