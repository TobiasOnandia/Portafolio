import { GitHub, Preview } from "../svg/iconsSvg"
import ImgEcommerce from "../../public/Foto de ecommerce.png"

import "./Article.css"

export const Article = () => {
    return(
        <article id="proyectos">
        <picture >
          <img className="imgEcommerce" src={ImgEcommerce} alt="Foto sobre el inicio de una tienda online creado por Tobias Onandia" />
        </picture>
        
        <div>
          <h3>E-commerce</h3>
  
          <ul>
            <li className='label'>nextjs</li>
            <li className='label'>nextjs</li>
          </ul>
  
  
  
          <p>
           La aplicación está diseñada para funcionar como un e-commerce completo, permitiendo a los usuarios navegar por productos, agregarlos al carrito de compras,gestionar pedidos e iniciar sesion.
          </p>
  
          <a href="https://github.com/TobiasOnandia/e-commerce" target="_blank" >
          <span><GitHub /></span>
            Code
          </a>
 
          <a href=" " target="_blank">
            <span><Preview /></span>
            Preview</a>
        </div>
 
        </article>
    )
}