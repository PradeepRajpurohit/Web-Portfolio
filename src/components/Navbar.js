import React from 'react'
import {MdLightMode} from 'react-icons/md'
import logo from '../assest/logo.png';

const Navbar = (props) => {

    const { grey, mode , changeMode } = props;

    return (
        <header className={`sticky top-0 shadow-md z-10`} style={{ backgroundColor: mode==='#FCF6F5'?'#FCF6F5':'#1D1D2C', color : grey===300?'white':'black' }}>
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-1/2' src={logo} alt=''/>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center cursor-pointer font-semibold justify-center">
                    <a href='#home' className="mr-5 hover:text-[#990011]">Home</a>
                    <a href='#about' className="mr-5 hover:text-[#990011]">About</a>
                    <a href='#skills' className="mr-5 hover:text-[#990011]">Skills</a>
                    <a href='#education' className="mr-5 hover:text-[#990011]">Education</a>
                    <a href='#projects' className="mr-5 hover:text-[#990011]">Portfolio</a>
                    <a href='#contact' className="mr-5 hover:text-[#990011]">Contact</a>
                </nav>
                <button onClick={()=> changeMode()} className={`inline-flex absolute top-0 right-2 md:static items-center border-0 py-1 px-3 focus:outline-none rounded text-3xl mt-4 md:mt-0`}
                style={{ color : grey===300?'white':'black' }}><MdLightMode/>
                </button>
            </div>
        </header>
    )
}

export default Navbar
