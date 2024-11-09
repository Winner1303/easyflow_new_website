import React from 'react'
import NavBar from './NavBar'
import Register from './Register'

const Header = () => {
  return (
    <div className='flex flex-1 text-center justify-around items-center py-4 bg-purple-500 hover:bg hover:text-black h-auto'>

        <div className='text-white'> 
            <a href="./" className="text-black hover:text-white font-medium text-xl" >Ease</a>
        </div>
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