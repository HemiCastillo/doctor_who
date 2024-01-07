
import React from 'react';
import Image from 'next/image'; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>
      <div className="nav-links">
        <a href="#conoce a">Conoce a</a>
        <a href="#doctores">Doctores</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div className="social-icons">
        <Image src="/facebook-icon.png" alt="Facebook" width={30} height={30} />
        <Image src="/twitter-icon.png" alt="Twitter" width={30} height={30} />
        <Image src="/instagram-icon.png" alt="Instagram" width={30} height={30} />
        <Image src="/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
      </div>
    </nav>
  );
}

export default Navbar;
