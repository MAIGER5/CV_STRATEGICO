import React from 'react'
import styles from './about.module.css'
import { Link } from 'react-router-dom'

export const Body = () => {
  return (
    <div className="container">

      <div className="col py-5">
        <div className="card border border-0">
          <div className="card-body">
            <h2 className="card-title text-center text-primary fw-bold">BIENVENIDOS A NUESTRA COMPAÑIA</h2>
            <p className="card-text text-center " style={{textWrap:'balance'}}>
            Somos consultores expertos con amplia experiencia en el sector minero. 
            </p>
          </div>
        </div>
      </div>

      <div className="col pb-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card border border-0">
              <div className="card-body">
                <h2 className="card-title fw-bolder text-info">SOMOS COMPETITIVOS EN NUESTROS SERVICIOS</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit veritatis accusantium non quas explicabo dolorem tenetur id laboriosam, consequuntur, et nihil, quisquam reprehenderit. Omnis nostrum laborum hic eveniet quaerat?
                </p>
                <Link to={'/Contact'} className={`btn text-dark fw-bolder ${styles.contactBoton}`} style={{fontSize:'14px'}}>CONTACTANOS</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="row rows-cols-1 row-cols-lg-2 g-5 g-sm-2">
              <div className="col">
                <div className="card border border-0">
                  <div className="card-body">
                    <h1 className="card-title fs-5 fw-bolder text-info"><a className='text-decoration-none fw-bold'>01. </a>NUESTRA HISTORIA</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis voluptatum tempora perferendis illum ut nemo .</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0">
                  <div className="card-body">
                    <h1 className="card-title fs-5 fw-bolder text-info"><a className='text-decoration-none fw-bold'>02. </a> MISIÓN</h1>
                    <p className="card-text">CV Estratégico asesora a las empresas para potencializar su negocio y darle valor agregado articulando las diferentes áreas y encaminándolas a un objetivo común.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0">
                  <div className="card-body">
                    <h1 className="card-title fs-5 fw-bolder text-info"><a className='text-decoration-none fw-bold'>03. </a> VISIÓN</h1>
                    <p className="card-text">En 2025 CV Estraégico se consolidará como una firma asesora de los principales proyectos mineros en Colombia y del Gobierno Nacional para impulsar la minería sostenible que aporta al desarrollo del País.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0">
                  <div className="card-body">
                    <h1 className="card-title fs-5 fw-bolder text-info"><a className='text-decoration-none fw-bold'>04. </a> VALORES</h1>
                    <ul>
                      <li>Honestidad</li>
                      <li>Conocimiento</li>
                      <li>Eficiencia</li>
                      <li>Trabajo duro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
