import React, { useEffect } from 'react'
import detail from "../projectInfo/detail.json"


const Projects = (props) => {

    const {grey,mode} = props;

    let slideIndex = 1;

    useEffect(() => {
        showSlide(slideIndex);
        // eslint-disable-next-line
    }, []);



    const moveSlide = (moveStep) => {
        showSlide(slideIndex += moveStep);
    }

    const showSlide = (n) => {

        const slides = document.getElementsByClassName('slide');

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        slides[slideIndex - 1].classList.remove('hidden');
    }
    return (
        <section id='projects' className={`px-10 sm:pt-24 text-${mode==='#FCF6F5'?'black':'white'}`}>
            <div>
                <h1 className='text-center text-4xl font-bold'>Projects</h1>
                <h1 className={`text-center text-gray-${grey===300?300:600} text-xl`}>My Work</h1>
            </div>
            <div className="relative md:w-3/5 lg:h-96 mx-auto pt-10">
                {detail.map((info)=>{return <div key={info.title} className="slide relative">
                    <div className='lg:flex w-full items-start'>
                        <div className='lg:w-1/2 p-4'>
                            <img className="h-auto object-cover rounded-md" src="https://blog.ionixxtech.com/wp-content/uploads/2018/04/01.14.2018-The-6-Basic-Steps-of-the-Software-Development-Process.jpeg" alt='' />
                        </div>
                        <div className="lg:w-1/2 px-5 py-3">
                            <h1 className='text-xl font-bold mb-2'>{info.title}</h1>
                            <p className={`font-medium mb-4 text-gray-${grey===300?300:600}`}>{info.stack}</p>
                            <p className={`text-gray-${grey===300?'300':'600'} mb-4 text-justify`}>{info.desc}</p>
                            <a target="_blank" rel="noreferrer" href={info.link} className=" bg-[#990011] text-white p-4 rounded-lg font-medium inline-flex items-center">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>})}

                {/* <!-- The previous button --> */}
                <button className="absolute right-full md:-left-28 text-4xl top-1/2 md:p-4 -translate-y-1/2 text-[#990011] font-extrabold md:text-8xl cursor-pointer"
                    onClick={() => moveSlide(-1)}>&lt;</button>

                {/* <!-- The next button --> */}
                <button className="absolute left-full text-4xl md:-right-28 top-1/2 md:p-4 -translate-y-1/2 font-extrabold md:text-8xl text-[#990011] cursor-pointer"
                    onClick={() => moveSlide(1)}>&gt;</button>

            </div>

        </section>
    )
}

export default Projects
