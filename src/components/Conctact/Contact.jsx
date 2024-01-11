import React from 'react'
import imagen from '../../Media/contacto.jpg';
import { Form } from './Form'
import { InformacionContacto } from './InformacionContacto';

export const Contact = () => {
  return (
    <div className='bg-dark w-100 h-100'>

      <div className='w-100 overflow-hidden' style={{height:'400px'}} >
        <img  src={imagen} alt="" className='w-100 h-100 object-fit-cover' style={{objectPosition:'button'}} />
      </div>

      <div className="row m-auto " style={{width:'80%'}}>
        <InformacionContacto/>
        <div className='col-12 col-md-10 col-lg-6 m-auto  border border-0'>
          <Form/>
        </div>
      </div>

    </div>
  )
}
