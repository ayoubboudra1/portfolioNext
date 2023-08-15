import Head from 'next/head'
import React,{useRef,useEffect} from 'react'
import NavBar from './NavBar'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import Modal from './Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion,AnimatePresence, useAnimation, useInView, useScroll } from 'framer-motion'


function Projects() {



  return (
    <>
    <div className=' text-black pb-10  ' id="About">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 ">
        <h1 className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">Get to know me!</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-8 md:mx-16 lg:mx-20'>
        <div className="flex   items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200  hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <Modal />
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10  px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200  hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white  bg-yellow-400  shadow-lg   ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10  px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-400 drop-shadow-lg  shadow-lg shadow-yellow-400/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-400 drop-shadow-lg  shadow-lg shadow-yellow-400/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-400 drop-shadow-lg  shadow-lg shadow-yellow-400/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="/Images/project.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-400 drop-shadow-lg  shadow-lg shadow-yellow-400/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
      <Link href="" className='flex flex-col hover:scale-105 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 m-5'>
          <button className=" mx-16  rounded-xl  relative h-[50px] w-56 overflow-hidden  bg-yellow-400 text-white shadow-lg">
          <span className="relative z-10  inline-flex justify-center items-center font-bold text-xl">
            My Projects
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    
          </span>
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Projects