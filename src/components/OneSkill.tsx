import React from 'react'

export interface OneSkillProps {
  skillName: string
  percentage: string
}

function OneSkill({ skillName, percentage }: OneSkillProps) {
  return (
    <>
      <dl>
        <dt className="text-sm font-medium  ">{skillName}</dt>
        <dd className="flex items-center mb-3">
          <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
            <div
              className="bg-yellow-400 h-2.5 rounded "
              style={{ width: percentage }}
            ></div>
          </div>
          <span className="text-sm font-medium  ">{percentage}</span>
        </dd>
      </dl>
    </>
  )
}

export default OneSkill
