import Image from 'next/image'
import { MyInfo } from './myInfoType'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export const myInfo:MyInfo = {
  fullName: 'AYOUB BOUDRA',
  myEmail: 'ayoub.boudra1@gmail.com',
  myPhone : '+33751235169',
  smallDescription:
    "I am a data science and data engineering student, passionate about new technologies and always eager to learn new skills.",
  myImagePath: '/Images/new_profile.png',
  descriptionAboutMe:
<>
    I am currently pursuing a master’s degree in <i className='text-yellow-400'>Science et Ingénierie des Données</i> at the Faculty of Science, Université Aix-Marseille.
    <br />
    <br />
    I possess strong analytical skills and enjoy solving problems creatively. I am adaptable and open to new challenges, always seeking opportunities for personal and professional growth.
    <br/>
    <br />
    I have developed valuable skills that allow me to work well within teams and continue advancing in my career.
</>
,
  myExperience: [
    {
      title: "Data Scientist | AI-based Grant Assistance Application",
      location: "PowerGo France, Casablanca, Maroc",
      date: "02/2024 - 07/2024",
      description: 
        "Developed a web application using generative AI to simplify grant management. Integrated LLMs for automatic content generation and data analysis. Automated data collection via API (Serper) to improve precision and efficiency. Managed the project using Kanban to deliver milestones on time."
    },
    {
      title: "Data Analyst | Website Performance Data Analysis",
      location: "NewDev Freelance, Fès, Maroc",
      date: "07/2023 - 09/2023",
      description: 
      "Analyzed traffic and conversion data using Google Analytics. Performed predictive modeling of user behavior to optimize marketing performance. Cleaned and analyzed data using Python (Pandas, NumPy). Prepared reports and recommendations for stakeholders."
    },
    {
      title: "Fullstack Developer | Commercial Management Web Application",
      location: "Innov-DS, Fès, Maroc",
      date: "05/2022 - 07/2022",
      description: 
        "Developed a commercial management application with process automation. Implemented user, item, and package management functionalities. Collaborated on the digital transformation of the company."
    },
    
  ],
  myEducation: [
    {
      title:"Data Science and Engineering.",
      location : 'Faculty of Science, Aix-Marseille University',
      date: 'Sep-2024, Sep-2025',
      description: "This program provides a deep understanding of data management, analysis, and Big Data processing. With a strong focus on machine learning, artificial intelligence, cloud computing, and advanced data technologies, it emphasizes hands-on experience and problem-solving skills. Students are trained to tackle complex data challenges, design innovative solutions, and apply cutting-edge techniques in real-world scenarios, making them well-prepared for careers in data-driven industries.",
    },
    {
      title: "Master's in Data Science & Intelligent Systems.",
      location : 'Faculty Of Science And Technology',
      date: 'Sep-2022, Jul-2024',
      description:
        "provides a strong foundation in essential aspects of data science and artificial intelligence. It covers topics like machine learning, knowledge engineering, and analyzing large datasets. The program also includes modules focused on development, offering practical skills in software development.",
    },
    {
      title: "Bachelor's degree in Computer Science.",
      location : 'Faculty Of Science And Technology',
      date: 'Sep-2021, Jul-2022',
      description:
        'This degree has provided me with a fundamental understanding of computer science and its basic concepts. It has equipped me with essential skills in various areas of computer science, allowing me to grasp the foundational principles and concepts in the field.',
    },
    {
      title: 'DEUST degree in Mathematics, Physics, and Computer Science.', 
      location : 'Faculty Of Science And Technology',
      date: 'Sep-2018 , Jul-2021',
      description:
        "The degree program provides a comprehensive education in mathematics, physics, and computer science, equipping me with essential skills in these domains.",
    },
    {
      title: "Baccalaureate in Physical Sciences",
      location: "Morocco",
      date: "Sep-2017 , Jul-2018",
      description: "The Baccalaureate in Physical Sciences is a high school diploma in Morocco that provides a strong foundation in physics, mathematics, and other sciences. This program equips students with essential analytical and problem-solving skills, preparing them for further studies in scientific and technical fields."
    },




  ],
  areasOfInterst: [

    {
      title: 'Data Science',
      description:"I enjoy extracting valuable insights from complex datasets, transforming raw data into meaningful conclusions that drive decision-making and innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
      )
    },
    {
      title: 'Data Engineering',
      description:
        "I enjoy designing and managing robust data pipelines and architectures, ensuring data accessibility and reliability for analysis and decision-making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20">
          <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"/>
          <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
      ),
    },
    {
      title: 'Data Analysis',
      description:"I enjoy analyzing and interpreting data to uncover trends and patterns, providing actionable insights that support strategic business decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20">
          <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
        </svg>
      ),
    },
    {
      title: 'Artificial Intelligence',
      description:"I enjoy building intelligent systems that can learn, adapt, and automate tasks, enhancing human capabilities and improving decision-making processes.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer">
          <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
        </svg>
      ),
    },{
      title: 'Big Data',
      description:"I appreciate working with large-scale data, using distributed systems to manage, process, and analyze vast amounts of information efficiently.",
      icon: ( <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20">
            <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
        </svg>),
    },{
      title: 'Cloud Computing',
      description: "I enjoy leveraging cloud platforms like AWS and Azure for scalable, flexible, and powerful data processing and storage solutions.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 20 20" className='w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer' version="1.1" >
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>)
    }
    
  ],
  technicalSkills: [
    {
        skillTitle: 'Langages de programmation et Framework',
        skillsName: ["Python", "R", "SQL", "Flask"]
    },
    {
        skillTitle: 'Data Science & IA',
        skillsName: ["Machine Learning (supervised and unsupervised)", "Deep Learning (CNN, RNN, LSTM)", "NLP", "LLMs", "Analyse de données"]
    },
    {
        skillTitle: 'Business Intelligence',
        skillsName: ["Power BI", "Tableau", "Visualisation de données (Matplotlib, Seaborn, Plotly)"]
    },
    {
        skillTitle: 'Bases de données',
        skillsName: ["MySQL", "PostgreSQL", "Cassandra", "MongoDB"]
    },
    {
        skillTitle: 'Plateformes et Outils Big Data',
        skillsName: ["Hadoop", "Spark", "Kafka"]
    },
    {
        skillTitle: 'ETL & Data Warehousing',
        skillsName: ["Conception et gestion de pipeline de données", "Airflow"]
    },
    {
        skillTitle: 'Outils de développement',
        skillsName: ["Git", "Docker", "Kubernetes", "MLOps", "CI/CD"]
    },
    {
        skillTitle: 'Environnements Cloud',
        skillsName: ["AWS", "Microsoft Azure"]
    }
],
  languages: [
    {
      name: 'Arabic',
      icon: (
        <Image
          className="hover:scale-105 cursor-pointer"
          alt="morocco"
          width={512}
          height={512}
          src="/Icons/morocco.png"
        />
      ),
      stars: (
        <>
          {[...Array(5)].map((e, i) => (
            <svg
              key={'P' + i}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          {[...Array(0)].map((e, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                key={'N' + i}
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          ))}
        </>
      ),
    },
    {
      name: 'French',
      icon: (
        <Image
          className="hover:scale-105 cursor-pointer"
          alt="france"
          width={512}
          height={512}
          src="/Icons/france.png"
        />
      ),
      stars: (
        <>
          {[...Array(4)].map((e, i) => (
            <svg
              key={'P' + i}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          {[...Array(1)].map((e, i) => (
            <svg
              key={'s'+i}
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                key={'N' + i}
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          ))}
        </>
      ),
    },
    {
      name: 'English',
      icon: (
        <Image
          className="hover:scale-105 cursor-pointer"
          alt="france"
          width={512}
          height={512}
          src="/Icons/united-kingdom.png"
        />
      ),
      stars: (
        <>
          {[...Array(4)].map((e, i) => (
            <svg
              key={'P' + i}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          {[...Array(1)].map((e, i) => (
            <svg
              key={'N' + i}
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          ))}
        </>
      ),
    },
  ],
  softSkills : [
    {
        name : 'Communication',
        icon : (<svg className='hover:scale-105 cursor-pointer' width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="conversation" ><path d="M18.82,8c-.8-3.46-4.3-6-8.32-6C5.81,2,2,5.36,2,9.5a6.82,6.82,0,0,0,1.06,3.63l-1,3.6a1,1,0,0,0,.3,1A1,1,0,0,0,3,18a1,1,0,0,0,.39-.08l3.66-1.56A9.6,9.6,0,0,0,10.5,17c4.69,0,8.5-3.36,8.5-7.5A6.27,6.27,0,0,0,18.82,8Z" style={{fill:'#231f20'}}></path><path d="M21,22a1,1,0,0,1-.39-.08L17,20.36A9.6,9.6,0,0,1,13.5,21a8.44,8.44,0,0,1-8-5.1A1,1,0,0,1,6,14.61a1,1,0,0,1,1.29.58A6.44,6.44,0,0,0,13.5,19a7.55,7.55,0,0,0,3.05-.64,1,1,0,0,1,.8,0l2.11.9-.57-2a1,1,0,0,1,.15-.86,4.83,4.83,0,0,0,1-2.87,5.31,5.31,0,0,0-2.68-4.44,1,1,0,0,1,1.06-1.7A7.28,7.28,0,0,1,22,13.5a6.82,6.82,0,0,1-1.06,3.63l1,3.6a1,1,0,0,1-.3,1A1,1,0,0,1,21,22Z" style={{fill:'#231f20'}} ></path></svg>)
        
    },
    {
      name : 'Problem-solving',
      icon : (<svg className='hover:scale-105 cursor-pointer' width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><line x1="50.4" y1="24.38" x2="58.3" y2="23.14"/><line x1="47.93" y1="17.11" x2="52.87" y2="14.2"/><line x1="42.89" y1="11.73" x2="46.21" y2="4.51"/><line x1="33.45" y1="10.69" x2="33.41" y2="4.96"/><line x1="24.29" y1="12.09" x2="21.62" y2="4.51"/><line x1="17.99" y1="17.03" x2="12.96" y2="14.29"/><line x1="15.78" y1="23.97" x2="8.03" y2="22.66"/><path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3"/><path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3"/><rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12"/><rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12"/><path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84"/><path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11"/></svg>)
      
    },
    {
      name : 'Adaptability',
      icon : (<svg className='hover:scale-105 cursor-pointer' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5ZM15.1466 5.07115C15.5376 3.86894 16.6673 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9C16.7244 9 15.6347 8.20384 15.2008 7.08132C10.9961 7.67896 7.67896 10.9961 7.08132 15.2008C8.20384 15.6347 9 16.7244 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.6673 3.86894 15.5376 5.07115 15.1466C5.71346 9.87853 9.87853 5.71347 15.1466 5.07115ZM6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17Z" fill="#000000"/>
      </svg>)
      
    },
    {
      name : 'Analytical thinking',
      icon : (<svg className='hover:scale-105 cursor-pointer' width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path className="text-black" d="M26.93,28.63c0-.05-1.93-4.85-1.93-7.63a7,7,0,0,1,.74-2.9A14.43,14.43,0,0,0,27,12C27,6.21,22.37,2,16,2,10.18,2,6.28,4.75,5,9.76a10.43,10.43,0,0,0-.1,5.14L3.27,18.14a2,2,0,0,0,1,2.57,3.69,3.69,0,0,0,.87.23L6,25.14a1.87,1.87,0,0,0,.55,1.09A3.6,3.6,0,0,0,9.2,27a2.45,2.45,0,0,1,1.79.47,1,1,0,0,1,.31.36l.81,1.62a1,1,0,1,0,1.78-.9l-.8-1.61a3.16,3.16,0,0,0-.9-1.08,4.5,4.5,0,0,0-3-.86A2,2,0,0,1,8,24.81H8l-1-5A1,1,0,0,0,6,19a2.49,2.49,0,0,1-.87-.12l1.76-3.42a1,1,0,0,0,0-.83,7.94,7.94,0,0,1,0-4.39C8,6.16,11.11,4,16,4c5.21,0,9,3.36,9,8a12.41,12.41,0,0,1-1.11,5.34A8.81,8.81,0,0,0,23,21c0,3.16,2,8.16,2.07,8.37A1,1,0,0,0,26,30a1,1,0,0,0,.37-.07A1,1,0,0,0,26.93,28.63Z"/><circle className="text-black" cx="16" cy="13" r="2"/><path className="cls-1" d="M23.5,12.72a2,2,0,0,0-1.37-1.9l-.48-.16.22-.45a2,2,0,0,0-.37-2.32l-.39-.39a2,2,0,0,0-2.31-.37l-.46.22-.16-.48a2,2,0,0,0-1.9-1.37h-.56a2,2,0,0,0-1.9,1.37l-.16.48-.45-.22a2,2,0,0,0-2.32.37l-.39.39a2,2,0,0,0-.37,2.31l.22.46-.48.16a2,2,0,0,0-1.37,1.9v.56a2,2,0,0,0,1.37,1.9l.48.16-.22.45a2,2,0,0,0,.37,2.32l.39.39a2,2,0,0,0,2.31.38l.46-.23.16.48a2,2,0,0,0,1.9,1.37h.56a2,2,0,0,0,1.9-1.37l.16-.48.45.22a2,2,0,0,0,2.32-.37l.39-.39a2,2,0,0,0,.38-2.31l-.23-.46.48-.16a2,2,0,0,0,1.37-1.9Zm-2,.56-1.33.44a1,1,0,0,0-.63.61,2.6,2.6,0,0,1-.1.25,1,1,0,0,0,0,.86l.63,1.25-.4.4-1.25-.63a1,1,0,0,0-.86,0l-.25.1a1,1,0,0,0-.61.63l-.44,1.33h-.56l-.44-1.33a1,1,0,0,0-.61-.63l-.25-.1a1,1,0,0,0-.41-.08,1,1,0,0,0-.45.1l-1.25.63-.4-.4.63-1.25a1,1,0,0,0,0-.86,2.6,2.6,0,0,1-.1-.25,1,1,0,0,0-.63-.61l-1.33-.44v-.56l1.33-.44a1,1,0,0,0,.63-.61,2.6,2.6,0,0,1,.1-.25,1,1,0,0,0,0-.86l-.63-1.25.4-.4,1.25.63a1,1,0,0,0,.86,0l.25-.1a1,1,0,0,0,.61-.63l.44-1.33h.56l.44,1.33a1,1,0,0,0,.61.63l.25.1a1,1,0,0,0,.86,0l1.25-.63.4.4-.63,1.25a1,1,0,0,0,0,.86,2.6,2.6,0,0,1,.1.25,1,1,0,0,0,.63.61l1.33.44Z"/></svg>)
      
    }
  ],
  projects : [
    {
      id:39450,
      title : "Movie Similarity Prediction Using NLP and K-Means Clustering",
      tags  : ['Data & AI'],
      date : 'Jan,2024',
      fullDescription:`In this project, I used Natural Language Processing (NLP) and K-Means Clustering to predict movie similarities. By analyzing the plot summaries and other textual data of movies, the model clusters similar movies together, helping users find movies with related content and themes.`,
      images: [
        "/Images/yolo/movie.jpg",
      ],
      typeWork : 'Individual Work ',
      techUsed : ['Python','NLP','Machine Learning'],
    },{
      id:3987,
      title : "Twitter Sentiment Analysis Model Using NLP and Machine Learning",
      tags  : ['Data & AI'],
      date : 'Jan,2024',
      fullDescription:`In this project, I built a Twitter sentiment analysis model using Natural Language Processing (NLP) and machine learning techniques. The model analyzes tweets to determine the sentiment (positive, negative, or neutral), providing insights into public opinions and trends on various topics.`,
      images: [
        "/Images/yolo/twitter.jpg",
      ],
      typeWork : 'Individual Work ',
      techUsed : ['Python','NLP','Machine Learning'],
    },
    {
      id:13455,
      title : "Real-time person detection and face identification system using YOLO and CNN",
      tags  : ['Data & AI'],
      date : 'Dec,2024',
      fullDescription:`In this project, I collected facial data of six actors from various scenes in a TV show. Using YOLO (You Only Look Once) to detect the person, I then extracted the face from the detected region. Finally, I identified the actors using a Convolutional Neural Network (CNN) model for face recognition.`,
      images: [
        "/Images/yolo/friends.png",
      ],
      typeWork : 'Individual Work ',
      techUsed : ['Python','Tensorflow','OpenCV','YOLO','CNN'],
    },
    {
      id:59634,
      title : "Migrating a Laravel-based Gestion Syndic Application to Next.js",
      tags  : ['Development'],
      date : 'Sep,2023 ',
      fullDescription : "I successfully migrated an application from Laravel to Next.js, leveraging Next.js as the comprehensive framework for front-end and back-end development. To ensure a secure connection with a PostgreSQL database, I seamlessly integrated Prisma. Furthermore, I implemented authentication using NextAuth.js, along with incorporating additional Node.js libraries to enhance various functionalities within the application. This migration not only streamlined the development process but also fortified the application's security and expanded its capabilities through the integration of various powerful libraries.",
      images : [
        '/Images/gsyndic/1.png',
        '/Images/gsyndic/2.png',
        '/Images/gsyndic/3.png',
        '/Images/gsyndic/4.png',
      ],
      techUsed : ['Nextjs','TypeScript','Prisma','NextAuth','Redux-Toolkit'],
      typeWork : 'Individual Work ' 
    },
    {
      id:32509,
      title : "Personal Portfolio built with Next.js and Tailwind CSS",
      tags  : ['Development'],
      date : 'July,2023',
      fullDescription : "The website was developed using Next.js and Tailwind CSS by Ayoub Boudra. It is hosted on Vercel.",
      images : [
        '/Images/portfolio/1.png',
        '/Images/portfolio/2.png',
        '/Images/portfolio/3.png',
    
      ],
      techUsed : ['Nextjs','TypeScript',],
      typeWork : 'Individual Work ' 
    },
    {
      id:43209,
      title : "Exploring Car Price Data in Morocco: Collection and Cleaning",
      tags  : ['Data & AI'],
      date : 'June,2023',
      fullDescription : "Car Price Prediction: Collecting car data from multiple sources, cleaning and visualizing a dataset of around 10,000 samples, and utilizing a decision tree algorithm to create a model for predicting car prices.",
      images : [
        '/Images/car.png',


      ],
      techUsed : ['Python','BeautifulSoup','Google Colab','Pandas','Matplotlib','Skitlearn'],
      typeWork : 'Individual Work ' 
    },
    {
      id:0,
      title : "Clustering for Effective Customer Segmentation and Dataset Analysis",
      tags  : ['Data & AI'],
      date : 'June,2023',
      fullDescription : "In this project, I began by working with a customer selling dataset. After cleaning the data, my focus shifted towards clustering the clients using various clustering algorithms. The goal was to group similar clients together based on their purchasing patterns and behaviors. By applying these clustering techniques, I aimed to uncover hidden information and gain insights into customer segmentation and preferences within the dataset. This analysis provides valuable knowledge that can be utilized for targeted marketing strategies and personalized customer experiences.",
      images : [
        '/Images/customerSegmentation.jpg',


      ],
      techUsed : ['Python','PyQT','OpenCV'],
      typeWork : 'Individual Work ' 
    },
    {
      id: 2,
      title: "Colon Disease Detection with PySpark MLlib",
      tags: ['Big Data', 'Healthcare', 'Machine Learning'],
      date: '2023',
      fullDescription: "This project aimed to detect colon diseases using PySpark MLlib for processing and analyzing large medical datasets. Steps included data collection, cleaning, and visualization to identify key trends. Machine learning models were then trained to predict the presence of colon diseases, providing accurate results and enabling clear visualizations to enhance data understanding.",
      images: [
        '/Images/pyspark_maladie_coloniane.png',
      ],
      techUsed: ['PySpark', 'MLlib', 'Data Visualization', 'Python'],
      typeWork: 'Team Work'
    },    
    {
      id:1,
      title : "Facial-Based Age and Gender Detection",
      tags  : ['Data & AI'],
      date : 'April,2023',
      fullDescription : "This project involved collecting and cleaning a dataset of over 25,000 facial images. We conducted experiments with different models to achieve optimal results for facial analysis tasks such as age and gender detection. Finally, we successfully implemented the chosen model into a web application for practical usage.",
      images : [
        '/Images/GenderAge/sddefault.jpg',
        '/Images/GenderAge/2.png',
        '/Images/GenderAge/3.png',


      ],
      techUsed : ['Python','Scikit-learn','OpenCV','Numpy'],
      typeWork : 'Team Work' 
    },
    {
      id:3,
      title : "Simple Image Processing Desktop Application",
      tags  : ['Data & AI'],
      date : 'April,2022',
      fullDescription : "This desktop application is specifically designed for image processing tasks, allowing users to apply various filters and perform basic editing operations such as rotation, cropping, and selection. It was developed using pyQT, a Python framework for creating graphical user interfaces, and leverages the powerful filtering functions provided by OpenCV. With this application, users can enhance and manipulate images by applying a wide range of filters available in OpenCV, resulting in visually appealing and customized outputs.",
      images : [
        '/Images/ImgProc/1.png',
        '/Images/ImgProc/2.png',
        '/Images/ImgProc/3.png',
        '/Images/ImgProc/4.png',

      ],
      techUsed : ['Python','PyQT','OpenCV'],
      typeWork : 'Team Work ' 
    },
    {
      id:4,
      title : "Resource Management",
      tags  : ['Development'],
      date : 'April,2022',
      fullDescription : "This website, developed using Next.js and Spring Boot, is designed for efficient management of stock, orders, suppliers, and repair requests. The development process involved utilizing UML diagrams for the initial design and adopting Scrumwise for effective team management. The website serves as a comprehensive solution, providing capabilities to track and manage inventory, process orders, handle supplier relationships, and efficiently manage repair requests.",
      images : [
        '/Images/no-image-available.jpg',
      ],
      techUsed : ['Spring Boot','Spring Security','JWT','NextJS','Scrum-wise','UML','MySQL'],
      typeWork : 'Team Work' 
    },
    {
      id:5,
      title : "E-commerce Website for Computer Equipment using JEE",
      tags  : ['Development'],
      date : 'Dec,2021',
      fullDescription : "This e-commerce website, built using Java Enterprise Edition (JEE), serves as an online platform for selling computer machines. In addition to the customer-facing frontend, it includes an administrative section. The admin side allows authorized users to efficiently manage orders and products. This feature empowers administrators to handle order processing, inventory management, and product updates, ensuring smooth operations of the e-commerce business.",
      images : [
        '/Images/no-image-available.jpg',
      ],
      techUsed : ['Java','JEE','MySql','N-tier architecture'],
      typeWork : 'Individual Work ' 
    },
    {
      id:98765,
      title : "Weather Application with Angular and Weather API",
      tags  : ['Development'],
      date : 'July,2021',
      fullDescription : "The Weather Application is a responsive Angular application that allows users to search for a city and retrieve the current weather information for that location. Powered by a free weather API's RESTful interface, the application seamlessly integrates with the API to fetch real-time weather data. Users can simply enter the desired city name in the search bar, and the application dynamically displays the current weather conditions, including temperature, humidity, wind speed, and more. With its user-friendly interface and reliable data source, the Weather Application provides an intuitive way to stay updated on the weather conditions of any desired city.",
      images : [
        '/Images/weather/1.png',
        '/Images/weather/2.png',
        '/Images/weather/3.png',

      ],
      techUsed : ['Java','JEE','MySql','N-tier architecture'],
      typeWork : 'Individual Work ' 
    },
    {
      id:6,
      title : "Resource management for a leather company",
      tags  : ['Development'],
      date : 'May,2021 - Juin,2021',
      fullDescription : "A compact application built with Next.js, Spring Boot, and other technologies specifically designed for an international leather company. It effectively manages stock, client transactions, orders, suppliers, and other essential operations.",
      images : [
        '/Images/gescom/1.png',
        '/Images/gescom/2.png',
        '/Images/gescom/3.png',
        '/Images/gescom/4.png',
        '/Images/gescom/5.png',
      ],
      techUsed : ['NextJS','Redux-Toolkit','TypeScript','Spring Boot','Keyclock','Next-Auth','JWT','PostgreSQL','Jira'],
      typeWork : 'Team Work' 
    },
    {
      id:7,
      title : ' Library Management Application with JAVA Swing',
      tags  : ['Development'],
      date : 'Mars,2021',
      fullDescription : " library management application developed using JAVA Swing. UML models, including class diagrams and activity diagrams..., MySQL as the database, and JDBC for database interaction. The application provides advanced features, including book return management, book search, and more.",
      images : [
        '/Images/swing/1.png',
        '/Images/swing/2.png',
        '/Images/swing/3.png',
        '/Images/swing/4.png',
      ],
      techUsed : ['Java','Java Swing','UML','MySql'],
      typeWork : 'Team Work' 
    },
    {
      id:8,
      title : 'United States - Tourism and News Website',
      date : 'Dec,2020',
      tags  : ['Development'],
      fullDescription : 'web platform that provides detailed information about the United States as a tourist destination. With insights into diverse attractions, culture, landmarks, and more, it serves as a valuable resource for travelers. Stay updated with the latest events and developments through the dedicated news section. The admin panel ensures effortless content management, keeping tourist information current and enabling the addition of new attractions and timely news articles.',
      images : [
        '/Images/Blog/1.png',
        '/Images/Blog/2.png',
        '/Images/Blog/3.png',

      ],
      techUsed : ['HTML','CSS','JavaScript','PHP','MySql'],
      typeWork : 'Individual Work ' 
    },

  ],
  footerDescription : "The website was developed using Next.js and Tailwind CSS by Ayoub Boudra. It is hosted on Vercel."
}
