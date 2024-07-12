import React from 'react'
import { Button } from './ui/button'
import { MdArrowOutward } from "react-icons/md";

const Register = () => {
  return (
    <Button className='text-white bg-transparent hover:bg-purple-500 hover:text-white border-2 hover:border-purple-500'>Register <MdArrowOutward className='ml-2' size={20} /></Button>
  )
}

export default Register