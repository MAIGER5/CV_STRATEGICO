import React from 'react'
import imagen  from '../../Media/mina1.jpg'
import styles from './services.module.css'

export const Products = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card border border-0 ">
          <div className={`card-img-top rounded-0 text-dark container ${styles.Product_filter_img} ${styles.Product_img1}`} >
          <i className={`bi bi-search card-img-top fs-1 text-warning text-center align-items-center ${styles.excluido}`}></i>
          <h1 className={`container text-center fs-5 fw-bold ${styles.excluido}`}>DIAGNÓSTICO</h1>
          </div>
          <div className="card-body">
            <p className="card-title">Análisis Integral de la Situación Actual y Evaluación de Riesgos Minero.</p>
            <ul>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Desarrollo y ejecución</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Análisis</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Consultoría</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border border-0 ">
          <div className={`card-img-top rounded-0 text-dark container ${styles.Product_filter_img} ${styles.Product_img2}`} >
          <i className={`bi bi-database-fill-gear card-img-top fs-1 text-warning text-center align-items-center ${styles.excluido}`}></i>
          <h1 className={`container text-center fs-5 fw-bold ${styles.excluido}`}>OPTIMIZACIÓN</h1>
          </div>
          <div className="card-body">
            <p className="card-text">Estrategias para Optimizar el Rendimiento del Proyecto Minero.</p>
            <ul>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Ejecución</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Arquitectura</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Desarrollo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border border-0 ">
          <div className={`card-img-top rounded-0 text-dark container ${styles.Product_filter_img} ${styles.Product_img3}`} >
          <i className={`bi bi-intersect card-img-top fs-1 text-warning text-center align-items-center ${styles.excluido}`}></i>
          <h1 className={`container text-center fs-5 fw-bold ${styles.excluido}`}>ALIANZAS</h1>
          </div>
          <div className="card-body">
            <p className="card-title">Alianzas Estratégicas para la Realización de Estudios Técnicos, Jurídicos, Sociales y Ambientales.</p>
            <ul>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Consultoría</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Pilares</li>
              <li className={` ${styles.ul}`}><i className="bi bi-square-fill ps-0 pe-2 text-primary"></i>Estudio técnico</li>
            </ul>
          </div>
        </div>
      </div>








    </div>  
  )
}
