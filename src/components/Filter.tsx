import React ,{useState}from 'react'


type Props = {
    categories : string
    setCategories : (newValue:string)=> void
}


function Filter({categories,setCategories}:Props) {


    const classNotSelected = "cursor-pointer bg-gray-400 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-gray-400 md:p-0 rounded focus:outline-none"
    const classSelected = "cursor-pointer bg-yellow-400 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-yellow-400 md:p-0 rounded focus:outline-none"
    
    const listCategories = [
        'Data Science',
        'Data Analysis',
        'Data Engineering',
        'Development',
    ]
        
    

  return (
    <>
    <div className="flex gap-8  md:hidden">
  <div className="relative">
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="mb-4 text-md italic  font-extrabold tracking-tight leading-none  md:text-xl"> Filter by Categories </span>

        <span className="transition group-open:-rotate-180 mb-4 text-md italic  font-extrabold tracking-tight leading-none  md:text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div
        className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
      >
        <div className="w-96 rounded border border-gray-200 bg-white">


          <ul className="space-y-1 border-t border-gray-200 p-4">
            {
                listCategories.map((item,index)=><li key={item}>
                    <label
                      htmlFor={item}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={item}
                        checked={categories === item?true:false}
                        className="h-5 w-5 rounded border-gray-300"
                        onChange={()=> setCategories(item)}
                        
                      />
      
                      <span className="text-sm font-medium text-gray-700">
                      {item}
                      </span>
                    </label>
                  </li>)
            }
          </ul>
        </div>
      </div>
    </details>
  </div>
</div>

    <nav className="border-gray-200 hidden md:block">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">

            {
                listCategories.map((item,index)=><li key={item}>
                    <p className={categories === item ? classSelected : classNotSelected} onClick={()=> setCategories(item)}>{item}</p>
                  </li>)
            }
        </ul>
        </div>
    </div>
    </nav>

    </>
  )
}

export default Filter