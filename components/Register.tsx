import React from 'react'
import { Button } from './ui/button'
import { MdArrowOutward } from "react-icons/md";

const Register = () => {
  return (
    <Button className='text-white bg-transparent hover:bg-blue-500 hover:text-white border-2 hover:border-blue-500'>Register <MdArrowOutward className='ml-2' size={20} /></Button>
  )
}

export default Register