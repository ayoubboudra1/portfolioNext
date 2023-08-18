import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useRef, useEffect } from 'react'

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
            <time className="text-2xl md:text-3xl font-semibold text-gray-900 ">
              January 13th, 2022
            </time>
            <div className="gap-8 sm:grid sm:grid-cols-2 mt-10">
              <div>
                <dl>
                  <dt className="text-sm font-medium  ">Staff</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '88%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Comfort</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Free WiFi</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Facilities</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '59%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">5.4</span>
                  </dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt className="text-sm font-medium  ">Value for money</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Cleanliness</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">7.0</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Location</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
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
            <time className=" text-2xl md:text-3xl  font-semibold  ">
              January 12th, 2022
            </time>
            <div className="gap-8 sm:grid sm:grid-cols-2 mt-10">
              <div>
                <dl>
                  <dt className="text-sm font-medium  ">Staff</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '88%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Comfort</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Free WiFi</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Facilities</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '59%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">5.4</span>
                  </dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt className="text-sm font-medium  ">Value for money</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Cleanliness</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">7.0</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium  ">Location</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-300 rounded h-2.5  mr-2">
                      <div
                        className="bg-yellow-400 h-2.5 rounded "
                        style={{ width: '89%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium  ">8.9</span>
                  </dd>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Skills
