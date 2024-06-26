import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import SocialMedia from '@/components/SocialMedia'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import PreLoading from '@/components/PreLoading'
import PageTransition from '@/components/PageTransition'
import { forwardRef, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function HomePage(props: IndexPageProps, ref: IndexPageRef) {
  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState(0)

  const visibleClassName =
    'hidden drop-shadow-xl lg:block socialmedia-links fixed top-80 lg:w-12 lg:h-56 bg-black rounded-r-xl z-50 transition-opacity ease-in duration-700 opacity-100'
  const disapearClassName =
    'hidden drop-shadow-xl lg:block socialmedia-links fixed top-80 lg:w-12 lg:h-56 bg-black rounded-r-xl z-50 transition-opacity ease-in duration-700 opacity-0'

  const listenToScroll = () => {
    let heightToHideFrom = 150
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    setHeight(winScroll)

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <>
      <NavBar />
      <div className={isVisible ? visibleClassName : disapearClassName}>
        <SocialMedia blocStyle="icons w-full flex-row flex lg:flex-col text-3xl gap-4 my-4 justify-center items-center text-white " />
      </div>
      <PageTransition>
        <Head>
          <title>Ayoub Boudra</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full ">
          {/* <PreLoading /> */}

          <div className="page absolute">
            <div className="navbar "></div>
            <div className="body mt-16" id="">
              <div>
                <Home />
              </div>
              <div>
                {/* <About /> */}
              </div>
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  )
}

export default forwardRef(HomePage)
