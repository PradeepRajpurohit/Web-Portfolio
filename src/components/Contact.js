import React from 'react'
import {HiOutlineMail,HiOutlinePhoneMissedCall,HiOutlineLocationMarker} from 'react-icons/hi'

const Contact = (props) => {

    const {grey, mode} = props;
    return (
        <section id='contact' className={`px-10 pt-24 text-${mode==='#FCF6F5'?'black':'white'}`}>
            <div>
                <h1 className='text-center text-4xl font-bold'>Contact</h1>
                <h1 className={`text-center text-gray-${grey===300?'300':'600'} text-xl`}>Connect with me</h1>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container lg:px-5 py-10 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className={`leading-7 text-sm text-gray-${grey===300?'300':'600'}`}>Name</label>
                                    <input type="text" id="name" name="name" className={`w-full bg-gray-${grey===300?'300':'600'} bg-opacity-50 rounded border border-gray-300 focus:border-[#990011] focus:bg-white focus:ring-2 focus:ring-[#990011] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className={`leading-7 text-sm text-gray-${grey===300?'300':'600'}`}>Email</label>
                                    <input type="email" id="email" name="email" className={`w-full bg-gray-${grey===300?'300':'600'} bg-opacity-50 rounded border border-gray-300 focus:border-[#990011] focus:bg-white focus:ring-2 focus:ring-[#990011] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className={`leading-7 text-sm text-gray-${grey===300?'300':'600'}`}>Message</label>
                                    <textarea id="message" name="message" className={`w-full bg-gray-${grey===300?'300':'600'} bg-opacity-50 rounded border border-gray-300 focus:border-[#990011] focus:bg-white focus:ring-2 focus:ring-[#990011] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-[#990011] border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center items-center space-y-2">
                                <a href='/' className="flex items-center text-[#990011]"><span className='text-xl mr-2'><HiOutlineMail/></span>example@email.com</a>
                                <a href='/' className="flex items-center text-[#990011]"><span className='text-xl mr-2'><HiOutlinePhoneMissedCall/></span>+91-9001080307</a>
                                <p className="flex items-center leading-normal text-[#990011] "><span className='text-xl mr-2'><HiOutlineLocationMarker/></span>Pali,Rajasthan, India
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact
