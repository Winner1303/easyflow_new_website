import React from 'react'
import { Dialog } from './ui/dialog'

const NavBar = () => {
  return (
   <div className='flex flex-1 text-center space-x-10 hover'>
    <div className='hover:text-blue-500 hover:opacity-100 text-white'>Features</div>
    <div className='hover:text-blue-500 hover:opacity-100 text-white'>Pricing</div>
    <div className='hover:text-blue-500 hover:opacity-100 text-white'>Contact</div>
   </div>
  )
}

export default NavBar