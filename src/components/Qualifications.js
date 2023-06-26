import React from 'react'

const Qualifications = (props) => {

    const {grey,mode} = props;
    return (
        <section id='education' className={`px-10 pt-24 text-${mode==='#FCF6F5'?'black':'white'}`}>
            <div>
                <h1 className='text-center text-4xl font-bold'>Qualifications</h1>
                <h1 className={`text-center text-gray-${grey===300?'300':'600'} text-xl`}>My Education</h1>
            </div>
            <div className='sm:w-3/4 mx-auto my-10 space-y-8'>
                <div className='bg-[#990011] rounded bg-opacity-60 p-4 sm:px-8'>
                    <h1 className='flex justify-between font-semibold text-lg'>B.Tech in Computer Science<span>Grade - 8.0 GPA</span></h1>
                    <h1>Government Engineering College,Ajmer</h1>
                    <i>2019 - 2023</i>
                </div>
                <div className='bg-[#990011] rounded bg-opacity-60 p-4 sm:px-8'>
                    <h1 className='flex justify-between font-semibold text-lg'>12th PCM<span>83.40%</span></h1>
                    <h1>Vande Mataram sr. sec. School, Pali</h1>
                    <i>2017 - 2018</i>
                </div>
                <div className='bg-[#990011] rounded bg-opacity-60 p-4 sm:px-8'>
                    <h1 className='flex justify-between font-semibold text-lg'>10th<span>7.4 CGPA</span></h1>
                    <h1>Central Academy, Pali</h1>
                    <i>2015 - 2016</i>
                </div>
            </div>
        </section>
    )
}

export default Qualifications
