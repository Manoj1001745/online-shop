import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from './Data'

function Category() {
    let{cid}=useParams()
    let catData=products.filter(a=>a.category==cid)
  return (
    <>
    <div className="container py-4">
        <h2 className='bg-primary text-center p-2 rounded fw-bold'>{cid}Product category list</h2>
        <div className="row">
             <div className="row py-4">
                            {catData.map(a=>(<div className="col-lg-3 " key={a.id}>
                                <div className="shadow p-2 border n rounded text-center">
                                    <Link to={`/details/${a.id}`} className='text-decoration-none text-dark' >
                                <img className='w-100 mm' src={a.image} alt="" />
                                <p className='fw-bold'>{a.title}</p>
                                <p className='fw-bold'>{a.price}</p>
                                <p className=''>{a.category}</p>
                                <p className='fw-bold'>{a.count}</p>
                                </Link>
                                <button className='btn btn-danger'>ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                            
                        </div>
        </div>
    </div>
    </>
  )
}

export default Category