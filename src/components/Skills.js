import React from 'react'
import { FaCode } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { CgWebsite, CgDetailsMore } from "react-icons/cg";

const Skills = (props) => {

    const {grey,mode} = props;
    return (
        <section className={`pt-24 text-${mode==='#FCF6F5'?'black':'white'} px-10`} id='skills'>
            <div>
                <h1 className='text-center text-4xl font-bold'>Skills</h1>
                <h1 className={`text-center text-gray-${grey===300?'300':'600'} text-xl`}>My Technical skills</h1>
            </div>
            <div>
                <div className='flex justify-center my-8'>
                    <img src="https://skillicons.dev/icons?i=js,html,css,wasm,c,cpp,devto,figma,firebase,flutter,gcp,git,github,jquery,kotlin,linkedin,linux,mongodb,netlify,nextjs,py,redux,replit,ts,vscode,java,express,django,discord,dart&perline=6" alt='' />
                </div>
                <div>
                    <div className="mx-auto sm:w-3/4 drop-shadow rounded-md space-y-2">
                        {/* <h1 className="text-2xl font-italic font-light text-center text-white mb-10">KindaCode.com - FAQ</h1> */}

                        {/* <!-- The First FAQ --> */}
                        <details className=" duration-300">
                            <summary className="font-bold flex items-center justify-between bg-inherit px-5 py-3 sm:text-2xl cursor-pointers">
                                <div className='flex items-center'>
                                    <span className='mr-2  text-[#990011]'><FaCode /></span>
                                    <p>Programming Languages</p>
                                </div>
                                <span className=' text-[#990011]'><BiDownArrow /></span>
                            </summary>


                            <div className=" px-5 py-3 sm:text-lg font-medium list-none space-y-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Java</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>JavaScript</p>
                                        <p className='text-gray-600'>80%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[80%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex justify-between'>
                                        <p className='mb-2'>HTML</p>
                                        <p className='text-gray-600'>80%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[80%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>CSS</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                            </div>


                        </details>

                        {/* <!-- The Second FAQ --> */}
                        <details className=" duration-300">
                            <summary className="font-bold flex items-center justify-between bg-inherit px-5 py-3 sm:text-2xl cursor-pointers">
                                <div className='flex items-center'>
                                    <span className='mr-2  text-[#990011]'><CgWebsite /></span>
                                    <p>Frontend Development</p>
                                </div>
                                <span className=' text-[#990011]'><BiDownArrow /></span>
                            </summary>


                            <div className=" px-5 py-3 sm:text-lg font-medium list-none space-y-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>React js</p>
                                        <p className='text-gray-600'>80%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[80%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Redux</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Responsive Web design</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Next js</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>TailWind CSS</p>
                                        <p className='text-gray-600'>80%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[80%] bg-[#990011]'></span>
                                    </div>
                                </div>
                            </div>
                        </details>



                        {/* <!-- The Third FAQ --> */}
                        <details className=" duration-300">
                            <summary className="font-bold flex items-center justify-between bg-inherit px-5 py-3 sm:text-2xl cursor-pointers">
                                <div className='flex items-center'>
                                    <span className='mr-2  text-[#990011]'><CgDetailsMore /></span>
                                    <p>Other skills</p>
                                </div>
                                <span className=' text-[#990011]'><BiDownArrow /></span>
                            </summary>


                            <div className=" px-5 py-3 sm:text-lg font-medium list-none space-y-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Designing</p>
                                        <p className='text-gray-600'>65%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[65%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Communication</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Firebase</p>
                                        <p className='text-gray-600'>65%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[65%] bg-[#990011]'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='mb-2'>Bootstrap</p>
                                        <p className='text-gray-600'>70%</p>
                                    </div>
                                    <div className='h-1 bg-[#e26573]'>
                                        <span className='h-1 block w-[70%] bg-[#990011]'></span>
                                    </div>
                                </div>

                            </div>
                        </details>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Skills
