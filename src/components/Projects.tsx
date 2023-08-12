import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import Modal from './Modal'
import Image from 'next/image'

function Projects() {
  return (
    <>
    <div className=' text-black pb-10' id="About">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 ">
        <h1 className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">Get to know me!</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-8 md:mx-16 lg:mx-20'>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <Modal />
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10  px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10  px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-10 px-4">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <Image width={400} height={400} src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Well, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.</p>
              <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 ">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects