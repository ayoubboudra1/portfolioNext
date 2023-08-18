import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'
import NavBar from './NavBar'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import Modal from './Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
} from 'framer-motion'
import ProjectCard from './ProjectCard'

export interface ProjectsProps {
  setShowModal: (value: boolean) => void
  showModal: boolean
}

function Projects({ showModal, setShowModal }: ProjectsProps) {
  return (
    <>
      <AnimatePresence mode="popLayout">
        <div className=" text-black pb-10  " id="About">
          <motion.div
            className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 "
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">
              Get to know me!
            </h1>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-8 md:mx-16 lg:mx-20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ProjectCard setShowModal={setShowModal} />
            <ProjectCard setShowModal={setShowModal} />
            <ProjectCard setShowModal={setShowModal} />
          </motion.div>
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
    </>
  )
}

export default Projects
