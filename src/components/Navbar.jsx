import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { SlSocialVkontakte } from 'react-icons/sl'

export const Navbar = () => {
    return (
        <div className='bg-[#313131] justify-around flex items-center gap-4 px-2 py-2'>
            <div>
                <img className=' h-[62px]' src="logo.png" alt="logo" />
            </div>
            <ul className='flex gap-10 text-[#E4E4E4] uppercase text-xl'>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    <a href="/#home">Home</a>
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    <a href="/#about-me">About Me</a>
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    <a href="/#portfolio">Portfolio</a>
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    <a href="/#contact">Contacts</a>
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                <a href="https://www.instagram.com" >
                    <BsInstagram className='text-white text-2xl hover:text-fuchsia-400 cursor-pointer' />
                </a>
                <a href="https://www.vk.com">
                    <SlSocialVkontakte className='text-white text-3xl cursor-pointer hover:text-blue-300' />
                </a>
            </div>
        </div>
    )
}
