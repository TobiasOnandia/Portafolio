import { Resume } from "../svg/iconsSvg"
import "./Footer.css"

export const Footer = () =>{

  return(
      <footer id="sobre-mi">
      <h2>
        <span>
          <Resume />
        </span>
        Sobre mi
        </h2>
      <p>Me llamo Tobias Onandia. Empece en la programacion a los 19 años.
        Actualmente me encontre cursando en segundo año, la carrera Analista en sistemas
      </p>
      <p>
      En 2023 estuve trabajando en una empresa de venta de neumaticos, en el area de administracion.
        Algunos de mis logros fueron integrar software .
        En realizar los contactos para realizar pasantias a distintas universidades.
      </p>
    </footer>
    )
}