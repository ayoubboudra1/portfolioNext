import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import PageTransition from '@/components/PageTransition'
import { ProjectProps, project0 } from '@/components/ProjectCard'
import ProjectDetails from '@/components/ProjectDetails'
import { myInfo } from '@/data/myInfo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
function projectDetails(props: IndexPageProps, ref: IndexPageRef) {

    const router = useRouter()
    const {id} = router.query
    const [content,setContent] = useState<ProjectProps>(project0)



    const getProjectById = () => {
      for(let i in myInfo.projects){
        if(myInfo.projects[i].id === parseInt(''+id)){
            return myInfo.projects[i];
        }
      }
        return myInfo.projects[0]
        

    }  

    useEffect(()=>{
      const project = getProjectById()
      setContent(project)
    },[id])

    



  return (
    <>
    {/* {showModal ? (
      <Modal showModal={showModal} setShowModal={setShowModal} content={content} />
    ) : null} */}
    <NavBar />

    <PageTransition ref={ref}>
      <Head>
        <title>Ayoub Boudra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <div className="page absolute mb-32">
          
          <div className="body mt-22" id="home">
          
                <ProjectDetails  content={content}/>
          </div>
          <div className="w-screen mt-44">
            <Footer />
          </div>
        </div>
      </main>
    </PageTransition>
  </>
  )
}

export default projectDetails