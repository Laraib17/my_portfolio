import React from 'react'
import {assets} from '../assets/assets.js'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='h-10 w-36' alt="" />
      <ul>className='hidden sm:flex gap-8 text-lg'
        <Navlink className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-None h-0.5 bg-black' />
        </Navlink>
        <Navlink className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-None h-0.5 bg-black' />
        </Navlink>
        <Navlink className='flex flex-col items-center gap-1'>
          <p>Services</p>
          <hr className='w-2/4 border-None h-0.5 bg-black' />
        </Navlink>
        <Navlink className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-None h-0.5 bg-black' />
        </Navlink>
      </ul>
    </div>
  )
}

export default Navbar
