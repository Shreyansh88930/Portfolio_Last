// eslint-disable-next-line no-unused-vars
import React from 'react';
import avator_2 from "../assets/avator_2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="about" className='text-white py-16 bg-gradient-to-b from-gray-900 to-black'>
            <div className='container mx-auto px-4 text-center'>
                
                {/* Section Title */}
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>
                    About Me
                </motion.h2>
                
                {/* Intro Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center leading-relaxed'>
                    I am a final-year B.Tech student in <span className="text-purple-400 font-semibold">Software Engineering</span> at 
                    Delhi Technological University, New Delhi, maintaining a GPA of <span className="font-semibold">8.96</span>. 
                    I specialize in full-stack web development, AI-driven applications, and data visualization.
                    My work blends robust software architecture with intuitive user experiences, ensuring high performance and scalability.
                    <br /><br />
                    I have built projects involving <span className="text-purple-400">React.js, TypeScript, Node.js, Tailwind CSS, Firebase, and AI-powered features</span>. 
                    My development approach emphasizes clean, reusable code and modern UI/UX practices. 
                    Alongside academics, I participate in hackathons, open-source contributions, and technical competitions, 
                    which keep me ahead of the curve in the rapidly evolving tech industry.
                </motion.p>
                
                {/* Profile Image + Side Paragraph */}
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
                        My focus is on crafting intelligent, scalable, and aesthetically pleasing software solutions. 
                        Whether it’s a responsive dashboard, AI-powered automation, or advanced analytics, I approach 
                        each project with precision, creativity, and a passion for solving real-world problems.
                    </motion.p>
                </div>

                {/* Skills & Achievements */}
                <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
                    
                    {/* Skills */}
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
                                'C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'React.js', 'Node.js',
                                'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS', 'Firebase', 'MySQL',
                                'Data Structures', 'Algorithms', 'Git', 'GitHub', 'Tableau', 'Leaflet.js',
                                'Framer Motion', 'REST APIs', 'Mongo DB', 'Express.js', 'AI/ML Basics'
                            ].map(skill => (
                                <span key={skill} className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full m-2">{skill}</span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className='text-center'>
                        <h3 className='text-2xl md:text-6xl font-bold md:my-6 text-purple-500'>Achievements & Awards</h3>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>
                            <ul className='list-disc list-inside space-y-2'>
                                <li>B.Tech GPA of 8.96 (Top 10% of the batch)</li>
                                <li>Microsoft Certified in <span className="text-purple-400">Introduction to Generative AI Concepts</span> (Aug 2025)</li>
                                <li>Certificate of Academic Excellence for scoring 95.8% in Class XII (Govt. of India)</li>
                                <li>Achieved Grade 5 in drums from Trinity College London</li>
                                <li>Mentored peers in software development projects and guided junior developers</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
