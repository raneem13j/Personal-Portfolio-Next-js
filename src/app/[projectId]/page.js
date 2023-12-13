"use client"
import React, { use } from 'react';
import ProjectDetails from "@/component/ProjectDetails";


const projectsData = [
    {
        id: '0',
        title: 'Chreif Outlet',
        details: 'E-commerce home appliance website built with Wordpress',
        imageArray: ['/chrif1.png','/chrif2.png', '/chrif3.png', '/chrif4.png'],
        deployed: 'https://group15.codi-wordpress.com/b09-group15',
        videoDemo: 'https://drive.google.com/file/d/1QTOPJrKXDfamfVqqfd7NGe6mxAhv-at_/view?usp=sharing',
        moreDetails: 'Chreif Outlet is a dynamic e-commerce website developed using Wordpress. It offers a diverse selection of categories, each housing a wide range of products with various sizes, colors, and quantities. Customers can easily browse and search for their preferred homa appliance, adding them to their cart. To complete the order, a simple registration process is required. This includes overseeing orders, updating product details, and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient order management, making it a seamless hub for online shopping.'

    },
    {
        id: '1',
        title: 'JONCO-MET',
        details: 'Solar & Safety control films portfolio website built with MERN Stack',
        imageArray: ['/joncomed1.png','/joncomed2.png', '/joncomed3.png', '/jincomed4.png'],
        deployed: 'https://jonco-met.surge.sh/',
        videoDemo: 'https://drive.google.com/file/d/1hqdF5ypBG0wlEq9yfgaS3IgB4cBD7kTL/view?usp=sharing',
        moreDetails: ' JONCO-MET is a dynamic company portfolio website developed using the MERN stack. Jonco introduced the installation of Solar & Safety control films in Lebanon. The admin, accessible through authorized login, manages the platform. This includes overseeing cliens, updating services and projects details,sitting contact information and enhancing site descriptions.'


    },
    {
        id: '2',
        title: 'Learning Management System',
        details: 'LMS website built with LAMP Stack',
        imageArray: ['/lms1.png','/lms2.png', '/lms3.png', '/lms4.png'],
        videoDemo: 'https://drive.google.com/file/d/1qMo-cDiPQNZxZ3pQg-GrjA-0giNUYGuO/view?usp=sharing',
        moreDetails: 'Introducing a comprehensive Learning Management System app developed using ReactJS and React Native for the frontend, paired with Laravel (PHP) for the backend. This system offers robust authentication and authorization features, along with a flexible dashboard catering to diverse user roles and their respective privileges. The user roles encompass \'admin\' and \'super admin\', each empowered with distinct rights. The system seamlessly integrates classes, courses, teachers, and students. This entails assigning teachers to specific courses and classes, enrolling students in designated grade sections, and simplifying attendance management for targeted sections. The latter includes generating daily reports to monitor attendance trends effectively.'

    },
    {
        id: '3',
        title: 'CARDSY',
        details: 'Flshcards Education website built with MERN Stack',
        imageArray: ['/cardsy1.png','/cardsy2.png', '/cardsy3.png', '/cardsy4.png'],
        deployed: 'https://mycardsy.netlify.app/',
        videoDemo: 'https://drive.google.com/file/d/13jOajlnzyS1VULfbsFXM2nnUxAwk_vfi/view?usp=sharing' ,
        moreDetails: 'Revolutionize your learning experience with our innovative education app – a dynamic fusion of a flashcard website and social media platform. Dive into a world where users can seamlessly log in, explore a vast array of flashcards, contribute their own, and engage socially by liking, disliking, and following topics. Elevate your study routine, connect with like-minded learners, and curate your personalized knowledge hub with the power to save flashcards for future reference.'

    },
    {
        id: '4',
        title: 'Zone Outlet',
        details: 'E-commerce home appliance website built with MERN Stack',
        imageArray: ['/zone1.png','/zone2.png', '/zone3.png', '/zone4.png'],
        deployed: 'https://zoneoutlet00.netlify.app/',
        videoDemo:'https://drive.google.com/file/d/1FvwHwgnTAGjKBwFsC_Y2fqkBCuUQRXtx/view?usp=sharing',
        moreDetails: 'Zone Outlet is a dynamic e-commerce clothes website developed using the MERN stack. It offers a diverse selection of categories, each housing a wide range of products with various sizes, colors, and quantities. Customers can easily browse and search for their preferred, adding them to their cart. To complete the order, a simple registration process is required. The admin, accessible through authorized login, manages the platform. This includes overseeing orders, updating product details, and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient order management, making it a seamless hub for online shopping.'

    },
    {
        id: '5',
        title: 'My Portfolio',
        details: 'Portfolio built with Nextjs',
        imageArray: ['/portfolio1.png','/portfolio2.png', '/portfolio3.png', '/portfolio4.png'],
        moreDetails: 'I made my first project using Next.js to learn new technology. It\'s a portfolio where I share my recent projects with pictures and explanations.I also talk about my skills in coding and a bit about myself.In addition to a section that summarizes my experience and education.You can also get my CV to see my skills, links, work experiences, and education.'

    },
];

async function getProjectById(id) {
  // Simulating an asynchronous operation to fetch project data
  return projectsData.find(project => project.id === id);
}



export default function ProjectDetail({params, searchParams}) {
  const productId = params.projectId
// Check if id is available before using it
const projectSelected = use(getProjectById(productId));
return (
  <div>
    {projectSelected ? (
      <ProjectDetails data={projectSelected} />
    ) : (
      <p>Project not found</p>
    )}
  </div>
);
}