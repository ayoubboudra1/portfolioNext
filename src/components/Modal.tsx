import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectProps } from './ProjectCard'


export interface ModalProps {
  showModal: boolean
  setShowModal: (modalStatus: boolean) => void
  content : ProjectProps
}

function Modal({ showModal, setShowModal ,content}: ModalProps) {
  
  const [index,setIndex]  = useState(0)
  const handlClick = (button:string) => {
      const length = content.images.length
      console.log(index)
      if(button === 'next'){
          setIndex(prev => (prev+1)%length)
      }
      else{
        setIndex(prev => (prev-1)%length)
      }
  }

  return (
    <>
      <div >
        <div className=' '>
          <div className="flex fixed inset-0 z-[99] w-screen   bg-gray-50">
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center px-2 py-2 mt-5 mr-5 space-x-1 text-xs font-medium uppercase border rounded-md border-neutral-200 lg:border-white/20 lg:bg-black/10 hover:lg:bg-black/30 text-neutral-600 lg:text-white hover:bg-neutral-100"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="relative flex flex-wrap  mt-12 w-full h-full md:h-1/2 p-2">
              <div className="flex relative flex-col lg:flex-row ">
                <div className="flex justify-center  relative">
                  <div className="mx-6 flex items-center">
                    <Image
                      width={1535}
                      height={733}
                      src={content.images[index]}
                      alt="..."
                    />
                  </div>
                  <button
                    onClick={()=>handlClick('previous')}
                    type="button"
                    className="mx-6 absolute top-0 left-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> */}
                    <svg
                      className="w-8 h-8 text-yellow-400 hover:text-yellow-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                    {/* </span> */}
                  </button>
                  <button
                    onClick={()=>handlClick('next')}
                    type="button"
                    className="mx-6  absolute top-0 right-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> */}
                    <svg
                      className="w-8 h-8 text-yellow-400 hover:text-yellow-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                    {/* </span> */}
                  </button>
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-center md:text-4xl mt-4 mb-10 ">
                      {content.title}
                    </h2>
                  <div className="">
                    
                    <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl">
                      Categories
                    </h5>
                    <div className='mx-12 my-5'>
                        {
                          content.tags.map((value,index) => 
                            <span key={'tag'+index} className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full cursor-pointer">{value}</span>
                          )  
                        }
                    </div>
                    <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl">
                      Technologies used
                    </h5>
                    <div className='mx-12 my-5'>
                    {
                          content.techUsed.map((value,index) => 
                            <span key={'tag'+index} className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full cursor-pointer">{value}</span>
                          )  
                        }
                    </div>
                    <h5 className="text-xl font-bold mx-5 mt-2 md:text-2xl">
                      Description
                    </h5>
                    <p className="text-lg font-normal mx-7 md:text-xl">
                      {
                        content.fullDescription
                      }
                    </p>
                    <h5 className="text-lg font-bold mx-5 mt-5 md:text-2xl">
                      More Details
                    </h5>
                    <div className="relative flex w-96 flex-col ml-10 text-gray-700">
                        <div className="">
                          <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Project date:
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              {content.date}
                            </p>
                          </div>
                          <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Type Of Work:
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              {content.typeWork}
                            </p>
                          </div>

                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
