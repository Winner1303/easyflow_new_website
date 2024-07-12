import React from 'react'

const NavBar = () => {
  return (
   <div className='flex flex-1 text-center space-x-10 hover opacity-90'>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'>Features</div>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'>Pricing</div>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'>Contact</div>
   </div>
  )
}

export default NavBar