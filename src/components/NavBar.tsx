import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SocialMedia from './SocialMedia'
import { useRouter } from 'next/router'

function NavBar() {
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()

  return (
    <>
      <div
        className="w-screen h-16 font-bold text-white bg-black flex flex-row fixed top-0 drop-shadow-md z-30"
        id="navbar"
      >
        <Link
          href="/"
          className="logo w-full flex justify-center items-center italic lg:basis-1/2  cursor-pointer "
        >
          <h1 className="text-2xl   ">
            <span className="text-yellow-400 ">&lt;/</span>Ayoub_Bd
            <span className="text-yellow-400">&gt;</span>
          </h1>
        </Link>
        <div className="hidden lg:block lg:basis-2/3  ">
          <ul className="flex flex-row h-full justify-center items-center text-xl m-auto  ">
            <Link
              href="/"
              className={
                router.pathname === '/'
                  ? 'font-bold text-xl m-2 p-2 relative w-max two'
                  : 'font-bold text-xl m-2 p-2 relative w-max one'
              }
            >
              <p className="">Home</p>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
            </Link>
            <Link
              href="/about"
              className={
                router.pathname === '/about'
                  ? 'font-bold text-xl m-2 p-2 relative w-max two'
                  : 'font-bold text-xl m-2 p-2 relative w-max one'
              }
            >
              <p className="">About</p>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
            </Link>
            <Link
              href="/project"
              className={
                router.pathname === '/project'
                  ? 'font-bold text-xl m-2 p-2 relative w-max two'
                  : 'font-bold text-xl m-2 p-2 relative w-max one'
              }
            >
              <p className="">Projects</p>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
            </Link>
            <Link
              href="/skills"
              className={
                router.pathname === '/skills'
                  ? 'font-bold text-xl m-2 p-2 relative w-max two'
                  : 'font-bold text-xl m-2 p-2 relative w-max one'
              }
            >
              <p className="">Skills</p>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
            </Link>
            <Link
              href="/contact"
              className={
                router.pathname === '/contact'
                  ? 'font-bold text-xl m-2 p-2 relative w-max two'
                  : 'font-bold text-xl m-2 p-2 relative w-max one'
              }
            >
              <p className="">Contact</p>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
            </Link>

            <Link href="">
              <button className="ml-12 mr-6   rounded-xl  relative h-[45px] w-32 overflow-hidden   bg-yellow-400 pl-3 text-white  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-yellow-400  hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Resume</span>
              </button>
            </Link>
          </ul>
        </div>
        <div className="menu  absolute top-3 right-3 text-white text-4xl lg:hidden ">
          <i className="bi bi-list" onClick={() => setShowNav(true)}></i>
        </div>
      </div>

      <div
        className="navlist z-50  fixed top-0 h-screen w-screen bg-white text-black  lg:hidden "
        style={
          showNav
            ? { animation: 'showNavBar 1s forwards' }
            : { display: 'none' }
        }
      >
        <div className="flex flex-col ">
          <div className="text-4xl h-16 relative top-3 left-3 lg:hidden">
            <i className="bi bi-x-lg" onClick={() => setShowNav(false)}></i>
          </div>
          <ul className="w-full text-3xl text-center flex flex-col  lg:flex-row ">
            <li className="p-6 ">
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li className=" p-6">
              <Link className="" href="/about">
                About
              </Link>
            </li>
            <li className="p-6">
              <Link className="" href="/project">
                Projects
              </Link>
            </li>
            <li className="p-6">
              <Link className="" href="/skills">
                Skills
              </Link>
            </li>
            <li className="m-2 p-2 hover:text-yellow-400">
              <Link className="" href="/contact">
                Contact
              </Link>
            </li>
            {/* <li className='my-2 p-2 border-2 drop-shadow-xl border-yellow-400 text-white bg-yellow-400 absolute bottom-24 left-10 right-10 rounded-xl'>
                        <Link className='' href="">Contact</Link>
                    </li> */}
            <li className="text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-400  shadow-lg shadow-yellow-400/50    my-2 p-2  drop-shadow-lg absolute bottom-28 left-10 right-10 rounded-xl">
              <Link className="" href="">
                Resume
              </Link>
            </li>
            <li className="absolute bottom-10 left-10 right-10">
              <div className="drop-shadow-xl">
                <SocialMedia blocStyle="icons w-full flex-row flex lg:flex-col text-3xl gap-4 my-4 justify-center items-center text-white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
