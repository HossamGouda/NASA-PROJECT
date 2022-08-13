export const launches = new Map()

let latestFlightNumber = 100
const launch = {
  flightNumber: 100,
  mission: "kepler Exploration X",
  rocket: "Expolrer IS1",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

export const addNewLaunch = () => {
  latestFlightNumber++
  launches.set(
    launch.flightNumber,
    object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["zero to Mastery ", "NASA"],
      flightNumber: latestFlightNumber,
    })
  )
}

launches.set(launch.flightNumber, launch)
