import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { TiHtml5 } from 'react-icons/ti'
import { SiTailwindcss } from 'react-icons/si'
import { MdOutlineCss } from 'react-icons/md'
import { TbBrandJavascript } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa'

export const AboutMe = () => {
    return (
        <div id='about-me' className='bg-[#363636] px-11 pb-[100px] grid grid-rows-2'>
            <div className='py-[100px] flex flex-wrap gap-10 justify-center'>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <GrReactjs className=' bg-[#383838] text-blue-400 border border-blue-400 flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-blue-400 text-3xl flex justify-around w-[100%]'>React <span className='border rounded-full px-2'>70%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <TiHtml5 className=' bg-[#383838] text-[#DD4B25] border border-[#DD4B25] flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-[#DD4B25] text-3xl flex justify-around w-[100%]'>HTML <span className='border rounded-full px-2'>95%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <SiTailwindcss className=' bg-[#383838] text-[#36B7F0] border border-[#36B7F0] flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-[#36B7F0] text-3xl flex justify-around w-[100%]'>Tailwind <span className='border rounded-full px-2'>80%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <MdOutlineCss className=' bg-[#383838] text-[#254BDD] border border-[#254BDD] flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-[#254BDD] text-3xl flex justify-around w-[100%]'>CSS 3 <span className='border rounded-full px-2'>85%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <TbBrandJavascript className=' bg-[#383838] text-[#F7DF1E] border border-[#F7DF1E] flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-[#F7DF1E] text-3xl flex justify-around w-[100%]'>JavaScript <span className='border rounded-full px-2'>70%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <BsGithub className=' bg-[#383838] text-white border border-white flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-white text-3xl flex justify-around w-[100%]'>Git-Hub <span className='border rounded-full px-2'>30%</span></p>
                </div>
                <div className='w-[270px] flex flex-col items-center justify-center  h-[270px] bg-[#2A2A2A] rounded-3xl aboutUsCard'>
                    <FaNodeJs className=' bg-[#383838] text-[#689E5B] border border-[#689E5B] flex items-center justify-center text-3xl w-[80%] h-[80%] z-10 rounded-full ' />
                    <p className='text-[#689E5B] text-3xl flex justify-around w-[100%]'>Node JS <span className='border rounded-full px-2'>20%</span></p>
                </div>
            </div>
            <div className='mt-5 text-[#E4E4E4] justify-self-center relative w-[820px] rounded-xl'>
                <div className='w-[350px] h-[385px] absolute left-[-186px] bg-[#2C2C2C] p-3 rounded-xl z-10'>
                    <img src="Iskandar-about-left.jpg" className='h-[100%] w-[100%] border-4 border-gray-400' alt="iskandar-left" />
                </div>
                <div className='text-2xl text-justify px-5 absolute w-[500px] left-[20%] top-[50px] rounded-xl bg-[#2C2C2C] z-10'>
                    <h3 className='text-4xl mb-5 absolute top-[-20px]'>Об о мне</h3>
                    <p className='mt-10 p-5 text-start'>фронтенд-разработчик. Моя специализация - создание интерактивных и
                        визуально привлекательных пользовательских интерфейсов для веб-приложений и веб-сайтов.
                        Мои навыки включают в себя владение HTML, CSS и JavaScript, а также фреймворками и библиотеками,
                        такими как React.
                        У меня есть опыт создания адаптивных интерфейсов, обеспечивая оптимальный пользовательский
                        опыт на всех устройствах. Я также знаком с системами контроля версий, такими как Git, и имею
                        опыт работы в коллаборативной среде с другими разработчиками и дизайнерами.</p>
                </div>
                <div className='rounded-xl w-[250px] h-[280px] absolute left-[-86px] top-[450px] bg-[#2C2C2C] p-3 z-10'>
                    <img className='h-[100%] w-[100%] border-4 border-gray-400' src="iskandar-small.jpg" alt="iskandar" />
                </div>
                <div className='rounded-xl w-[287px] h-[427px] absolute right-[-130px] top-[150px] bg-[#2C2C2C] p-3 z-10'>
                    <img src="Iskandar-big.jpg" className='h-[100%] w-[100%] border-4 border-gray-400' alt="Iskandar" />
                </div>
                <div className='stroke'/>
                <div className='bigEllipse'/>
                <div className='midleElipse'/>
            </div>
        </div>
    )
}
