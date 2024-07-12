import React from 'react'
import { AiOutlineCompass } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-white py-12">
          <div className="max-w-7xl mx-auto flex justify-between items-start px-6">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start space-x-2 mb-4">
                <div className="bg-purple-500 p-2 rounded-full m-2 ">
                    <AiOutlineCompass className='text-white' size={24}/>
                </div>
                <span className="text-gray-700 text-lg font-medium">Significantly enhance your <br/>screening and recruitment<br/> procedures.</span>
              </div>
            </div>
            <div className="flex space-x-24">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-blue-900 hover:text-blue-500 text-lg font-bold">Product</a>
                <a href="#" className="text-blue-900 hover:text-blue-500 text-lg font-bold">Features</a>
                <a href="#" className="text-blue-900 hover:text-blue-500 text-lg font-bold">Pricing</a>
                <a href="#" className="text-blue-900 hover:text-blue-500 text-lg font-bold">Use case</a>
                <a href="#" className="text-blue-900 hover:text-blue-500 text-lg font-bold">Community</a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-blue-900 hover:text-blue-500 text-lg font-bold">Resources</h3>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Blog</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Apps</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Learn</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Integrations</a>
                <a href="#"  className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Careers</a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-blue-900 hover:text-blue-500 text-lg font-bold">Company</h3>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Our Story</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Our Team</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Press</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 font-medium text-sm" >Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer