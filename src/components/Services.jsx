// eslint-disable-next-line no-unused-vars
import React from 'react'
import{FaAppStore} from "react-icons/fa"
import{motion} from "motion/react"
import{useInView} from "react-intersection-observer"

const Services = () => {
    const servicesData = [
        {
          title: "Web Development",
          description: (
            <>
              <p>With a strong background in HTML, CSS, JavaScript, and Firebase, I design and develop dynamic, responsive websites. My projects, such as the Spotify Clone and Safety Initiative, showcase my ability to create interactive and user-friendly web applications that meet user needs.</p>
              <p><strong>Key Skills:</strong> HTML, CSS, JavaScript, Firebase, Responsive Web Design, User Experience</p>
            </>
          ),
        },
        {
          title: "Community Safety Solutions",
          description: (
            <>
              <p>I developed a Safety Initiative platform that connects volunteers with individuals in need, using real-time data from Firebase. My expertise in location-based services has led to a 20% improvement in volunteer assignment efficiency.</p>
              <p><strong>Key Skills:</strong> Firebase Database, Real-Time Data, Location-Based Services, User Authentication</p>
            </>
          ),
        },
        {
          title: "Data Analytics",
          description: (
            <>
              <p>I have experience analyzing data through tools like Tableau and Excel. In my Tata Consultancy Services Job Simulation, I optimized SQL queries to improve query response times by 15%, demonstrating my skills in data visualization and SQL optimization.</p>
              <p><strong>Key Skills:</strong> Tableau, SQL, Data Visualization, Data Analysis, Query Optimization</p>
            </>
          ),
        },
        {
          title: "UI/UX Design",
          description: (
            <>
              <p>My experience extends to creating intuitive, user-friendly interfaces, such as the ones in the Spotify Clone. I focus on enhancing user experience by applying design principles and responsive design practices to ensure accessibility and engagement.</p>
              <p><strong>Key Skills:</strong> UI Design, User Experience, Responsive Design, Front-End Development</p>
            </>
          ),
        },
        {
          title: "Problem-Solving & Algorithm Optimization",
          description: (
            <>
              <p>I have solved over 100 problems on GeeksForGeeks and LeetCode, focusing on Data Structures, Algorithms, and optimization. This has equipped me with the skills to tackle complex coding challenges, especially in competitive programming.</p>
              <p><strong>Key Skills:</strong> Data Structures, Algorithms, Problem Solving, Optimization</p>
            </>
          ),
        },
        {
          title: "Mentorship & Teaching",
          description: (
            <>
              <p>I have mentored Class 10th and 12th students through the Desh Ke Mentor Programme, offering career guidance and academic support. I am passionate about helping others grow in their academic and professional pursuits.</p>
              <p><strong>Key Skills:</strong> Mentorship, Teaching, Career Guidance, Academic Support, Leadership</p>
            </>
          ),
        },
      ];
      
      
    const{ref, inView}= useInView({
            triggerOnce: true,
            threshold:0.2,
        })

  return (
    <div id="services" className='text-white py-16'>
      <motion.div 
      ref={ref}
      intital={{ opacity:0,y:50 }}
      animate={inView ? { opacity:1,y:0 }:{}}
      transition={{ duration:0.5 }}
      className='container mx-auto px-4 text-center'>
        <h2 className='text-2xl md:text-4xl font-bold underline mb-8'>Services</h2>
        <p className='mb-12 text-gray-400'>Offering a range of services from web development to data analytics, designed to deliver innovative and efficient solutions</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service,index) => (
                <motion.div
                ref={ref}
                intital={{ opacity:0,scale:0.8 }}
                animate={inView ? { opacity:1,scale:1}:{opacity:0,scale:0.8}}
                transition={{ duration:0.5, delay:index*0.2 }}
                key={index}
                className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'>
                    <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto '/>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
