import Image from 'next/image'
import React from 'react'
import TimeLine from './TimeLine'
import Interst from './Interst'

function About() {
  return (
    <div className=' text-black pb-10' id="About">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 ">
        <h1 className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">Get to know me!</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
      <div className='m-5  bg-white rounded-xl shadow-lg px-10 py-4 lg:w-3/4 flex flex-col   '>
        <div className='flex flex-col lg:flex-row lg:items-center '>
          <Image src="/Images/profile.jpg" width={600} height={600} alt="" className=' rounded-full w-40 m-auto my-5 lg:w-1/4 ' />
          <p className='text-md text-justify  font-bold  md:text-xl w-50  lg:mx-16  '>
              I&apos;m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
          </p>
        </div>
        
        <div className="flex flex-col hover:scale-105 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 m-5">
                  <a href="#" className="  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-400/50     rounded-xl">
                      Get started
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
      </div>  
      
      <div className=''>
        <div className='text-center'>
          <h1 className="my-10 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">My Experience!</h1>
        </div>
        <TimeLine />
      </div>
      <div className=''>
        <div className='text-center'>
          <h1 className="m-16 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">Areas of Interest</h1>
        </div>
        <Interst />
      </div>
      </div>
      <div className=''>
        
      </div>

    </div>
  )
}

export default About