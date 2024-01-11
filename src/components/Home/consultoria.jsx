import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import styles from './home.module.css'


export const Consultoria = () => {

  const signo = ">"

  return (
    <div className="row py-3 px-4">
      <div className="col-12 col-md-6 pe-md-5 d-flex pb-sm-5 pb-md-0" style={{alignItems:'center'}}>
        <div className="card-body">
          <h1 className="card title text-primary fw-bold m-0 border border-0 fs-2">Consultoría & Asesoría</h1>
          <h1 className="card title fs-4 fw-semibold border border-0  text-secondary" style={{textWrap:'balance'}}>Soluciones Innovadoras y Expertise Técnica</h1>
          <div className="card-text py-2">Fomentamos el éxito en el sector minero a través de servicios especializados que incluyen.
          </div>
          <Link to={'/Contact'} className='text-decoration-none'>
            <a href="#" className={`btn btn-success mt-2 fw-semibold border border-0 ${styles.contactBoton}`} >Más Servicios {signo} </a>
          </Link>
        </div>
      </div>

{/* /*********ESTA ES LA OTRA COLUMNA *** */ }
      <div className="col-12 col-md-6 ps-md-5 mt-5 mt-md-0 py-4 py-md-0 position-relative border border-0 rounded-3" style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
     
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 d-flex justify-content-center d-flex align-items-center">
              <div className='bg-secondary rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'40px', height:'40px'}}>
                <a className='text-center align-middle text-dark fs-6 fw-bold text-decoration-none'>1</a>
              </div>
            </div>
            <div className="col-md-10 px-3 ">
              <div className="card w-100 border border-0">
                {/* <img src={moto} alt="" className='card-img w-75 m-auto' /> */}
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center fs-5">Análisis</h5>
                <p className="card-text text-center" style={{fontSize:'14px'}}>Diagnóstico de la situación actual y riesgos del negocio.</p>
              </div>
            </div>
          </div>
        </div>      
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 d-flex justify-content-center d-flex align-items-center">
              <div className='bg-secondary rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'40px', height:'40px'}}>
              <a className='text-center align-middle text-dark fs-6 fw-bold text-decoration-none'>2</a>
              </div>
            </div>
            <div className="col-md-10 px-3 ">
              <div className="card w-100 border border-0">
                {/* <img src={auto} alt="" className='card-img w-75 m-auto' /> */}
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center fs-5">Arquitectura</h5>
                <p className="card-text text-center" style={{fontSize:'14px'}}>Estrategias para potencializar el proyecto minero.</p>
              </div>
            </div>
          </div>
        </div>      
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 d-flex justify-content-center d-flex align-items-center">
              <div className='bg-secondary rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'40px', height:'40px'}}>
              <a className='text-center align-middle text-dark fs-6 fw-bold text-decoration-none'>3</a>
              </div>
            </div>
            <div className="col-md-10 px-3 ">
              <div className="card w-100 border border-0">
                {/* <img src={auto} alt="" className='card-img w-75 m-auto' /> */}
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center fs-5">Alianzas</h5>
                <p className="card-text text-center" style={{fontSize:'14px'}}>Alianzas Estratégicas para elaboración de estudios técnicos, jurídicos, sociales y ambientales.</p>
              </div>
            </div>
          </div>
        </div>      
      </div>
      
    </div>
  )
}


{/* <div className="col-12 col-md-6 ps-5">
<div className="mb-3 border border-0" >
  <div className="row g-0 ">
    <div className="col-md-2 border border-3 d-flex justify-content-center d-flex align-items-center border   border-0 ">
      <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'70px', height:'70px'}}>
        <i className=" col-2 bi bi-truck text-dark fs-2 border border-0 d-flex justify-content-center" ></i>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Coste Cero</h5>
        <p className="card-text" style={{fontSize:'14px'}}>Nuestra gestión de intermediación  NO GENERA ningún  costo para nuestros clientes.</p>
      </div>
    </div>
  </div>
</div>      
</div> */}