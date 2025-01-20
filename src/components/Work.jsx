// eslint-disable-next-line no-unused-vars
import React from 'react';
import project1 from "../assets/logo.png";
import project2 from "../assets/safety.png";
import project3 from "../assets/Medical.jpg";
import project4 from "../assets/ecom.png";
import project5 from "../assets/recipe.png";
import project6 from "../assets/weather.jpeg";
import project7 from "../assets/task.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
    const projects = [
        {
            id: 1,
            title: "Spotify Clone",
            description: "A web-based music streaming application inspired by Spotify, featuring a responsive user interface, navigation bar, list of trending songs, and music player control bar. Built with HTML, CSS, and JavaScript, it demonstrates front-end development and responsive design skills.",
            image: project1,
            link: "https://github.com/Shreyansh88930/Spotify_Clone"
        },
        {
            id: 2,
            title: "Safety Initiative",
            description: "A web application connecting individuals in need with nearby volunteers in real-time, built using HTML, CSS, JavaScript, Bootstrap, Firebase, Node.js, and Express.js. Features real-time help requests, geolocation-based volunteer matching, and secure data management.",
            image: project2,
            link: "https://code-engineers.github.io/Safety_Initiative/"
        },
        {
            id: 3,
            title: "Medical Insurance Price Detection",
            description: "Developed a machine learning model to predict medical insurance prices with 94.02% accuracy using Python libraries like Pandas, Numpy, Matplotlib, Seaborn, and Scikit-learn. The project demonstrates the application of machine learning techniques to solve practical problems.",
            image: project3,
            link: "https://github.com/Shreyansh88930/MedInsurePredictor"
        },
        {
            id: 4,
            title: "E-Commerce Website",
            description: "A full-stack e-commerce website allowing users to browse products, add to cart, and checkout. Built with React.js and Firebase for real-time data management, featuring secure user authentication and smooth shopping experience.",
            image: project4,
            link: "https://github.com/Shreyansh88930/ECommerceWebsite"
        },
        {
            id: 5,
            title: "Recipe Website",
            description: "A recipe website enabling users to search, browse, and save recipes, with filtering options based on ingredients and cuisine. Built with HTML, CSS, JavaScript, and Firebase, providing a seamless experience for cooking enthusiasts.",
            image: project5,
            link: "https://gleaming-babka-826898.netlify.app/"
        },
        {
            id: 6,
            title: "Weather Dashboard",
            description: "A weather dashboard providing real-time updates for any location globally, built with React.js and an external weather API. Showcases skills in API integration and creating user-friendly dashboards.",
            image: project6,
            link: "https://shreyansh88930.github.io/Weather_Dash/"
        },
        {
            id: 7,
            title: "Task Management System",
            description: "A task management system for organizing and completing tasks, built with React, TypeScript, and local storage. Features task tracking and user authentication, designed for a seamless experience without backend services.",
            image: project7,
            link: "https://polite-kangaroo-71af00.netlify.app/"
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="work" className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'
                >
                    My Work
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'
                >
                    Explore my projects where innovation meets functionality, and ideas come to life through code.
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: project.id * 0.1, duration: 0.3 }}
                            key={project.id}
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
                        >
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
                            <div className='p-6'>
                                <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                                <p className='text-slate-400 mb-4'>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>
                                        Details
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;