import React, { useRef, useEffect } from 'react'
import Modal from './Modal'
import Link from 'next/link'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/router'
import { myInfo } from '@/data/myInfo'

function Home() {
  const router = useRouter()
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <div className="flex justify-center items-center z-0" id="Home">
      <div className="py-8 px-4  lg:mt-10 mx-auto max-w-screen-xl text-center lg:py-12">
        <AnimatePresence mode="popLayout">
          <motion.h1
            className="mb-4 text-4xl lg:text-7xl font-extrabold tracking-tight leading-none text-black md:text-5xl"
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            HEY, I&apos;M {myInfo.fullName}
          </motion.h1>
          <motion.p
            className="mb-8 text-2xl font-normal  lg:text-4xl sm:px-16 lg:px-48 lg:my-12 text-gray-600"
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {myInfo.smallDescription}
          </motion.p>
          <motion.div
            className="flex flex-col   sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* <a href="#" className="  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-400  shadow-sm shadow-yellow-400/50  lg:mt-12     rounded-xl">
                      Get started
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a> */}
            {/* <Link href="#about">
              <button className="mx-16  rounded-xl  relative h-[50px] w-44 overflow-hidden   bg-yellow-400 px-3 text-white shadow-lg hover:scale-105">
                <span className="relative z-10  inline-flex justify-center items-center font-bold text-xl">
                  About 
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </Link> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Home
