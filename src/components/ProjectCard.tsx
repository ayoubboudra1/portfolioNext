import Image from 'next/image'
import React from 'react'
import Modal from './Modal'

export type ProjectProps ={
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
  typeWork: ''
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
  setShowModal: (value: boolean) => void
  project : ProjectProps
  setContent : (content: ProjectProps) => void
}

function ProjectCard({ setShowModal,project,setContent }: ProjectCardProps) {
  return (
    <>
      <div className="flex   items-center justify-center my-10 px-4 hover:scale-105">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200   hover:shadow-xl">
          <Image
            width={400}
            height={400}
            src={project.images[0]}
            alt="plant"
            className="h-auto w-full"
          />
          <div className="p-5">
            <h1 className='text-xl font-bold'>{project.title}</h1>
            <p className='text-gray-600 italic'>{project.date}</p>
            <div className=''>
                  {
                    project.tags.map((value,index) => 
                      <span key={'tag'+index} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{value}</span>
                    )  
                  }
            </div>
            
            <p className="text-medium mb-5 text-gray-700 truncate">
              {project.fullDescription}
            </p>
            <button
              className="w-full rounded-md   py-2 text-white  bg-yellow-400  shadow-lg   "
              onClick={() => {setShowModal(true);setContent(project)}}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
