import { myInfo } from '@/data/myInfo'
import React from 'react'
import TimeLineItem from './TimeLineItem'



interface Experience {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface TimeLineInterface {
  data: Experience[];
}

function TimeLine({data}: TimeLineInterface) {
  return (
    <>
      <section>
        <div className=" text-black  pb-8">
          <div className="container mx-auto flex flex-col items-center justify-center md:flex-row my-12 md:my-24">
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky ">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border hidden md:block"
                    style={{
                      right: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border hidden md:block"
                    style={{
                      left: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  {data.map((item, index) => (
                    <TimeLineItem key={index} index={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TimeLine
