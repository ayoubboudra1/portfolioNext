import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SocialMedia from './SocialMedia'


function NavBar() {
    const [showNav,setShowNav] = useState(false)


  return (
    <>
        <div className='w-screen h-16 font-bold text-white bg-black flex flex-row fixed top-0 drop-shadow-xl z-40'>
            <div className='logo w-full flex justify-center items-center italic lg:basis-1/2 '>
                <h1 className='text-2xl   '>
                    <span className='text-yellow-300 '>&lt;/</span>Ayoub_Bd<span className='text-yellow-300'>&gt;</span>    
                </h1>
            </div>
            <div className='hidden lg:block lg:basis-2/3  '>
                <ul className='flex flex-row h-full justify-center items-center text-xl m-auto  '>
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/">Home</Link>
                    </li>
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/about">About</Link>
                    </li>
                    {/* <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="">Experience</Link>
                    </li> */}
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/project">Projects</Link>
                    </li>
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/skills">Skills</Link>
                    </li>
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/contact">Contact</Link>
                    </li>
                    {/* <li className='my-2 mx-4 p-2 bg-yellow-300 rounded-lg hover:bg-inherit hover:text-yellow-300 border-yellow-300 border-2'>
                        <Link className='' href="">Contact</Link>
                    </li> */}
                    <li className=' text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-500 shadow-sm shadow-yellow-400/50   m-11  p-2  drop-shadow-lg  rounded-xl'>
                        <Link className='flex flex-row justify-center items-center' href="">
                                 
                            Resume
                            
                        </Link>
                    </li>
                    {/* text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-500 shadow-lg shadow-yellow-400/50 dark:shadow-lg dark:shadow-yellow-300/80  my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl */}
                </ul>
            </div>
            <div className="menu  absolute top-3 right-3 text-white text-4xl lg:hidden " >
                <i className="bi bi-list" onClick={()=>setShowNav(true)}></i>
            </div>
        </div>
        
        <div className='navlist z-50  fixed top-0 h-screen w-screen bg-white text-black  lg:hidden ' style={showNav?{animation:"showNavBar 1s forwards"}:{display:'none'}}  >
            <div className='flex flex-col '>
                <div className='text-4xl h-16 relative top-3 left-3 lg:hidden'> 
                {/* text-4xl absolute font-bold  right-3 top-3 */}
                    <i className="bi bi-x-lg" onClick={()=>setShowNav(false)}></i>
                </div>
                <ul className='w-full text-3xl text-center flex flex-col  lg:flex-row '>
                    <li className='p-6 '>
                        <Link className='' href="/">Home</Link>
                    </li>
                    <li className=' p-6'>
                        <Link className='' href="/about">About</Link>
                    </li>
                    <li className='p-6'>
                        <Link className='' href="/project">Projects</Link>
                    </li>
                    <li className='p-6'>
                        <Link className='' href="/skills">Skills</Link>
                    </li>
                    <li className='m-2 p-2 hover:text-yellow-300'>
                        <Link className='' href="/contact">Contact</Link>
                    </li>
                    {/* <li className='my-2 p-2 border-2 drop-shadow-xl border-yellow-300 text-white bg-yellow-300 absolute bottom-24 left-10 right-10 rounded-xl'>
                        <Link className='' href="">Contact</Link>
                    </li> */}
                    <li className='text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-lg shadow-yellow-300/50    my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl'>
                        <Link className='' href="">Resume</Link>
                    </li>
                    <li className='absolute bottom-10 left-10 right-10'>
                        <div className='drop-shadow-xl'>
                            <SocialMedia blocStyle='icons w-full flex-row flex lg:flex-col text-3xl gap-4 my-4 justify-center items-center text-white' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar