import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css'

const HeaderNav = () => {
  return (
    <div className='container--header'>
        <h1><Link to='/'>Factura</Link></h1>
        <nav>
            <ul className='container--header--list'>
                <li><Link to='/products'>Productos</Link></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>

    </div>
  )
}

export default HeaderNav;