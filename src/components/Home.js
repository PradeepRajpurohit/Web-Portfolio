import React from 'react'
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { BsCloudArrowDownFill } from "react-icons/bs";

import Avatar from "../assest/Avatar.png"

const Home = (props) => {

    const {grey,mode} = props;


    return (

        <section className="sm:pt-32 md:px-12 px-10" id="home">
            <div className=''>
                <div className="flex sm:flex-row flex-col-reverse justify-center sm:pt-12 items-center">
                    <div className='flex sm:flex-row flex-col sm:justify-around'>
                        <div className="flex flex-col relative bottom-40 sm:bottom-4 space-y-12 justify-center sm:mr-16">
                            <a
                                href="https://www.linkedin.com/in/pradeep-singh-rajpurohit-9525211a9/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-[#990011]"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="https://github.com/PradeepRajpurohit"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-[#990011]"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.instagram.com/pradeeprazz_purohit/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-[#990011]"
                            >
                                <FiInstagram />
                            </a>
                        </div>


                        <div className={`sm:mt-0 -mt-28 text-${mode==='#FCF6F5'?'black':'white'}`}>
                            <h1 className="md:text-5xl text-3xl font-semibold mb-4">Hi, I'm</h1>
                            <h1 className="md:text-5xl text-3xl font-semibold mb-2">Pradeep Singh Rajpurohit</h1>
                            <h3 className={`text-lg text-gray-${grey===300?'300':'600'} font-medium mb-3`}>Web Developer and Programmer.</h3>
                            <p className={`mb-8 text-gray-${grey===300?'300':'600'}`}>
                                Talks about #Technology #Programming #FrontendDevelopment and #Business.
                            </p>
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1skEBA6jMlnMDGV3PgW-4Ejz5syhlVcc-/view?usp=drive_link" className=" bg-[#990011] text-white p-4 rounded-lg font-medium inline-flex items-center">
                                Resume <span className='ml-1'><BsCloudArrowDownFill /></span>
                            </a>
                        </div>
                    </div>
                    <div className="w-60">
                        <img src={Avatar} alt='I am here!' />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Home
