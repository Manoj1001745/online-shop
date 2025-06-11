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
  <h3>
<marquee direction="right" className='bg-primary border rounded p-2'>{ss.title}</marquee></h3>
<img className='w-50 py-4' src={ss.image} alt="" />
<p className='fw-bold'>{ss.description}</p>


<div className='text-center py-3 d-flex justify-content-between align-items-center w-100'>

<p className='fw-bold bg-danger p-2 border rounded-3 text-white'>Rating: {ss.rating.rate}</p>
<p className='fw-bold bg-info p-2 border rounded-3 text-black'>Price: {ss.price}</p>
<p className='fw-bold bg-danger p-2 border rounded-3 text-white'>Count: {ss.rating.count}</p>
</div>


<div className='py-2'>
<button className='btn btn-danger'>ADD TO CART</button>
</div>


</div>

   </div>
   </div>

   </>
  )
}

export default Details