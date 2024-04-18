import { Email, LinkedIn } from "../svg/iconsSvg"

export const Header = () => {
    return(
        <header>
        <nav>
          <ul>
            <li>Experiencia</li>
            <li>Proyectos</li>
            <li>Sobre mi</li>
            <li>Contacto</li>
          </ul>
        </nav>

        <section className='Introduccion'>
          <picture>
            <img src="https://randomuser.me/api/portraits/med/men/21.jpg" alt="Foto perfil de Tobias Onandia" />
             <span>Disponible para trabajar</span>
          </picture>
          
         
         
          <h1>Hey, soy Tobias Onandia</h1>
          <p>
            <span>Desarrolador Full-stack </span> de La Pampa, Argentina.
            Especializado en el desarrolo de aplicaciones web
          </p>

          <ul>
            <li>
            <span><Email /></span>  
              Contactame
            
            </li>
            <li>
            <span><LinkedIn /></span>
              LinkedIn
            </li>
          </ul>
        </section>

      </header>
    )
}