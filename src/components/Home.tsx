import React from 'react'
import Modal from './Modal'

function HomePage() {
  return (
    <div className="flex justify-center items-center z-0" id="Home">
          <div className="py-8 px-4  lg:mt-10 mx-auto max-w-screen-xl text-center lg:py-12">
              <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none text-black md:text-5xl  ">HEY, I'M AYOUB BOUDRA</h1>
              <p className="mb-8 text-2xl font-normal  lg:text-4xl sm:px-16 lg:px-48 lg:my-12 text-gray-600">Junior-level professional skilled in software engineering and data science.</p>
              <div className="flex flex-col  hover:scale-105 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <a href="#" className="  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-400/50  lg:mt-12     rounded-xl">
                      Get started
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  
              </div>
          </div>
    </div>
  )
}

export default HomePage