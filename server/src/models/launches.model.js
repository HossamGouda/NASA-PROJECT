export const launches = new Map()

let latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "kepler Exploration X",
  rocket: "Expolrer IS1",
  launchDate: new Date("December 27,2030"),
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

export function getAllLaunches() {
  return Array.from(launches.values())
}

export const addNewLaunch = (launch) => {
  latestFlightNumber++
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["zero to Mastery ", "NASA"],
      flightNumber: latestFlightNumber,
    })
  )
}
launches.set(launch.flightNumber, launch)

export function exixtLaunchWithId(launchId) {
  return launches.has(launchId)
}
export function abortLaunchById(launchId) {
  const aborted = launches.get(launchId)
  aborted.upcoming = false
  aborted.success = false
  return aborted
}
