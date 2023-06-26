import React from 'react'
import logo from '../assest/logo.png'

const Footer = (props) => {

  const {grey} = props;

  return (
    <footer class=" body-font bg-[#990011]">
      <div class="container px-5 py-4 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <a href='/' class="flex title-font font-medium items-center justify-center">
          <img className='w-1/2' src={logo} alt=''/>
        </a>
        <p class={`text-md font-semibold text-${grey===300?'white':'black'} sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`}>© 2023 Pradeep Singh Rajpurohit
        </p>
        
      </div>
    </footer>
  )
}

export default Footer
