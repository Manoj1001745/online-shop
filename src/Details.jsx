import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data'

function Details() {
    let {id}=useParams()
    let ss=products.find(a=>a.id==id)
  return (
   <>
   <div className='py-4'>
   <div className="container">
<h2 className='p-2 bg-danger text-center'>Details of producta {id}</h2>
<div className="shadow p-3 mb-5 bg-body rounded justify-content-center align-items-center d-flex flex-column">
<h3 className='bg-primary border rounded p-2'>{ss.title}</h3>
<img className='w-50 py-4' src={ss.image} alt="" />
<p className='fw-bold'>{ss.description}</p>

<button className='btn btn-danger'>ADD TO CART</button>
</div>

   </div>
   </div>

   </>
  )
}

export default Details