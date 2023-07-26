import React from 'react'
import SocialMedia from './SocialMedia'

function Contact() {
  return (
    <div className='bg-zinc-50' id="Contact">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-5 ">
        <h1 className="my-4 text-4xl italic  font-extrabold tracking-tight leading-none text-black md:text-5xl  ">Send me a  message!</h1>
      </div>
      <form className='flex justify-center'>
        <div className='m-4 w-full lg:w-1/2 rounded-xl  shadow-lg bg-white px-10 py-4 '>             
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-yellow-300 peer rounded-none" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-300 peer rounded-none" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
              </div>
              
              <div className="relative z-0 w-full mb-6 group">
                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-300 peer rounded-none" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <textarea name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-yellow-300 peer rounded-none" placeholder=" " required style={{height:'120px'}} />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
              </div>
              {/* <div className="">
                  <textarea id="message"  className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     " placeholder="Leave a comment..."></textarea>
              </div> */}
              
              
              
              <button type="submit" className=" w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-500 shadow-sm shadow-yellow-400/50  rounded-xl">Submit</button>

              <h5 className='text-2xl font-bold text-center  m-5'>Or</h5>
              <SocialMedia blocStyle='icons w-full  flex  text-3xl gap-4 my-4 justify-center items-center text-white ' />
              <div className=''>   
                      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                              </svg>
                          </div>
                          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50    " placeholder="ayoub.boudra1@gmail.com" disabled={true}/>
                          <button type="button" className="text-white absolute right-2.5 bottom-2.5    font-medium rounded-xl text-sm px-4 py-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-500 shadow-sm shadow-yellow-400/50">Copy</button>
                      </div>
              </div>
        </div>

      </form>

    </div>
  )
}

export default Contact



