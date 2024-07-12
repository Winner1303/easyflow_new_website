import React from 'react'
import NavBar from './NavBar'
import Register from './Register'

const Header = () => {
  return (
    <div className='flex flex-1 text-center justify-around items-center py-4 bg-black'>
        <div className='text-white'> Logo EasyFlow </div>
        <div>
            <NavBar />
        </div>
        <div>
            <Register />
        </div>
    </div>
  )
}

export default Header