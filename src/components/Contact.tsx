import React, { useEffect, useRef, useState } from 'react'
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
const emailInput0:EmailInput = {
  firstName: '',
  lastName: '',
  emailAdresse: '',
  message: ''
}

function Contact() {
  const router = useRouter()
  const [isSent, setIsSent] = useState(<h1>Submit</h1>)
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
    reset
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
    setTimeout(() => {
      setIsSent(
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-4 h-4  text-white animate-spin  fill-yellow-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>,
      )
    }, 1)
    setTimeout(() => {
      reset()
      setIsSent(<h1>Submit</h1>)
    }, 1500)

   
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
              {isSent}
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
