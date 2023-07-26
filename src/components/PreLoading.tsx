import React,{useRef,useEffect, useState} from 'react'


function PreLoading() {

    const app = useRef(null);
    const [visibility,setVisibility] = useState('flex')

    useEffect(() => {
      const timer = setTimeout(() => {
        
        setVisibility('hidden')
      }, 1000); 
      
      
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
    <div id='preloading' className={'fixed  top-0 left-0 bottom-0 right-0 bg-black z-50  justify-center items-center  font-mono '+visibility}    >
        
        <div className="loader text-yellow-300 text-6xl font-black ">
           <span>&lt;</span><span>&gt;</span>
        </div>    
        {/* &frasl; <div className='inline text-white'>Ayoub_Bd</div> */}
    </div>
       
    </>
  )
}

export default PreLoading