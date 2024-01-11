import React from 'react';
import ingeniero from '../../media/ingeniero1.png'
// import { Link } from 'react-router-dom';

export const WelcomTo = () => {
  return (
    <div className="row container m-auto" >
      {/* columna izquierda */}
      <div className=" col-12 col-lg-7 h-100 border border-0 p-2">
        {/* componente titel */}
        <div className="col pe-5"> 
          <div className="container card  rounded-0  border border-0 pt-1" >
            <div className="row g-0 ">
              <div className="col-md-12">
                <div className="card-body">
                  <h5 className="card-title fs-2 text-seuccess ">Bienvenidos a  <a className="text-primary text-decoration-none fw-bold" href="">CV Estratégico</a> </h5>
                  <p className="card-text text-success" style={{fontSize:'14px'}}>Nos destacamos como consultores expertos con 15 años de experiencia en el sector minero. Nuestra principal prioridad es usted, y por esta razón, nos comprometemos a brindar un respaldo integral en la ejecución de actividades de consultoría y asesoría. Estamos aquí para ser su aliado estratégico y asegurar que cada fase de su proyecto se lleve a cabo con la máxima eficiencia y éxito. Su logro es nuestro compromiso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* componente x 4 */}
        <div className="col pe-5">
          <div className="container row row-cols-1 row-cols-lg-2 g-1 pb-5">
            <div className="col p-1 p-md-3 p-lg-0">
              <div className="card h-100 rounded-0 border border-0 ">
                <i className="bi bi-joystick card-img-top fs-2 text-primary px-4 pt-4  d-flex justify-content-center"></i>
                <div className="card-body text-black px-4  ">
                  <h5 className="card-title d-flex justify-content-center text-center fw-bold text-success" style={{fontSize:'15px'}}>Gestión de Servicio en Campo</h5>
                  <p className="card-text text-center" style={{fontSize:'12px'}}>Ya sea en el terreno o en la gestión, estamos listos para brindarle apoyo integral, asegurando que nuestros recursos estén a su disposición en cualquier lugar que los necesite.</p>
                </div>
              </div>
            </div>
            <div className="col p-1 p-md-3 p-lg-0">
              <div className="card h-100 rounded-0 border border-0 ">
                <i className="bi bi-arrows-fullscreen card-img-top fs-2 text-primary px-4 pt-4  d-flex justify-content-center"></i>
                <div className="card-body text-black px-4  ">
                  <h5 className="card-title d-flex justify-content-center text-center fw-bold" style={{fontSize:'15px'}}>Experiencia en el Sector Minero</h5>
                  <p className="card-text text-center" style={{fontSize:'12px'}}>Amplia experiencia en el sector público y privado, colaborando con empresas pioneras y de renombre. Garantizamos soluciones adaptadas a diversas dinámicas empresariales.</p>
                </div>
              </div>
            </div>
            <div className="col p-1 p-md-3 p-lg-0">
              <div className="card h-100 rounded-0 border border-0 ">
                <i className="bi bi-award card-img-top fs-2 text-primary px-4 pt-4  d-flex justify-content-center"></i>
                <div className="card-body text-black px-4  ">
                  <h5 className="card-title d-flex justify-content-center text-center fw-bold" style={{fontSize:'15px'}}>Excelencia en Nuestros Servicios </h5>
                  <p className="card-text text-center" style={{fontSize:'12px'}}>En nuestra búsqueda constante de brindar calidad en todo lo que hacemos, nos comprometemos a superar sus expectativas.</p>
                </div>
              </div>
            </div>
            <div className="col p-1 p-md-3 p-lg-0">
              <div className="card h-100 rounded-0 border border-0 ">
                <i className="bi bi-bounding-box card-img-top fs-2 text-primary px-4 pt-4  d-flex justify-content-center"></i>
                <div className="card-body text-black px-4  ">
                  <h5 className="card-title d-flex justify-content-center text-center fw-bold" style={{fontSize:'15px'}}>Consolidación y Ejecución</h5>
                  <p className="card-text text-center" style={{fontSize:'12px'}}>Tomamos responsabilidades técnicas, directivas y administrativas con el compromiso de asegurar la consolidación y ejecución exitosa de su proyecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* columna izquierda */}
      <div className="d-none d-lg-block col-5  h-100 border border-0 p-5" >
        <div className="card border border-0">
          <div className="card-img">
            <img src={ingeniero} alt="" className='img-fluid'/>
          </div>
        </div>
      </div>
    </div>
  )
}
