"use client"

import { category, products } from './Data'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Home() {
  return (
    <>
   
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 py-2">
      <ul className="list-group ">
        {category.map(a=>(
 <li className="list-group-item bg-info fw-bold" key={a}>
    <Link to={`/category/${a}`} className='text-decoration-none text-dark fw-bold'>{a}</Link>
 </li>
        ))}
 
 
 
</ul>


                </div>
                <div className="col-lg-9 py-2 rounded-3">
                    
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-3">
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/9ff52f9b574ef5f34975e231516f3cbe.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/955c3d99-26b7-416f-bc2a-ab3ec21b93b8_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/0e5bbbe5-d2a0-4873-8733-6cf643c579e7_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/d5bca32c-70ca-4dbd-a8d4-84109f2c70c8_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/fb22e4c3-c283-4dc3-90b6-25cc2137ead8_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-100' src="https://img.lazcdn.com/us/domino/41be3722-8687-4aa8-a5a9-2a4479cfb651_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
        
      </Swiper>
                 
                </div>
            </div>
        </div>
    </section>
    <section className='py-5'>
  <div className="container border rounded-3">
    <div className="row">
        <div className="col-lg-9">
            <div>
            <img className='w-100' src="https://chakrapath.com/wp-content/uploads/2024/12/1000-x-100-1-768x77.gif" alt="" />
</div>
<div className='py-3'>
    <img className='w-100 ' src="https://chakrapath.com/wp-content/uploads/2024/12/610-4-1-GIF-Laxmi-sunrise-TVc_-720x80px.gif" alt="" />
</div>


        </div>
        <div className="col-lg-3 border-start gap-3">
            <img className='w-100' src="https://img.drz.lazcdn.com/static/np/p/a21afe0eb492e4ccc28add78fcc3f4ab.jpg_400x400q80.jpg_.webp" alt="" />
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