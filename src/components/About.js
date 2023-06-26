import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import Avatar from "../assest/Avatar.png"


const About = (props) => {

    const { grey, mode} =props;
    return (
        <section className={`pt-24 text-${mode === '#FCF6F5' ? 'black' : 'white'} px-10`} id='about'>
            <div>
                <h1 className='text-center text-4xl font-bold'>About</h1>
                <h1 className={`text-center text-gray-${grey===300?'300':'600'} text-xl`} >Introduction</h1>
            </div>
            <div className='flex flex-col sm:flex-row sm:py-16 lg:px-32'>
                <div className='flex items-center sm:w-[84rem]'>
                    <img className='object-contain' src={Avatar} alt='' />
                </div>
                <div className='text-lg'>
                    <p>Hello, I am Self Motivated and Hardworking person. I am final year student of B.Tech Computer
                        Science. I have good interest in technology and software development I learnt various
                        technology in my college. I love to work in challenging Environment. My hobbies are Travalling and watching Podcasts.
                    </p>
                    <div className='flex sm:mt-20 mt-8  justify-around'>
                        <h1 className='text-center hidden sm:block font-semibold'><span className='font-bold text-lg'>5+</span> Project<br /> Completed!</h1>
                        <a target="_blank" href="img/resume.pdf" className=" bg-[#990011] text-white p-4 rounded-lg font-medium inline-flex items-center">
                            Contact Me <span className='ml-1 animate-bounce'><AiOutlineArrowDown /></span>
                        </a>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default About
