import { myInfo } from '@/data/myInfo'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useRef, useEffect } from 'react'
import OneSkill from './OneSkill'

function Skills() {
  const router = useRouter()
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <>
      <AnimatePresence mode="popLayout">
        <div className=" text-black pb-10" id="About">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 "
          >
            <h1 className="mb-4 text-4xl italic  font-extrabold tracking-tight leading-none  md:text-5xl  ">
              Some of my skills!
            </h1>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="p-5 mx-5 my-10 md:mx-20 border border-white rounded-lg bg-white shadow-md"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 ">
              Technical Skills
            </h1>
            <div className="gap-8 sm:grid sm:grid-cols-2 mt-10">
              <div>
                {myInfo.technicalSkillsLeft.map((value, index) => (
                  <OneSkill
                    key={'L' + index}
                    skillName={value.skillName}
                    percentage={value.percentage}
                  />
                ))}
              </div>
              <div>
                {myInfo.technicalSkillsRight.map((value, index) => (
                  <OneSkill
                    key={'R' + index}
                    skillName={value.skillName}
                    percentage={value.percentage}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="p-5 border  mx-5 my-10 md:mx-20 border-white rounded-lg bg-white shadow-md"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 ">
              Soft Skills
            </h1>
            <div className="gap-8 sm:grid sm:grid-cols-4 mt-10">
              {myInfo.softSkills.map((value, index) => (
                <div className="flex justify-center items-center flex-col" key={'soft'+index}>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">{value.name}</h3>

                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="p-5 border  mx-5 my-10 md:mx-20 border-white rounded-lg bg-white shadow-md"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 ">
              Languages
            </h1>
            <div className="gap-8 sm:grid sm:grid-cols-3 mt-10">
              {myInfo.languages.map((value, index) => (
                <div className="flex justify-center items-center flex-col" key={'Lang'+index}>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">{value.name}</h3>

                  <div className="flex items-center space-x-1">
                    {value.stars}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Skills
