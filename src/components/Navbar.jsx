import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setactive] = useState('')
  return (
    <nav
    className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >

      <div className="w-full flex flex justify-between items-center max-w-7xl mx-auto">
        <link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
        </link>
      </div>

    </nav>
  )
}

export default Navbar