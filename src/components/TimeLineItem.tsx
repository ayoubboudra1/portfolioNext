import React from 'react'
import { myInfo } from '@/data/myInfo'

export interface ExperienceProps {
  title: string
  location: string|undefined
  date: string
  description: string
}
export interface TimeLineItemProps {
  index: number
  item: ExperienceProps
}

function TimeLineItem({ index, item }: TimeLineItemProps) {
  const leftClass =
    'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline '
  const rightClass =
    'mb-8 flex justify-between items-center w-full right-timeline'

  return (
    <>
      <div className={index % 2 === 0 ? leftClass : rightClass} >
        <div className="order-1 hidden md:block md:w-5/12"></div>
        <div className="order-1 w-full md:w-5/12 px-5 py-5 rounded-lg text-right bg-white shadow-lg hover:scale-105">
          <h4 className="mb-3 font-bold text-lg md:text-2xl">
            {item.title}
          </h4>
          <i className=''>{item.location}</i>
          <p className="mb-3 font-bold text-yellow-400 ">
            {item.date}
          </p>
          <p className="text-sm md:text-base leading-snug text-gray-500  text-opacity-100">
            {item.description}
          </p>
        </div>
      </div>
    </>
  )
}

export default TimeLineItem
