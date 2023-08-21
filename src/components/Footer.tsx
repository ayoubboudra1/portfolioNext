import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'
import EmailInput from './EmailInput'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col text-white  bg-black ">
      <div className=" grid lg:grid-cols-3  ">
        <div className=" my-5 ">
          <h3 className="text-left ml-5 text-xl text-white font-bold ">
            About this Page
          </h3>
          <h4 className="m-5 text-zinc-400">
            This website was coded in HTML, CSS, and Javascript based on a theme
            from Colorlib. It is hosted on a LAMP server from DigitalOcean. The
            code can be found here.
          </h4>
        </div>
        <div className=" my-5">
          <h3 className="text-left text-xl ml-5 text-white font-bold ">
            Get in touch
          </h3>
          <div className="socialmedia ">
            <SocialMedia blocStyle="icons w-full  flex flex-row text-3xl gap-4 m-6 justify-left  items-center  text-white " />
          </div>
          <div className="ml-4 mr-5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            {/* <div className="relative ">
              <div className="absolute inset-y-0 left-0  flex items-center pl-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm mx-2 text-gray-900 border   bg-white   rounded-xl "
                placeholder="ayoub.boudra1@gmail.com"
                disabled={true}
              />
              <button
                type="button"
                className="text-white absolute right-2.5 bottom-2.5 bg-yellow-400 hover:scale-105   font-medium rounded-xl text-sm px-4 py-2    shadow-sm "
              >
                Copy
              </button>
            </div> */}
            <div className="relative md:w-1/2 m-auto md:m-0 lg:w-full">
              <EmailInput />
            </div>
          </div>
        </div>
        <div className=" my-5 cursor-pointer  ">
          <h3 className="text-left ml-5   text-xl text-white font-bold ">
            Resume
          </h3>
          <div className="email relative m-6 w-80 hover:scale-105 ">
            <button className=" cursor-pointer  font-bold my-6 p-3 pl-12   w-full drop-shadow-lg  rounded-xl  relative   overflow-hidden   bg-yellow-400 px-3 text-white shadow-2xl ">
              <span className="relative z-10">
                <div className="absolute   ">
                  <svg
                    className="fill-current w-6 h-6  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                </div>
                Download my Resume
              </span>
            </button>
          </div>
          <Link
            href="/"
            className="logo  w-full flex justify-center items-center italic lg:basis-1/3 mt-14 "
          >
            <h1 className="text-2xl font-bold   ">
              <span className="text-yellow-400 ">&lt;/</span>Ayoub_Bd
              <span className="text-yellow-400">&gt;</span>
            </h1>
          </Link>
        </div>
      </div>
      <div className="col-span-3 text-center my-4 h-16 ">
        <p className="font-bold ">&#169; {year} All rights reserved.</p>
        <p className="font-semibold ">Designed & Coded by Me.</p>
      </div>
    </div>
  )
}

export default Footer
