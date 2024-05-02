import { GitHub, Preview } from "../svg/iconsSvg"
import "./Article.css"

export const Article = () => {
    return(
        <article id="proyectos">
        <picture>
          <img src="https://img.freepik.com/vector-gratis/companeros-piso-comenzando-proyecto-empresarial_23-2148857003.jpg?w=900&t=st=1713464152~exp=1713464752~hmac=e8d5865e51619cefa7205af08c263124c47d9c759661b0483a153a9a762f0437" alt="" />
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