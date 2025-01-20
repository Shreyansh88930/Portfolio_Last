// eslint-disable-next-line no-unused-vars
import React from 'react';
import avator_2 from "../assets/avator_2.jpg";
import { motion } from "framer-motion"; // Corrected import for motion
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="about" className='text-white py-16 bg-gradient-to-b from-gray-900 to-black'>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center leading-relaxed'>
                    I am a final-year B.Tech student in Software Engineering at Delhi Technological University, New Delhi, with a commendable GPA of 8.53. Throughout my academic journey, I have cultivated a strong foundation in software development, data analysis, and web technologies. My passion lies in leveraging technology to solve real-world problems, driving innovation through software engineering, and harnessing data to make informed decisions.
                    
                    I have hands-on experience in developing dynamic, user-centric web applications, integrating backend services, and working with cloud platforms like Firebase. My projects often involve building robust systems that not only meet functional requirements but also excel in performance and scalability.
                    
                    Beyond academics, I actively participate in hackathons, coding challenges, and technical competitions, continuously honing my skills and staying abreast of the latest technological advancements. My involvement in community service and extracurricular activities reflects my commitment to holistic growth and my ability to thrive in collaborative environments.
                </motion.p>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img
                            src={avator_2}
                            alt="Avatar"
                            className="w-2/3 sm:w-1/2 md:w-10/12 rounded-lg shadow-lg" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl leading-relaxed'>
                        As a dedicated software engineer, I bring a blend of technical expertise and creative problem-solving to every project. My focus is on delivering high-quality solutions that drive efficiency and enhance user experiences.
                    </motion.p>
                </div>
                <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        className='text-center'>
                        <h3 className='text-2xl md:text-6xl font-bold md:my-6 text-purple-500'>Skills & Expertise</h3>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.7, duration: 0.5 }}
                            className='flex flex-wrap justify-center'>
                            {[
                                'C', 'C++', 'React.js', 'Firebase', 'JavaScript', 'HTML', 'CSS',
                                'Node.js', 'Data Structures', 'Algorithms', 'Git', 'GitHub',
                                'Leaflet', 'Bootstrap', 'Python', 'Tailwind CSS', 'MySQL', 'Tableau'
                            ].map(skill => (
                                <span key={skill} className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full m-2">{skill}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className='text-center'>
                        <h3 className='text-2xl md:text-6xl font-bold md:my-6 text-purple-500'>Achievements & Awards</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>
                            <ul className='list-disc list-inside'>
                                <li>Academic Excellence: B.Tech GPA of 8.53</li>
                                <li>Received a certificate of academic excellence for scoring 95.8% in Class XII from the government</li>
                                <li>Achieved Grade 5 in drums from Trinity College London</li>
                                <li>Leadership: Mentored peers in software development projects</li>
                            </ul>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
