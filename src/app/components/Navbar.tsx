'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className='relative'>
      <ul className='flex justify-between p-8 text-xl bg-black w-screen text-white '>
        {/* Original Logo - Hidden when menu is open */}
        <Link href='/'>
          <div className={`${isOpen ? 'hidden' : 'block'}`}>
            <Image className="" src="/logo.png" width={150} height={50} alt='some logo'/>
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-xl focus:outline-none'>
            &#9776;
          </button>
        </div>

        {/* Menu Links */}
        <div className={`flex-col md:flex-row md:flex w-full md:w-1/2 items-center text-lg justify-around absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent z-50 transition-transform md:transform-none ${isOpen ? 'flex' : 'hidden'}`}>
          {/* Logo inside the mobile menu */}
          <div className='block md:hidden p-4'>
            <Link href='/'>
              <Image src="/logo.png" width={40} height={20} alt="" />
            </Link>
          </div>

         

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex font-bold items-center border-black border-2 duration-500 hover:border-b-main'>
              About
            </div>
           
          </div>

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex font-bold text-bold items-center'>
              Practice 
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-main text-black text-base rounded-box z-[1] w-52 p-2 shadow">
              <Link href='/fall'><li className='m-0 p-4 hover:bg-black hover:text-white rounded-box'>Leer</li></Link>
              <Link href='/spring'><li className='m-0 p-4 hover:bg-black hover:text-white rounded-box'>Escribir</li></Link>
              <Link href='/fall'><li className='m-0 p-4 hover:bg-black hover:text-white rounded-box'>Escuchar</li></Link>
              <Link href='/spring'><li className='m-0 p-4 hover:bg-black hover:text-white rounded-box'>Hablar</li></Link>
            </ul>
          </div>

          
          
        </div>
        
      </ul>
      
    </nav>
  );
};

export default Navbar;