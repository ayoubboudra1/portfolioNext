import React from 'react'
import { myInfo } from '@/data/myInfo'

function Interst() {
  return (
    <section className=" ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          {myInfo.areasOfInterst.map((value, index) => (
            <div className="flex justify-center items-center flex-col bg-white px-5 py-4 rounded-lg shadow-lg hover:scale-105" key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-center">{value.title}</h3>
              <p className="text-gray-500  text-justify">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interst
