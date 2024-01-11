import { Link } from 'react-router-dom'
import styles from './about.module.css'

export const ImgPortada = () => {
  return (
    <div className={`card ${styles.impPortada}`} >
      <div className={`card-body ${styles.CardTextPortada}`} >
        <div className="card-title" >
          <h1 className={` text-dark fw-bolder ${styles.exception} ${styles.exceptionTitle}`} >NUESTRO PRINCIPAL OBJETIVO ES SATISFACER A NUESTROS CLIENTES</h1>
          <Link to={'/Contact'} type="button" className={`btn  mt-2 fw-bold ${styles.exception} ${styles.efectoBoton}`} style={{fontSize:'15px', padding:'13px'}}>CONTACTANOS</Link>
        </div>
      </div>

    </div>
  )
}