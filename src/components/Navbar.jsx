import React from 'react'
import {AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import { navLinks } from '../constants';
import { useState } from 'react'
import { Toggle } from '../components'
import { styles } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(true)

  const toggleNav = () => {
    setToggle(!toggle)
  }

  return (
    <nav id='home' className='flex flex-row items-center sm:p-4 h-20 mx-auto'>
      <div className=" text-white w-full">
        <h1 className='dark:bg-white dark:text-gray-900 bg-gray-900  sm:px-4 px-4 py-1 sm:py-2 rounded-lg sm:text-2xl text-2xl font-semibold w-[210px] duration-300'>
          <a href='/'>lorenz
            <span className='text-primary'>naegele</span>
          </a>
        </h1>
      </div> 
      <ul className="hidden lg:flex ">
        {navLinks.map((nav) =>(
          <li key={nav.id} className='cursor-pointer px-6 text-xl'>
            <a href={`#${nav.id}`} className={`${styles.hoverAnimation}`}>
                {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex-1 lg:pl-7 px-3'>
        <Toggle />
      </div>
      <div className='block lg:hidden z-[1000]' onClick={toggleNav}>
        {!toggle ? <AiOutlineClose size={24} className="ease-in-out duration-700 cursor-pointer"/> : <AiOutlineMenu size={24} className="ease-in-out duration-700 cursor-pointer dark:text-white"/>}
      </div>
      <div className={!toggle ? "fixed right-0 top-0 w-[60%] h-full dark:bg-gray-900 bg-white ease-in-out duration-700 border-l border-gray-200 z-[999]" : "fixed right-[-100%] top-0 w-[60%] h-full dark:bg-gray-900 bg-white border-l border-gray-200 ease-in-out duration-700 z-[999]"}>
        <ul className="pt-20"> 
          {navLinks.map((nav) =>(
            <li key={nav.id} className='cursor-pointer p-4 text-lg'>
              <a href={`#${nav.id}`} onClick={toggleNav} className={`${styles.hoverAnimation} dark:before:hidden`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar