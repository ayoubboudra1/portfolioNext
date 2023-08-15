import React from 'react'
import { myInfo } from '@/data/myInfo'


export interface ExperienceProps {
    title : string
    date : string
    description : string
}
export interface TimeLineItemProps {
    index : number
    item  : ExperienceProps
}

function TimeLineItem({index,item}:TimeLineItemProps) {
    const leftClass = "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
    const rightClass = "mb-8 flex justify-between items-center w-full right-timeline"

  return (
    <>
        <div className={index%2 === 0 ?leftClass:rightClass}>
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
            <h4 className="mb-3 font-bold text-lg md:text-2xl">{myInfo.myExperience[index].title}</h4>
            <p className="mb-3 font-bold text-yellow-400 ">{myInfo.myExperience[index].date}</p>
            <p className="text-sm md:text-base leading-snug text-gray-500  text-opacity-100">
                {myInfo.myExperience[index].description}
            </p>
            </div>
        </div>
    </>
  )
}

export default TimeLineItem