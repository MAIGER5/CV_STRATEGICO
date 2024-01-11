import React from 'react';
import styles from './home.module.css'
import img1 from '../../media/uno.jpeg'
import img2 from '../../media/dos.jpg'
import img3 from '../../media/tres.jpg'

export const Card1x3 = () => {


  return (
    <div className="row row-cols-1 row-cols-lg-3 w-75 m-auto g-4 ">
      <div className={`col btn ${styles.cardEfect} `} >
        <div className="card border-dark border-4  rounded-0 bg-light shadows">
          <div className='position-relative h-50' style={{backgroundColor:'#83580b'}}>
            <img src={img1} className='w-100 h-100' style={{objectFit:'cover', objectPosition:'center', zIndex:0, opacity:'25%'}} alt="" />
            <h6 className="card-title text-center text-dark border border-0 w-75" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex:1}}>DIAGNÓSTICO DEL RIESGO</h6>
          </div>
          <div className="card-body " >
            <div className="px-2" style={{display:'flex', justifyContent:'center', alignItems:'start'}}>
              <div className=""><h2 className='fs-3 pe-2'>01.</h2></div>
              <div className="card-text text-start"><p style={{fontSize:'13px'}}>Mediante un análisis detallado del proyecto, impulsamos el desarrollo y ejecución, respaldados por consultoría y asesoría experta para asegurar decisiones fundamentadas y eficaces.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col btn ${styles.cardEfect} `} >
        <div className="card border-dark border-4 rounded-0 bg-light shadows">
          <div className='position-relative h-50' style={{backgroundColor:'#212529'}}>
            <img src={img2} className='w-100 h-100' style={{objectFit:'cover', objectPosition:'center', zIndex:0, opacity:'25%'}} alt="" />
            <h6 className="card-title text-center text-dark border border-0 w-75" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex:1}}>OPTIMIZACIÓN MINERA</h6>
          </div>
          <div className="card-body" >
          <div className="px-2" style={{display:'flex', justifyContent:'center', alignItems:'start'}}>
              <div className=""><h2 className='fs-3 pe-2'>02.</h2></div>
              <div className="col-9 card-text text-start"><p style={{fontSize:'13px'}}>Con una ejecución precisa y una sólida arquitectura, potenciamos estrategias para optimizar el proyecto minero, asegurando un desarrollo eficiente y alineado con metas claves.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col btn ${styles.cardEfect} `} >
        <div className="card border-dark border-4 rounded-0 bg-light shadows">
          <div className='position-relative h-50' style={{backgroundColor:'#55A630'}}>
            <img src={img3} className='w-100 h-100' style={{objectFit:'cover', objectPosition:'center', zIndex:0, opacity:'25%'}} alt="" />
            <h6 className="card-title text-center text-dark border border-0 w-75" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex:1}}>ALIANZAS ESTRATÉGICAS</h6>
          </div>
          <div className="card-body" >
          <div className="px-2" style={{display:'flex', justifyContent:'center', alignItems:'start'}}>
              <div className=""><h2 className='fs-3 pe-2'>03.</h2></div>
              <div className="col-9 card-text text-start"><p style={{fontSize:'13px'}}>Mediante alianzas estratégicas, la consultoría se convierte en uno de los pilares fundamentales para la elaboración de estudios técnicos, jurídicos, sociales y ambientales</p></div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
