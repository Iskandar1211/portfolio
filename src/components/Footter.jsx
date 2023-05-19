import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export const Footter = () => {
    return (
        <div id='contact' className='bg-[#333333] flex text-[#8E8E8E] px-[100px] justify-center gap-[80px] py-5'>
            <div>
                <ul className='flex flex-col gap-2'>
                    <li><a className='hover:text-white' href="/#home">Home</a></li>
                    <li><a className='hover:text-white' href="/#about-me">About Me</a></li>
                    <li><a className='hover:text-white' href="/#portfolio">Portfolio</a></li>
                    <li><a className='hover:text-white' href="/">Contact</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-white'>Contact:</p>
                <p><span className='text-white'>Email:</span> zed1211@mail.ru</p>
                <p><span className='text-white'>Instagram:</span> @iskandargadoiboev</p>
                <p><span className='text-white'>Tel:</span> +992929445515</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-10'>
                    <img className='w-[100px]' src="logo.png" alt="logo" />
                    <a href="/#home">
                    <BsFillArrowUpCircleFill className='text-[#E2A000] text-4xl hover:text-[#E24A05] cursor-pointer' />
                    </a>
                </div>
                <p> &#169; Iskandar Gadoyboev</p>
            </div>
        </div>
    )
}
