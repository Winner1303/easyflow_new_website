import React from 'react'

const NavBar = () => {
  return (
   <div className='flex flex-1 text-center space-x-10 hover opacity-90'>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'><a href='/features'>Features</a></div>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'><a href='/pricing'>Pricing</a></div>
    <div className='hover:text-blue-500 hover:cursor-pointer text-white'><a href='/contact'>Contact</a></div>
   </div>
  )
}

export default NavBar