import React from 'react'
import Logo from '../img/logo-thuonghieu.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <Link to='/'><img src={Logo} alt="" /></Link>

        <span>© Copyright by D. All rights reserved | Design by DL</span>
    </footer>
  )
}

export default Footer