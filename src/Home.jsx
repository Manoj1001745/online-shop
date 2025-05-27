import React from 'react'
import { category, products } from './Data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
   
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 py-2">
      <ul className="list-group">
        {category.map(a=>(
 <li className="list-group-item" key={a}>
    <Link to={`/category/${a}`} className='text-decoration-none text-dark fw-bold'>{a}</Link>
 </li>
        ))}
 
 
 
</ul>


                </div>
                <div className="col-lg-9 py-2 rounded-3">
                    <img className='w-100' src="https://img.lazcdn.com/us/domino/74080927-9518-4543-9090-62ab1fbe3700_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" />
                </div>
            </div>
        </div>
    </section>

    <section className='py-4'>
        <div className="container">
            <h2 className='fw-bold bg-danger text-center p-2 rounded'> All products</h2>
            <div className="row">
                {products.map(a=>(<div className="col-lg-3 g-3 " key={a.id}>
                    <div className="shadow p-2 border n box rounded text-center">
                        <Link to={`/details/${a.id}`} className='text-decoration-none text-dark' >
                    <img className='w-100 mm' src={a.image} alt="" />
                    <p className='fw-bold'>{a.title}</p>
                    <p className='fw-bold'>{a.price}</p>
                    </Link>
                    <p className=''>{a.category}</p>
                    <p className='fw-bold'>{a.count}</p>
                    <button className='btn btn-danger'>ADD TO CART</button>
                    </div>
                </div>
            ))}
                
            </div>
        </div>
    </section>
        </>
  )
}

export default Home