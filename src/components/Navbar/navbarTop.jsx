import React from 'react';
import styles from './navbarCss.module.css'
import logo from '../../media/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export const NavbarTop = () => {
  return (
    <div className='w-100 bg-success'>

      <div className='container px-4 border border-0'>

        <div className="row justify-content-center align-items-center">

          <div className="col-3 d-none d-lg-block">
            <Link to={'/'} className={`card-img border border-0 overflow-hidden ${styles.logoScale}`}>
              <img src={logo} alt="" style={{width:'50%', objectFit:'cover', objectPosition:'center', filter:'brightness(0) invert(1)'}} />
            </Link>
          </div>

          <div className="col-9 d-none d-md-block">
            <div className="row border border-0 ">
              <div className="col-4 border border-0">
                <div className="row justify-content-center align-items-center">
                  <div className="col-1 text-dark text-end border border-0"><i className="bi bi-geo-alt-fill"></i></div>
                  <div className="col-10 text-dark border border-0 pt-2">
                    <h6 style={{fontSize:'13px', lineHeight:'10px', fontWeight:'normal'}}>Cra. 65 #8B-91</h6> 
                    <h6 style={{fontSize:'9px', lineHeight:'10px', fontWeight:'normal', opacity:'60%'}}>Medellín-Colombia</h6> 
                  </div>
                </div>
              </div>
              <div className="col-4 border border-0">
                <div className="row justify-content-center align-items-center">
                  <div className="col-1 text-dark text-end border border-0"><i className="bi bi-telephone-fill"></i></div>
                  <div className="col-10 text-dark border border-0 pt-2">
                    <h6 style={{fontSize:'13px', lineHeight:'10px', fontWeight:'normal'}}>+57 (300) 325-0906</h6> 
                    <h6 style={{fontSize:'9px', lineHeight:'10px', fontWeight:'normal', opacity:'60%'}}>Tel. - Whatsapp</h6> 
                  </div>
                </div>
              </div>
              <div className="col-4 border border-0">
                <div className="row justify-content-center align-items-center">
                  <div className="col-1 text-dark text-end border border-0"><i className="bi bi-clock-fill"></i></div>
                  <div className="col-10 text-dark border border-0 pt-2">
                    <h6 style={{fontSize:'13px', lineHeight:'10px', fontWeight:'normal'}}>Lunes a Viernes</h6> 
                    <h6 style={{fontSize:'9px', lineHeight:'10px', fontWeight:'normal', opacity:'60%'}}>8:00 a 18:00 (sabado 10:00 a 16:00)</h6> 
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
