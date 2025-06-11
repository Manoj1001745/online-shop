import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'
import { FaCalendarAlt } from "react-icons/fa";
import Contactus from './Contactus'
import About from './About'


function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
  <div className="container gap-4">
    <h1 className='text-white fw-bold gap-4'> 
    <Link className="nav-link active" aria-current="page" to="/"><FaCalendarAlt />Online Shop</Link>
    </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0">
        <li className="nav-item fw-bold">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item fw-bold">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        
        <li className="nav-item   fw-bold">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
        </li>

        <li className="nav-item fw-bold">
          <Link className="nav-link active" aria-current="page" to="/">Project</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Price</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contactus/>}/>
  <Route path='/category/:cid' element={<Category/>}/>
 <Route path='/details/:id' element={<Details/>}/>
  
</Routes>


    </>
  )
}

export default Header