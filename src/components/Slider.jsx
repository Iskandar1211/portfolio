import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { TiHtml5 } from 'react-icons/ti'
import { SiTailwindcss } from 'react-icons/si'
import { MdOutlineCss } from 'react-icons/md'
import { TbBrandJavascript } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'

export const Slider = () => {

    return (
        <div id='home' className='flex px-4 py-10 bg-[#313131]' >
            <div className='w-[50%] flex rounded-xl justify-center px-6 items-center flex-col gap-5 text-[#E4E4E4] py-3'>
                <h1 className='text-4xl'>Привет </h1>
                <p className='text-6xl'>я Гадойбоев <br />Искандар</p>
                <p className='text-3xl text-justify px-8 mt-10 mb-10'>Разработка и создание пользовательских интерфейсов с использованием современных фреймворков и технологий.
                    Разработка и интеграция серверной логики, обеспечение оптимальной производительности</p>
                <button className='border-2 hover:scale-[1.02] border-gray-400  px-4 py-2 rounded-md text-xl '>Скачать CV</button>
            </div>
            <div className=' h-[100%] flex justify-center items-center rounded-full left-[6%] relative sliderImg' >
                <GrReactjs className='absolute bg-[#383838] text-blue-400 border border-blue-400 flex items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full right-0 top-[-52px]' />
                <TiHtml5 className='absolute flex bg-[#383838] text-[#DD4B25] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#DD4B25] right-[-95px] top-[70px]' />
                <SiTailwindcss className='absolute flex bg-[#383838] text-[#36B7F0] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#36B7F0] right-[-105px] top-[220px]' />
                <MdOutlineCss className='absolute flex text-[#254BDD] bg-[#383838] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#254BDD] right-[-45px] top-[350px]' />
                <TbBrandJavascript className='absolute flex text-[#F7DF1E] bg-[#383838] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#F7DF1E] right-[100px] top-[442px]' />
                <BsGithub className='absolute flex text-[#383838] bg-white items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-white right-[270px] top-[435px]' />
                <FaNodeJs className='absolute flex text-[#689E5B] bg-[#383838] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#689E5B] right-[450px] top-[200px]' />
                <DiPostgresql className='absolute flex text-[#31648C] bg-[#383838] items-center justify-center text-3xl w-[110px] h-[110px] z-10 rounded-full border border-[#31648C] right-[395px] top-[340px]' />
                <img className='w-[450px] h-[450px] rounded-full z-10' src="Iskandar.png" alt="iskandar" />
            </div>
        </div>
    )
}
