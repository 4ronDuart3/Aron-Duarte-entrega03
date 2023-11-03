import { useState } from 'react'
import './style/responsive.css'
import './style/proyect.css'
import ResponsiveApi from './api/ResponsiveApi' 
import JavaSciptApi from "./api/JavaSciptApi"
import ReactApi from './api/ReactApi'

const Responsive = () => {
    const [ver, setVer] = useState (false)
    
    const toggleVer = () => {
        setVer (!ver)
    }

    const [ver02, setVer02] = useState (false)
    
    const toggleVer02 = () => {
        setVer02 (!ver02)
    }

    const [ver03, setVer03] = useState (false)
    
    const toggleVer03 = () => {
        setVer03 (!ver03)
    }
    
    return(<>

<section className="proyects" id="proyects__mobile02">
    <article className="proyects__div">
      <section id="proyects">
        <p className="proyects__p">Proyectos(3)</p>
        <section className="container__buttons">
          <button className="btnBlue" id="btnResponsivo" onClick={toggleVer}>
            <p className="btnPBlue">Responsivo</p>
          </button>
          <button className="btn" id="btnJavaScript" onClick={toggleVer02}>
            <p className="btnP">JavaScript</p>
          </button>
          <button className="btn" id="btnReact" onClick={toggleVer03}>
            <p className="btnP">React</p>
          </button>
        </section>
      </section>
    </article>
  </section>

<div className='ResponsiveContaniner'>

  <div className={`divResponsiveApi ${ ver ? 'ver' : ''}`}>
    <ResponsiveApi />
  </div>

  <div className={`divJavaSciptApi ${ ver02 ? 'ver02' : ''}`}>
    <JavaSciptApi />
  </div>

  <div className={`ReactApi ${ ver03 ? 'ver03' : ''}`}>
    <ReactApi />
  </div>


</div>







    </>)
}

export default Responsive