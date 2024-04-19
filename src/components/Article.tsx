import { GitHub, Preview } from "../svg/iconsSvg"
import "./Article.css"

export const Article = () => {
    return(
        <article>
        <picture>
          <img src="https://img.freepik.com/vector-gratis/companeros-piso-comenzando-proyecto-empresarial_23-2148857003.jpg?w=900&t=st=1713464152~exp=1713464752~hmac=e8d5865e51619cefa7205af08c263124c47d9c759661b0483a153a9a762f0437" alt="" />
        </picture>
        
        <div>
          <h3>E-commerce</h3>
  
          <ul>
            <li className='label'>nextjs</li>
            <li className='label'>nextjs</li>
          </ul>
  
  
  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore doloremque in sunt aspernatur? Fuga, amet! Qui enim quasi aut aspernatur! Eos mollitia nostrum cum ea architecto. Vero, sapiente ipsam!</p>
  
          <button>
          <span><GitHub /></span>
            Code
          </button>
 
          <button>
            <span><Preview /></span>
            Preview</button>
        </div>
 
        </article>
    )
}