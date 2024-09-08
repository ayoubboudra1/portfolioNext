import React from 'react'

export interface OneSkillProps {
  skillsName: string[],
  skillTitle: string,
}



function OneSkill({ skillTitle, skillsName }: OneSkillProps) {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-900 ">{skillTitle}</h3>
      <div className="list-disc list-outside my-4">
        {skillsName.map((skill, index) => (
          <i key={'tag'+index} className="bg-yellow-400 text-white cursor-pointer hover:scale-105 text-lg font-semibold mx-2  px-2.5 py-2.5 rounded-full  " style={{'display':'inline-block','margin':'5px'}}>{skill}</i>

      ))}

      </div>
    </>
  )
}

export default OneSkill
