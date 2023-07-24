import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare,FaInstagram,FaGithubSquare,FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-orange-300'>YumEats</h1>
            <p>
                Lorem, ipsum dolor eit amet consectetur adipisicing elit. Id odit ullam iste repellat
                consequatur libro reiciedis, blanditiis accusantium.
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>   
        <div className='ld:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>India</li>
                    <li className='py-2 text-sm'>Canada</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
