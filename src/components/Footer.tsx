import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='flex flex-col text-white'>
        <div className="   ">
            <div className='lg:border-r-2 my-5 border-zinc-500'>
                <h3 className='text-center text-2xl text-white font-bold '>Get in touch</h3>
                <div className='socialmedia'>
                    <SocialMedia blocStyle='icons w-full  flex flex-row text-3xl gap-4 my-4 justify-center items-center text-white '/>
                </div>
                <div className='email relative m-auto w-80 hover:scale-105 '>
                    
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-6 h-6 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <input type="email" className="cursor-pointer  block w-full p-3 pl-12 text-lg font-bold text-white border border-yellow-300 rounded-lg bg-gradient-to-r  from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br     pointer-events-none"   value={'Ayoub.boudra1@gmail.com'}  />
                        {/* text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-lg shadow-yellow-300/50    my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl */}
                </div>
            </div>
            {/* <div className='basis-1/2 lg:border-r-2 my-5 border-zinc-500 '>
                <h3 className='text-center text-2xl text-white font-bold my-4'>Get my resume</h3>
                <div className='relative m-auto w-80 hover:scale-105'>
                    <button className='cursor-pointer  block w-full p-3 pl-12 text-lg font-bold text-white border border-yellow-300 rounded-lg bg-gradient-to-r  from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br     '>
                       <i className="bi bi-filetype-pdf "></i> Resume PDF
                    </button>

                   
                </div>
            </div> */}
            
        </div>        
        <div className='col-span-3 text-center my-4 h-16 '>
            <p className='font-bold '>&#169; {year} All rights reserved.</p>
            <p className='font-semibold '>Designed & Coded by Me.</p>
        </div>
        
    </div>
  )
}

export default Footer