import React from 'react'
import { ImgPortadaServices } from './imgPortada'
import { Products } from './products'
import { CardResumen } from './CardResumen'

export const Services = () => {
  return (
    <div>
        <div className="pb-5">
            <ImgPortadaServices/>
        </div>
        <div className="container pt-5">
            <Products/>
        </div>
        <div className="container pt-5">
            <CardResumen/>
        </div>

    </div>
  )
}

        // <div className='container'>
        //     <div className="row row-cols-1 row-cols-md-3 g-4 ">
        //         <div className={`col ${styles.imgCard}`} >
        //             <div className={`card rounded-0 border border-0 bg-transparent  ${styles.excluido} `} >
        //                 <i className={`bi bi-person-circle card-img-top fs-1 text-dark text-center align-items-center `}></i>
        //                 <div className={`card-body text-dark`}>
        //                     <h5 className={`card-title d-flex justify-content-center text-center fw-bold text-dark  `} style={{fontSize:'35px'}}>Gestión de Servicio en Campo</h5>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={`col ${styles.imgCard}`} >
        //             <div className={`card rounded-0 border border-0 bg-transparent  ${styles.excluido} `} >
        //                 <i className={`bi bi-person-circle card-img-top fs-1 text-dark text-center align-items-center `}></i>
        //                 <div className={`card-body text-dark`}>
        //                     <h5 className={`card-title d-flex justify-content-center text-center fw-bold text-dark  `} style={{fontSize:'35px'}}>Gestión de Servicio en Campo</h5>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={`col ${styles.imgCard}`} >
        //             <div className={`card rounded-0 border border-0 bg-transparent  ${styles.excluido} `} >
        //                 <i className={`bi bi-person-circle card-img-top fs-1 text-dark text-center align-items-center `}></i>
        //                 <div className={`card-body text-dark`}>
        //                     <h5 className={`card-title d-flex justify-content-center text-center fw-bold text-dark  `} style={{fontSize:'35px'}}>Gestión de Servicio en Campo</h5>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>