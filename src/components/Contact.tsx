import React, { useEffect, useRef } from 'react'
import SocialMedia from './SocialMedia'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import EmailInput from './EmailInput'

export type EmailInput = {
  firstName: string
  lastName: string
  emailAdresse: string
  message: string
}

function Contact() {
  const router = useRouter()
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailInput>()
  const onSubmit: SubmitHandler<EmailInput> = async (data) => {
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).catch((error) => console.log(error.message))
  }

  return (
    <div className="bg-zinc-50" id="Contact">
      <AnimatePresence mode="popLayout">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-10 lg:pb-5 ">
          <motion.h1
            className=" text-4xl italic  font-extrabold tracking-tight leading-none text-black md:text-5xl  "
            // ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.75 }}
          >
            Send me a message!
          </motion.h1>
        </div>
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            className="m-4 w-full lg:w-1/2 rounded-xl  shadow-lg bg-white px-10 py-4 "
            // ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  // name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-yellow-400 peer rounded-none"
                  placeholder=" "
                  {...register('firstName', {
                    required: true,
                    pattern: /^[a-zA-Z]{2,30}$/i,
                  })}
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  // name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer rounded-none"
                  placeholder=" "
                  {...register('lastName', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer rounded-none"
                placeholder=" "
                {...register('emailAdresse', {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                })}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-yellow-400 peer rounded-none"
                placeholder=" "
                {...register('message', { required: true })}
                style={{ height: '120px' }}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            {/* <div className="">
                  <textarea id="message"  className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     " placeholder="Leave a comment..."></textarea>
              </div> */}

            <button
              type="submit"
              className=" w-full  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-yellow-400  shadow-sm  rounded-xl"
            >
              Submit
            </button>

            <h5 className="text-2xl font-bold text-center  m-5">Or</h5>
            <SocialMedia blocStyle="icons w-full  flex  text-3xl gap-4 my-4 justify-center items-center text-white " />
            <div className="">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative w-full">
                <EmailInput />
              </div>
            </div>
          </motion.div>
        </form>
      </AnimatePresence>
    </div>
  )
}

export default Contact
