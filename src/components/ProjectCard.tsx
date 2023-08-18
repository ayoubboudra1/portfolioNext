import Image from 'next/image'
import React from 'react'
import Modal from './Modal'

export interface ProjectCardProps {
  setShowModal: (value: boolean) => void
}

function ProjectCard({ setShowModal }: ProjectCardProps) {
  return (
    <>
      <div className="flex   items-center justify-center my-10 px-4">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200   hover:shadow-xl">
          <Image
            width={400}
            height={400}
            src="/Images/project.jpg"
            alt="plant"
            className="h-auto w-full"
          />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">
              Well, aren&apost you going up to the lake tonight, you&aposve been
              planning it for two weeks.
            </p>
            <button
              className="w-full rounded-md   py-2 text-white  bg-yellow-400  shadow-lg   "
              onClick={() => setShowModal(true)}
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
