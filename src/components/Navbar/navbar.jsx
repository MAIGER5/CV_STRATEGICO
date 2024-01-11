import React, { useState } from 'react';
import styles from './navbarCss.module.css'
import logo from '../../media/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [ open, setOpen ] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  

  return (
    <nav className="container navbar navbar-expand-lg bg-transparent p-0">
      <div className="container-fluid" >
        <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="custom-icon"> { open? "X": "☰" } </span>
        </button>
        <Link to={'/'} className='navbar-toggler border border-0' style={{width:'150px', height:'100%', overflow:'hidden'}}>
           <img className='' src={logo} alt="" style={{width:'90%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'brightness(0) invert(1)'}}/>
        </Link>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <Link to={'/'} id={styles.menuInicio} className={`nav-item  `}>
              <a className={`nav-link active border border-0 fw-medium ${styles.inicio}`} aria-current="page" href="#">Inicio</a>
            </Link>
            <Link to={'/About'} className={`nav-item px-lg-2 ${styles.menuOtros}`}>
              <a className={`nav-link ${styles.menuColor}`} href="#">Nosotros</a>
            </Link>
            <Link to={'/Services'} className={`nav-item ${styles.menuOtros}`}>
              <a className={`nav-link abled ${styles.menuColor}`} aria-disabled="true">Servicios</a>
            </Link>
            <Link to={'/Contact'} className={`nav-item d-block d-lg-none ${styles.menuOtros}`}>
              <a className={`nav-link abled ${styles.menuColor}`} aria-disabled="true">Contacto</a>
            </Link>
          </ul>
          <div className="d-none d-lg-flex" >
            <div className="row g-5">
              <i className={`bi bi-facebook col-2   ${styles.iconRedSocial}`}></i>
              <i className={`bi bi-instagram col-2  ${styles.iconRedSocial}`}></i>
              <i className={`bi bi-linkedin col-2  ${styles.iconRedSocial}`}></i>
              <i className={`bi bi-youtube col-2  ${styles.iconRedSocial}`}></i>
            </div>
            <Link to={'/Contact'} className={`btn-outline-warning text-center rounded-5 fw-bold border border-2 py-1 h-100   fs-6 ${styles.contact}`} style={{width:'190px'}} >CONTACTO</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

    {/*  <nav className={`navbar navbar-expand-lg bg-primary border border-0 w-100 ${styles.contenedor}`} >
       <div className="container px-4 border border-0  " style={{height:'55px'}}>
         <div className='navbar-toggler border border-0' style={{width:'150px', height:'100%', overflow:'hidden'}}>
           <img className='' src={logo} alt="" style={{width:'90%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'brightness(0) invert(1)'}}/>
         </div>
         <button className="navbar-toggler border border-3 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon fs-5 "></span>
          
         </button>

         <div className="collapse navbar-collapse bg-success bg-md-transparent"   id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 d-flex align-items-center " >
             <li id={styles.menuInicio} className={`nav-item h-100`} >
               <Link to={'/'} className={`nav-link  fw-semibold px-3 py-3 ${styles.inicio} `}  aria-current="page" href="#">Inicio</Link>
             </li>
             <li className={`nav-item ps-3 h-100 ${styles.menuOtros}`}>
               <Link to={'/About'} className="nav-link  fw-medium text-warning py-3" aria-current="page" href="#">Nosotros</Link>
             </li>
             <li className={`nav-item ps-3 h-100 ${styles.menuOtros}`}>
               <Link to={'/Services'} className="nav-link  fw-medium text-warning py-3" aria-current="page" href="#">Servicios</Link>
             </li>

           </ul>
           <div className="d-none d-lg-flex" >
             <div className="row g-5 py-2">
               <i className={`bi bi-facebook col-2   ${styles.iconRedSocial}`}></i>
               <i className={`bi bi-instagram col-2  ${styles.iconRedSocial}`}></i>
               <i className={`bi bi-linkedin col-2  ${styles.iconRedSocial}`}></i>
               <i className={`bi bi-youtube col-2  ${styles.iconRedSocial}`}></i>
             </div>
             <Link to={'/Contact'} className={`btn-outline-warning text-center rounded-5 fw-bold border border-3 h-100 py-1 mt-1 fs-6 ${styles.contact}`} style={{width:'190px'}} >CONTACTO</Link>
           </div>
         </div>
       </div>
     </nav>   */}