import path from "path"
import { fileURLToPath } from "url"
import fs from "fs"
import { parse } from "csv-parse"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const habitablePlanet = []
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}
// console.log(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
export function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanet.push(data)
        }
      })
      .on("error", (err) => {
        console.log(err)
        reject(err)
      })
      .on("end", () => {
        // console.log(
        //   habitablePlanet.map((planet) => {
        //     return planet["kepler_name"]
        //   })
        // )
        console.log(`${habitablePlanet.length} habitable plantes found !`)
        resolve()
      })
  })
}

export function getAllPlanets() {
  return habitablePlanet
}
