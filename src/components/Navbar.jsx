import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between sm:justify-around bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='hover:text-xl font-bold cursor-pointer sm:text-lg mx-8'>iTask</span>
        </div>
      <ul className="flex md:gap-8 gap-x-7">
       <a href=""><li className='font-md sm:font-normal cursor-pointer hover:underline transition-all'>Home</li></a> 
       <a href=""><li className='font-md sm:font-normal cursor-pointer hover:underline transition-all pr-2'>Your Tasks</li></a> 
      </ul>
    </nav>
  )
}

export default Navbar