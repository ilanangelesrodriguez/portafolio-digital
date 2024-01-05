// @ts-ignore
import pawrfectly1 from "../public/images/work/pawrfectly/1.gif"
// @ts-ignore
import pawrfectly2 from "../public/images/work/pawrfectly/2.jpg"
// @ts-ignore
import pawrfectly3 from "../public/images/work/pawrfectly/3.jpg"
// @ts-ignore
import pawrfectly4 from "../public/images/work/pawrfectly/4.jpg"
// @ts-ignore
import pawrfectly5 from "../public/images/work/pawrfectly/5.jpg"
// @ts-ignore
import pawrfectly6 from "../public/images/work/pawrfectly/6.jpg"
import { links } from "./links"

const pawrfectly = {
  id: "pawrfectly",
  images: [
    { image: pawrfectly1, order: 1, main: true },
    { image: pawrfectly2, order: 2 },
    { image: pawrfectly3, order: 3 },
    { image: pawrfectly4, order: 4 },
    { image: pawrfectly5, order: 5, thumbnail: true },
    { image: pawrfectly6, order: 6 },
  ],
  title: "Pawrfectly",
  description: `Pawrfectly es una marca americana dedicada a la creación de productos personalizados con la imagen de tu mascota. Se encargan de diseñar piezas como tazas de café y suéters con la imagen que elijas y/o el nombre de tu preferencia.
    
  Su misión es cambiar la vida de muchos animalitos, ya que de cada venta un porcentaje es destinado a darle un hogar y comida a perros y gatos en situación de calle.`,
  service: "Branding",
  date: "Agosto 2021",
  url: links.workPawrfectly,
}

const works = [ pawrfectly]

export { pawrfectly, works }
