
// 'Data Science',
// 'Data Analysis',
// 'Data Engineering',
// 'Development',

export const myProjects =[
    {
        "id": 874120,
        "title": "Plateforme de Données Entièrement Serverless",
        "tags": ["Data Engineering", "Data Analysis"],
        "date": "Feb,2025 (Working on it)",
        "fullDescription": "Mise en place d'une infrastructure serverless sur AWS pour l'ingestion et l'analyse de données de mobilité urbaine. Déploiement de pipelines de données avec AWS Lambda, Step Functions et S3. Utilisation de Snowflake comme entrepôt de données et création de dashboards de suivi avec Metabase. Automatisation et supervision de la plateforme via Terraform.",
        "images": ["/Images/serverless_platform.png"],
        "typeWork": "Individual Work",
        "techUsed": ["AWS Lambda", "Step Functions", "S3", "Snowflake", "Metabase", "Terraform"]
      },
      {
        "id": 491237,
        "title": "Système de Détection de Fraude en Temps Réel",
        "tags": ["Data Science", "Data Engineering", "Data Analysis"],
        "date": "Mar,2024",
        "fullDescription": "Système de détection de fraude en temps réel avec Apache Spark et modèles de machine learning. Pipelines ETL et modèles (Random Forest, XGBoost, Isolation Forest) pour la détection d'anomalies. Déploiement des modèles en temps réel via MLflow. Tableaux de bord Power BI/Tableau pour le suivi des détections et alertes.",
        "images": ["/Images/Fraud_Detection.png"],
        "typeWork": "Team Work",
        "techUsed": ["Apache Spark", "MLflow", "Random Forest", "XGBoost", "Isolation Forest", "Power BI", "Tableau"]
      },
      {
        "id": 725834,
        "title": "Application d'Aide à l'Obtention de Subventions Utilisant l'IA",
        "tags": ["Data Science", "Development"],
        "date": "Feb,2024",
        "fullDescription": "Développement d'une application web IA pour simplifier la gestion des subventions. Intégration de LLMs pour la génération automatique de contenu et analyse de données. Automatisation de la collecte de données via API pour une précision accrue. Gestion de projet en méthode Kanban pour assurer la coordination et livraison des jalons.",
        "images": ["/Images/GrantGenie/1.png", "/Images/GrantGenie/2.png", "/Images/GrantGenie/3.png"],
        "typeWork": "Team Work",
        "techUsed": ["Python", "OpenAI", "HuggingFace", "MongoDB", "Kanban"]
      },
    {
      id:39450,
      title : "Movie Similarity Prediction Using NLP and K-Means Clustering",
      tags  : ['Data Science', 'Data Analysis'],
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
      tags  : ['Data Science', 'Data Analysis'],
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
      tags  : ['Data Science'],
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
      tags  : ['Data Analysis'],
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
      tags  : ['Data Science', 'Data Analysis'],
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
      tags: ['Data Science', 'Data Engineering'],
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
      tags  : ['Data Science'],
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
      tags  : ['Development','Data Science'],
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
      techUsed : ['Angular','Rest-API'],
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

  ]