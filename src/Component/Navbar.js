import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <ul className="nav justify-content-center my-2 pl-4">
  <li className="nav-item">
    <Link className="nav-link text-white text-2xl mx-2" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white text-2xl mx-2" to="/About">Services</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white text-2xl mx-2" to="/Services">Shop</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white text-2xl " to='/Cart'>Cart</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white text-2xl " to='/Contact'>Contact</Link>
  </li>
</ul>
    </div>
  )
}
