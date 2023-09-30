import Image from 'next/image'

export const myInfo = {
  fullName: 'AYOUB BOUDRA',
  myEmail: 'ayoub.boudra1@gmail.com',
  myPhone : '+212632697321',
  smallDescription:
    "I am a junior Web Developer  and Data Scientist passionate about continuous learning and exploring emerging technologies.",
  myImagePath: '/Images/profile.jpg',
  descriptionAboutMe:
    <>
    I am currently pursuing a master&rsquo;s degree in <i className='text-yellow-400'>Data Science and Intelligent Systems</i> at the Faculty of Science and Technologies Fes. 
         <br />
         <br />
         I possess strong analytical skills and enjoy solving problems creatively. I am adaptable and open to new challenges, always seeking opportunities for personal and professional growth.
         <br/>
         <br></br>
        I have developed valuable skills that allow me to work well within teams and advance in my career.
    </>,
  myExperience: [
    {
      title: 'DEUST degree in Mathematics, Physics, and Computer Science.', 
      location : 'Faculty Of Science And Technology',
      date: '2018 , 2021',
      description:
        "The degree program provides a comprehensive education in mathematics, physics, and computer science, equipping me with essential skills in these domains.",
    },
    {
      title: "Bachelor's degree in Computer Science.",
      location : 'Faculty Of Science And Technology',
      date: '2021, 2022',
      description:
        'This degree has provided me with a fundamental understanding of computer science and its basic concepts. It has equipped me with essential skills in various areas of computer science, allowing me to grasp the foundational principles and concepts in the field.',
    },
    {
      title: 'Internship as a Full-stack Web Developer.',
      location : 'INNOV-DS',
      date: '1-April-2021, 1-July-2021',
      description:
        'I gained valuable skills in Next.js, TypeScript, Tailwind CSS, and Java Spring Boot. I also learned how to effectively manage teamwork using Scrum methodologies and work with RESTful APIs.',
    },
    {
      title: "Master's in Data Science & Intelligent Systems.",
      location : 'Faculty Of Science And Technology',
      date: '2022, Today',
      description:
        "provides a strong foundation in essential aspects of data science and artificial intelligence. It covers topics like machine learning, knowledge engineering, and analyzing large datasets. The program also includes modules focused on development, offering practical skills in software development.",
    },
    {
      title: "Freelance as JavaScript Full-stack Web Developer.",
      location : '',
      date: '1-Sep-2021, 1-Oct-2023',
      description:
        "Converted a web application developed in Laravel to a new version built exclusively with Next.js, encompassing both the frontend and backend development. Leveraged Prisma to enhance the backend functionality.",
    },
  ],
  areasOfInterst: [
    {
      title: 'Web Development',
      description:"I am passionate about web development because of its dynamic nature and the ability to bring ideas to life online. The evolving web technologies and the potential to create engaging user experiences greatly interest me.",
      icon: (
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>
      ),
    },
    {
      title: 'Data Science',
      description:
       "I am passionate about data science due to its dynamic nature and its ability to unlock valuable insights from vast amounts of data. The evolving field of data science and the potential to extract meaningful information greatly intrigue me.",
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
      description:
       "I am passionate about artificial intelligence (AI) due to its dynamic nature and its ability to revolutionize various industries. The evolving field of AI and its potential to tackle complex problems and drive innovation greatly intrigue me.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-8 h-8 text-primary-600 lg:w-12 lg:h-12 hover:text-black text-yellow-400 cursor-pointer">
          <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
        </svg>
      ),
    },

  ],
  technicalSkillsLeft: [
    {
      skillName: 'HTML, CSS',
      percentage: '75%',
    },
    {
      skillName: 'Bootstrap ,TailwindCss',
      percentage: '75%',
    },
    {
      skillName: 'JavaScript , TypeScript',
      percentage: '75%',
    },
    {
      skillName: 'C/C++',
      percentage: '75%',
    },
    {
      skillName: 'Python (Data science , ML ,DeepLearning ,Data visualisation)',
      percentage: '75%',
    },
    {
      skillName: 'Java/JEE/Spring Boot',
      percentage: '90%',
    },
  ],
  technicalSkillsRight: [
    {
      skillName: 'MYSQL',
      percentage: '75%',
    },
    {
      skillName: 'NOSQL(RDIS, MONGODB, CASSANDRA, HBASE & NEO4J)',
      percentage: '75%',
    },
    {
      skillName: 'GIT/GITHUB & JENKINS',
      percentage: '75%',
    },
    {
      skillName: 'MERISE & UML',
      percentage: '75%',
    },
    {
      skillName: 'HADOOP ECOSYSTEM',
      percentage: '75%',
    },
    {
      skillName: 'BUSINESS INTELLIGENCE',
      percentage: '90%',
    },
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
      name: 'Frensh',
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5ZM15.1466 5.07115C15.5376 3.86894 16.6673 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9C16.7244 9 15.6347 8.20384 15.2008 7.08132C10.9961 7.67896 7.67896 10.9961 7.08132 15.2008C8.20384 15.6347 9 16.7244 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.6673 3.86894 15.5376 5.07115 15.1466C5.71346 9.87853 9.87853 5.71347 15.1466 5.07115ZM6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17Z" fill="#000000"/>
      </svg>)
      
    },
    {
      name : 'Analytical thinking',
      icon : (<svg className='hover:scale-105 cursor-pointer' width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path className="text-black" d="M26.93,28.63c0-.05-1.93-4.85-1.93-7.63a7,7,0,0,1,.74-2.9A14.43,14.43,0,0,0,27,12C27,6.21,22.37,2,16,2,10.18,2,6.28,4.75,5,9.76a10.43,10.43,0,0,0-.1,5.14L3.27,18.14a2,2,0,0,0,1,2.57,3.69,3.69,0,0,0,.87.23L6,25.14a1.87,1.87,0,0,0,.55,1.09A3.6,3.6,0,0,0,9.2,27a2.45,2.45,0,0,1,1.79.47,1,1,0,0,1,.31.36l.81,1.62a1,1,0,1,0,1.78-.9l-.8-1.61a3.16,3.16,0,0,0-.9-1.08,4.5,4.5,0,0,0-3-.86A2,2,0,0,1,8,24.81H8l-1-5A1,1,0,0,0,6,19a2.49,2.49,0,0,1-.87-.12l1.76-3.42a1,1,0,0,0,0-.83,7.94,7.94,0,0,1,0-4.39C8,6.16,11.11,4,16,4c5.21,0,9,3.36,9,8a12.41,12.41,0,0,1-1.11,5.34A8.81,8.81,0,0,0,23,21c0,3.16,2,8.16,2.07,8.37A1,1,0,0,0,26,30a1,1,0,0,0,.37-.07A1,1,0,0,0,26.93,28.63Z"/><circle className="text-black" cx="16" cy="13" r="2"/><path className="cls-1" d="M23.5,12.72a2,2,0,0,0-1.37-1.9l-.48-.16.22-.45a2,2,0,0,0-.37-2.32l-.39-.39a2,2,0,0,0-2.31-.37l-.46.22-.16-.48a2,2,0,0,0-1.9-1.37h-.56a2,2,0,0,0-1.9,1.37l-.16.48-.45-.22a2,2,0,0,0-2.32.37l-.39.39a2,2,0,0,0-.37,2.31l.22.46-.48.16a2,2,0,0,0-1.37,1.9v.56a2,2,0,0,0,1.37,1.9l.48.16-.22.45a2,2,0,0,0,.37,2.32l.39.39a2,2,0,0,0,2.31.38l.46-.23.16.48a2,2,0,0,0,1.9,1.37h.56a2,2,0,0,0,1.9-1.37l.16-.48.45.22a2,2,0,0,0,2.32-.37l.39-.39a2,2,0,0,0,.38-2.31l-.23-.46.48-.16a2,2,0,0,0,1.37-1.9Zm-2,.56-1.33.44a1,1,0,0,0-.63.61,2.6,2.6,0,0,1-.1.25,1,1,0,0,0,0,.86l.63,1.25-.4.4-1.25-.63a1,1,0,0,0-.86,0l-.25.1a1,1,0,0,0-.61.63l-.44,1.33h-.56l-.44-1.33a1,1,0,0,0-.61-.63l-.25-.1a1,1,0,0,0-.41-.08,1,1,0,0,0-.45.1l-1.25.63-.4-.4.63-1.25a1,1,0,0,0,0-.86,2.6,2.6,0,0,1-.1-.25,1,1,0,0,0-.63-.61l-1.33-.44v-.56l1.33-.44a1,1,0,0,0,.63-.61,2.6,2.6,0,0,1,.1-.25,1,1,0,0,0,0-.86l-.63-1.25.4-.4,1.25.63a1,1,0,0,0,.86,0l.25-.1a1,1,0,0,0,.61-.63l.44-1.33h.56l.44,1.33a1,1,0,0,0,.61.63l.25.1a1,1,0,0,0,.86,0l1.25-.63.4.4-.63,1.25a1,1,0,0,0,0,.86,2.6,2.6,0,0,1,.1.25,1,1,0,0,0,.63.61l1.33.44Z"/></svg>)
      
    }
  ],
  projects : [
    {
      id:59634,
      title : "Migrating a Laravel-based Gestion Syndic Application to Next.js",
      tags  : ['Web Application'],
      date : '1-Sep-2023 / 1-Oct-2023',
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
      tags  : ['Web Application'],
      date : '1-Sep-2023 / 1-Oct-2023',
      fullDescription : "",
      images : [
        '/Images/portfolio/1.png',
        '/Images/portfolio/2.png',
        '/Images/portfolio/3.png',
    
      ],
      techUsed : ['Nextjs','TypeScript','Prisma','NextAuth','Redux-Toolkit'],
      typeWork : 'Individual Work ' 
    },
    {
      id:43209,
      title : "Comprehensive Dataset Collection for Moroccan Car Information",
      tags  : ['Machine Learning'],
      date : 'June-2023',
      fullDescription : "",
      images : [
        '/Images/car.png',


      ],
      techUsed : ['Python','BeautifulSoup','Google Colab','Pandas','Matplotlib','Skitlearn'],
      typeWork : 'Individual Work ' 
    },
    {
      id:0,
      title : "Clustering for Effective Customer Segmentation and Dataset Analysis",
      tags  : ['Machine Learning'],
      date : 'June-2023',
      fullDescription : "",
      images : [
        '/Images/customerSegmentation.jpg',


      ],
      techUsed : ['Python','PyQT','OpenCV'],
      typeWork : 'Individual Work ' 
    },
    {
      id:1,
      title : "Age and Gender Detection",
      tags  : ['Machine Learning'],
      date : 'April-2023',
      fullDescription : "",
      images : [
        '/Images/GenderAge/sddefault.jpg',


      ],
      techUsed : ['Python','PyQT','OpenCV'],
      typeWork : 'Team Work' 
    },
    {
      id:3,
      title : "Simple Image Processing Desktop Application",
      tags  : ['Desktop Application','Computer Vision'],
      date : 'April-2022',
      fullDescription : "",
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
      tags  : ['Web Application'],
      date : 'April-2022',
      fullDescription : "",
      images : [
        '/Images/no-image-available.jpg',
      ],
      techUsed : ['Spring Boot','Spring Security','JWT','NextJS','Scrum-wise','UML','MySQL'],
      typeWork : 'Team Work' 
    },
    {
      id:5,
      title : "E-commerce Website for Computer Equipment using JEE",
      tags  : ['Web Application'],
      date : 'Dec-2021',
      fullDescription : "E-commerce website is a robust platform designed for selling computer equipment. Built using Java Enterprise Edition (JEE) and MySQL, the website follows the N-Tier architecture, ensuring scalability, maintainability, and separation of concerns.The website features two distinct sides: the admin side and the user side.",
      images : [
        '/Images/no-image-available.jpg',
      ],
      techUsed : ['Java','JEE','MySql','N-tier architecture'],
      typeWork : 'Individual Work ' 
    },
    {
      id:6,
      title : "Resource management for a leather company",
      tags  : ['Web Application'],
      date : '1-May-2021/1-July-2021',
      fullDescription : "",
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
      tags  : ['Desktop Application'],
      date : 'Mars-2021',
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
      date : 'Dec-2020',
      tags  : ['Web Application'],
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
