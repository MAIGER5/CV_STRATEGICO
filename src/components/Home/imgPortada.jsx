// import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import styles from './home.module.css'

export const ImgPortada = () => {
  return (
    <div className={`${styles.impPortada}`} >
        <div className=" container pt-5 ps-5 ">
          <p className={`fw-medium text-info fs-5 ${styles.exception}`} style={{letterSpacing:'7px', lineHeight:'0px '}}>EXPERTOS</p>
          <h1 className={`w-50 text-dsuccess fw-bold ${styles.exception}`} style={{fontSize:'37px', textWrap:'balance'}}>CONSULTORIA MINERA</h1>
          <p className={`d-none d-md-block fw-bold text-info  ${styles.exception}`}  style={{lineHeight:'3px', fontSize:'13px'}}>Más de 15 años en el mercado, brindando soporte y confianza a nuestros Clientes</p>
          <Link to={'/About'} type="button" className={`btn  mt-2 fw-bold text-warning ${styles.exception} ${styles.efectoBoton}`} style={{fontSize:'12px', padding:'11px'}}>ACERCA DE NOSOTROS</Link>
        </div>
    </div>
  )
}