import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import PageTransition from '@/components/PageTransition'
import Projects from '@/components/Projects'
import SocialMedia from '@/components/SocialMedia'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
function project(props: IndexPageProps, ref: IndexPageRef) {

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)

  const visibleClassName = 'hidden drop-shadow-xl lg:block socialmedia-links fixed top-80 lg:w-12 lg:h-56 bg-black rounded-r-xl z-50 transition-opacity ease-in duration-700 opacity-100'
  const disapearClassName = 'hidden drop-shadow-xl lg:block socialmedia-links fixed top-80 lg:w-12 lg:h-56 bg-black rounded-r-xl z-50 transition-opacity ease-in duration-700 opacity-0'

  const listenToScroll = () => {
    let heightToHideFrom = 690;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };


  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  return (
    <>
    <NavBar />
    <div  className={isVisible?visibleClassName:disapearClassName} >
      <SocialMedia blocStyle='icons w-full flex-row flex lg:flex-col text-3xl gap-4 my-4 justify-center items-center text-white '/>
    </div>
    <PageTransition ref={ref}>
    <Head>
    <title>Ayoub Boudra</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className='w-full '>

      {/* <PreLoading /> */}

      <div className='page absolute'>
            
            <div className='body mt-16' id='home'>
                <div>
                    <Projects />
                </div>
          </div>  
          <div className=''>
            <Footer />
          </div>
      </div>
      
  </main>
  </PageTransition>
</>
  )
}

export default forwardRef(project)