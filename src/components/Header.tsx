import { useState } from "react"
import { Email, LinkedIn } from "../svg/iconsSvg"
import "./Header.css"

export const Header = () => {
  
  const navBar = [
    {
      text: 'Inicio',
      label: 'inicio',
      url: '/#inicio',
      },
    {
    text: 'Proyectos',
    label: 'proyectos',
    url: '/#proyectos',
    },
    {
      text: 'Sobre mi',
      label:'sobre-mi',
      url: '/#sobre-mi',

    },
    {
      text: 'Contacto',
      label: 'contacto',
      url: 'email:tobiasonandia0@gmail.com',
    }
]




  return(
        <header id="inicio">
        <nav>
          <ul>
           {
            navBar.map(item => {
              return(
                <li key={item.label}>
                  <a href={item.url}>{item.text}</a>
                </li>
              )
            })
           }
          </ul>
        </nav>

        <section className='Introduccion'>
          <picture>
            <img src="https://randomuser.me/api/portraits/med/men/21.jpg" alt="Foto perfil de Tobias Onandia" />
             <span>Disponible para trabajar</span>
          </picture>
          
         
         
          <h1>Hola, soy Tobias Onandia</h1>
          <p>
            <span>Desarrolador Full-stack </span> de La Pampa, Argentina.
            Especializado en el desarrolo de aplicaciones web
          </p>

          <ul>
            <li>
            <span><Email /></span>  
              <a href="">Contactame</a>
            
            </li>
            <li>
            <span><LinkedIn /></span>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </section>

      </header>
    )
}