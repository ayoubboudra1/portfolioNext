import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import TimeLine from './TimeLine'
import Interst from './Interst'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { myInfo } from '@/data/myInfo'

function About() {
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
    <AnimatePresence mode="popLayout">
      <div className=" text-black pb-10 " id="About">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 ">
          <motion.h1
            className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  "
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get to know me!
          </motion.h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="m-5  bg-white rounded-xl shadow-lg px-10 py-4 lg:w-3/4 flex flex-col   "
          >
            <div className="flex flex-col lg:flex-row lg:items-center ">
              <Image
                src={myInfo.myImagePath}
                width={600}
                height={600}
                alt=""
                className=" rounded-full w-40 m-auto my-5 lg:w-1/4 "
              />
              <p className="text-md text-justify  font-bold  md:text-xl w-50  lg:mx-16  ">
                {myInfo.descriptionAboutMe}
              </p>
            </div>
          </motion.div>

          <motion.div
            className=""
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <h1 className="my-10 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">
                My Experience!
              </h1>
            </div>
            <TimeLine />
          </motion.div>
          <motion.div
            className=""
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-center">
              <h1 className="m-16 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">
                Areas of Interest
              </h1>
            </div>
            <Interst />
          </motion.div>
        </div>
        <div className="">
          <Link
            href=""
            className="flex flex-col hover:scale-105 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 m-5"
          >
            <button className=" mx-16  rounded-xl  relative h-[50px] w-56 overflow-hidden  bg-yellow-400 text-white shadow-lg">
              <span className="relative z-10  inline-flex justify-center items-center font-bold text-xl">
                My Projects
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
          </Link>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default About
