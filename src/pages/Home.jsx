import React from 'react'
const home = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <p className='p-4 text-3xl h-20 font-bold'>The Trend Lies Here</p>
      <div className=' bg-blue-100 w-11/12 rounded-lg h-60'>
        <div className=' bg-amber-300 flex flex-col items-center p-4'>
          <div className='flex flex-row justify-between gap-3'>
            <p>Left content</p>
            <p>Right content</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-1/2 items-center mt-10 bg-blue-100 h-60'>
        <div className='bg-green-200'>
          <p>Half left block</p>
        </div>
        <div className='bg-red-200'>
          <p>Half right block</p>
        </div>
      </div>
    </div>
  )
}
export default home
