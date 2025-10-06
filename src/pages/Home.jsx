import React from 'react'
import {firstImg} from "../assets/assets";
//import { secondImg } from '../assets/assets';
const home = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <p className='p-4 text-3xl h-20 font-bold'>The Trend Lies Here</p>
      <div className=' bg-blue-100 rounded-b-full w-11/12 rounded-lg h-60'>
        <div className=' bg-amber-300 flex flex-col items-center p-4'>
          <div className='flex flex-row justify-between gap-3'>
            <p>Left content</p>
            <p>Right content</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row rounded-t-full w-11/12 mt-10 bg-blue-100 h-60'>
          <p className='bg-green-100'>Half left block</p>
          <p className='bg-red-100'>Half right block</p>
      </div>
      <br />
      <div>
        <div>
          <img src={firstImg} alt="" />
        </div>
      </div>
    </div>
  )
}
export default home
