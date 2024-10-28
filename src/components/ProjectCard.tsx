import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './Modal'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type ProjectProps ={
    id : number
   title: string
   tags : string[]
   date : string
   fullDescription : string
   images : string[]
   techUsed : string[]
   typeWork:string
}

export const project0:ProjectProps = {
  title: '',
  tags: [],
  fullDescription: '',
  images: [],
  date: '',
  techUsed: [],
  typeWork: '',
  id: 0
}


// title : 'Web Application Gestion Commercial',
//       tags  : ['Web Application'],
//       smallDescription : 'Well first, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.',
//       fullDescription : 'Well second, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.Well first, aren&apost you going up to the lake tonight, you&aposve been planning it for two weeks.',
//       images : [
//         '/Images/project.png',
//         '/Images/project.jpg'
//       ],

export interface ProjectCardProps {

  project : ProjectProps,

}

function ProjectCard({ project }: ProjectCardProps) {
  const [index,setIndex]  = useState(0)
  const [seeMore,setSeeMore]  = useState(false)
  const handlClick = (button:string) => {
    const length = project.images.length
    console.log(index)
    if(button === 'next'){
        setIndex(prev => (prev+1)%length)
    }
    else{
      setIndex(prev => (prev-1)%length)
    }
}
  const route = useRouter()
  return (
    <>
      <div className="flex    items-center justify-center py-5  px-4 hover:scale-105">
        <div className="max-w-lg overflow-hidden rounded-xl bg-white shadow-md duration-200   hover:shadow-xl">
                          <div className="flex justify-center relative">
                  <div className=" flex items-center relative">

                    <Image
                      width={653}
                      height={374}
                      src={project.images[index]}
                      alt="..."
                      className=" rounded-lg shadow-none transition-shadow duration-300 ease-in-out "
                      
                    />



                    
                  </div>
                  <button
                    onClick={()=>handlClick('previous')}
                    type="button"
                    className={project.images.length > 1 ?"mx-6 absolute top-0 left-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none":"hidden"}
                    data-carousel-prev
                  >
                    {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> */}
                    <svg
                      className="w-8 h-8 text-yellow-400 hover:text-yellow-500 "
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
                    className={project.images.length > 1 ?"mx-6 absolute top-0 right-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none":"hidden"}
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
          <div className="p-5">
            <h1 className='text-xl font-bold'>{project.title}</h1>
            <p className='text-gray-600 italic'>{project.date}</p>
            {/* <div className=''>
                  {
                    project.tags.map((value,index) => 
                      <span key={'tag'+index} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{value}</span>
                    )  
                  }
            </div> */}
            
            <p className={"text-medium  text-gray-700 "+ (!seeMore ? 'truncate' : '')}>
              {project.fullDescription}
            </p>
            <p className='text-yellow-400 cursor-pointer mb-5' onClick={()=> setSeeMore(!seeMore)}>{seeMore ? 'See Less' : 'See More'}</p>
            <div className='my-2'>
                  {
                    project.techUsed.map((value,index) => 
                      <i key={'tag'+index} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full cursor-pointer ">{value}</i>
                    )  
                  }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
