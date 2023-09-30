import Image from 'next/image'
import React ,{useState } from 'react'
import { ProjectProps } from './ProjectCard'
import { useRouter } from 'next/router'


type Props ={
    content : ProjectProps
}

function ProjectDetails({content}:Props) {
    const [index,setIndex]  = useState(0)
    const router = useRouter()
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
            <div className="my-24">
                <div className='mx-5'>
                <button onClick={()=> router.back()} className="w-full flex items-center justify-center  px-5 py-2 text-sm text-white transition-colors duration-200  border rounded-lg gap-x-2 sm:w-auto bg-yellow-400">
                    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </button>
                </div>
            <div className="relative flex flex-wrap  mt-6 w-full h-full md:h-1/2 p-2">
              <div className="flex relative flex-col lg:flex-row ">
                <div className="flex justify-center  relative">
                  <div className=" flex items-center relative">

                    <Image
                      width={1235}
                      height={50}
                      src={content.images[index]}
                      alt="..."
                      className=" rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                      
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
                        stroke-linecap="round"
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
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                    {/* </span> */}
                  </button>
                </div>
                <div className="w-screen">
                  <h2 className=" w-11/12  text-center  mt-4 mb-10 text-2xl md:text-3xl font-bold text-gray-900 ">
                      {content.title}
                    </h2>
                  <div className="w-11/12 m-auto">
                  <div className=" p-5 border border-white rounded-lg bg-white shadow-md">
                    <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl w-11/12    text-gray-900">
                        Categories
                        </h5>
                        <div className='mx-12 my-5'>
                            {
                            content.tags.map((value,index) => 
                                <button disabled key={'tag'+index} className="bg-yellow-400 m-1 hover:bg-yellow-500 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full cursor-pointer">{value}</button>
                            )  
                            }
                        </div>
                        <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl w-11/12    text-gray-900">
                        Technologies used
                        </h5>
                        <div className='mx-12 my-5'>
                                {
                                    content.techUsed.map((value,index) => 
                                        <button key={'tag'+index} className="bg-yellow-400 m-1 hover:bg-yellow-500 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full cursor-pointer">{value}</button>
                                    )  
                                    }
                        </div>
                        <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl w-11/12    text-gray-900">
                        Description
                        </h5>
                        <p className="text-lg font-normal mx-7 md:text-xl">
                        {
                            content.fullDescription
                        }
                        </p>
                        <h5 className="text-lg font-bold mx-5 mt-2 md:text-2xl w-11/12    text-gray-900">
                        More Details
                        </h5>

                  </div>
                 



                  </div>
                </div>
              </div>
            </div>

            </div>
    </>
  )
}

export default ProjectDetails