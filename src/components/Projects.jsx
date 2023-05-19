import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Интернет магазин',
            img: 'internet-magazin.png',
            details: 'Интернет-магазин — сайт, торгующий товарами посредством сети Интернет. Позволяет пользователям онлайн, в своём браузере или через мобильное приложение, сформировать заказ на покупку, выбрать способ оплаты и доставки заказа, оплатить заказ',
            link:'/'
            
        },
        {
            id: 2,
            name: 'Телеграм',
            img: 'telegram.png',
            details: 'Telegram — кроссплатформенная система мгновенного обмена сообщениями с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.',
            link:'/'
        },
        {
            id: 3,
            name: 'Разработка сайта',
            img: 'deadline.png',
            details:'Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера.',
            link:'/'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    }

    const goToNextSlide = () => {
        const index = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }
    return (
        <div id='portfolio' className='bg-[#1E1E1E] pt-5 flex flex-col items-center'>
            <h1 className='text-5xl text-center text-white'>Мои проекты</h1>
            <div className='relative flex justify-between w-[1200px] px-10 h-[100vh] items-center'>
                <BsFillArrowLeftCircleFill onClick={goToPrevSlide} className='text-[#E2A000] text-4xl hover:text-[#E24A05] cursor-pointer' />
                {projects.map((project, index) =>
                    (index === currentIndex - 1 || (currentIndex === 0 && index === projects.length - 1))
                    && (
                        <div
                            key={project.id}
                            className='w-[970px] h-[600px] grid grid-cols-2 rounded-3xl items-center bg-[#323232] p-5 gap-5'
                        >
                            <a href="/"><img className='h-[400px] w-[100%] rounded-2xl' src={project.img} alt={project.name} /></a>
                            <div className=' h-[400px] p-2'>
                                <h1 className='text-white text-3xl text-center mb-2'>{project.name}</h1>
                                <p className='text-white text-2xl'>{project.details}</p>
                                <p><a className='text-blue-400' href={project.link}>Нажимая на этот текст можете переходить на сайт  </a></p>
                            </div>
                        </div>
                    )
                )}
                <BsFillArrowRightCircleFill onClick={goToNextSlide} className='text-[#E2A000] text-4xl hover:text-[#E24A05] cursor-pointer' />
            </div>
        </div>
    )
}
