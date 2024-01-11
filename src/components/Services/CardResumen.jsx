import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './services.module.css'
import { Link } from 'react-router-dom';

export const CardResumen = () => {
  return (
    // TARJETA ARRIBA
    <div id='productosGenerales' className='container position-relative'>
      <div className="card mb-3 rounded- bg-dark border border-0 ps-3" >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body py-4">
              <h5 className="card-title fs-2">Nuestra Distinción </h5>
              <p className="card-text">Descubre y explora más servicios a través de nuestro departamento comercial.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <Link to={'/Contact'} type="button" className={`btn  mt-2 fw-bold text-dark ${styles.efectoBoton}`} style={{fontSize:'15px', padding:'13px'}}>CONTACTANOS</Link>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-5 pb-5">
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-info border border-0 shadow`} >
            <i className="bi bi-person-fill-add card-img-top fs-1 text-dark px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title pb-3"> Dirección y Experiencia en el Sector Público</h5>
              <p className="card-text">Verónica Blandón Sánchez, Ingeniera Geóloga graduada de la Universidad Nacional de Colombia, especializada en Derecho Minero y Ambiental. Con 15 años de experiencia en el ámbito minero, tanto en el sector público como en el privado. <br /><br />En el sector público con experiencia en el trámite de contratación y fiscalización de la autoridad minera delegada, Secretaría de Minas, así como el relacionamiento e informes de gestión ante el Ministerio de Minas y Energía.</p>
            </div>
          </div>
        </div>
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-secondary border border-0 shadow`} >
            <i className="bi bi-node-plus-fill card-img-top fs-1 text-dark px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title pb-3"> Experiencia en el Sector Privado</h5>
              <p className="card-text">En el sector privado, con experiencia en las diferentes etapas del ciclo minero y para diferentes minerales. Los últimos 9 años desempeñando cargos directivos en empresa pionera de la exploración minera del País, asumiendo retos técnicos, jurídicos y administrativos que permiten una experiencia integral en el conocimiento del negocio minero desde la etapa pre operativa hasta la consolidación de un proyecto minero y su ejecución.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
