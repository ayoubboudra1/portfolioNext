import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='flex flex-col text-white mt-12 bg-black '>
        <div className=" grid lg:grid-cols-3  ">
            <div className=' my-5 '>
                <h3 className='text-left ml-5 text-xl text-white font-bold '>About this Page</h3>
                <h4 className='m-5 text-zinc-400'> 
                This website was coded in HTML, CSS, and Javascript based on a theme from Colorlib. It is hosted on a LAMP server from DigitalOcean. The code can be found here.
                </h4>
            </div>
            <div className=' my-5'>
                <h3 className='text-left text-xl ml-5 text-white font-bold '>Get in touch</h3>
                <div className='socialmedia '>
                    <SocialMedia blocStyle='icons w-full  flex flex-row text-3xl gap-4 m-6 justify-left  items-center  text-white '/>
                </div>
                <div className='email relative m-6 w-80 hover:scale-105 cursor-pointer '>
                    
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-6 h-6 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <input type="email" className="cursor-pointer my-6  block w-full p-3 pl-12 text-lg font-bold text-white border border-yellow-300 rounded-lg bg-gradient-to-r  from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br     pointer-events-none "   placeholder={'Ayoub.boudra1@gmail.com'}  id="footerEmail" />
                        {/* text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-lg shadow-yellow-300/50    my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl */}
                </div>
                
            </div>
            <div className=' my-5 cursor-pointer  '>
                <h3 className='text-left ml-5   text-xl text-white font-bold '>Resume</h3>
                <div className='email relative m-6 w-80 hover:scale-105 '>
                    
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="fill-current w-6 h-6 text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        </div>
                        <input type="email" className="cursor-pointer my-6  block w-full p-3 pl-12 text-lg font-bold text-white border border-yellow-300 rounded-lg bg-gradient-to-r  from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br     pointer-events-none"   placeholder={'Download my Resume'}  id="footerEmail" />
                        {/* text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-lg shadow-yellow-300/50    my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl */}
                </div>
                <div className='logo  w-full flex justify-center items-center italic lg:basis-1/3 mt-14 '>
                <h1 className='text-2xl font-bold   '>
                    <span className='text-yellow-300 '>&lt;/</span>Ayoub_Bd<span className='text-yellow-300'>&gt;</span>    
                </h1>
            </div>
               
                
            </div>
            
            

            
        </div>        
        <div className='col-span-3 text-center my-4 h-16 '>
            <p className='font-bold '>&#169; {year} All rights reserved.</p>
            <p className='font-semibold '>Designed & Coded by Me.</p>
        </div>
        
    </div>
  )
}

export default Footer