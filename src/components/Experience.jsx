// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const timelineData = [
    {
      type: "internship",
      title: "Software Developer Intern — Poll Automation Project",
      company: "IIT Ropar (IIR)",
      duration: "May 2025 – July 2025",
      details: [
        "Developed an AI-powered Poll Automation web application that allows meeting hosts to generate real-time polls from live audio transcripts, enabling interactive engagement and instant feedback collection.",
        "Built role-based dashboards for hosts and participants, providing live poll creation, participation, results visualization, and historical data tracking.",
        "Designed and implemented a responsive, role-based dashboard using React.js, TypeScript, and Tailwind CSS, ensuring cross-device compatibility.",
        "Integrated speech-to-text processing to transcribe meeting audio, feeding the transcript into an AI model for automated question generation.",
        "Developed dynamic export options (CSV, PDF, JSON) and analytics visualization for actionable insights.",
        "Implemented dark/light mode theme toggling and React Context API for scalable state management.",
        "Optimized component architecture for reusability, reducing code redundancy by 25%.",
        "Collaborated on GitHub using feature branches, code reviews, and issue tracking.",
        "Applied UI/UX best practices for accessibility, intuitive navigation, and user engagement."
      ],
      certificate:
        "https://drive.google.com/file/d/1wAHwY8rWIBRXAGfrXKVKYNFWlaQ6s6yR/view?usp=sharing",
      demoVideo:
        "https://drive.google.com/file/d/1S0V5voNNHy4KcwuZDijanGLunOYzLV1q/view?usp=sharing",
    },
    {
      type: "certificate",
      title: "Data Analytics Essentials",
      company: "Cisco Networking Academy",
      duration: "2024",
      details: [
        "Proficiency in data cleaning, visualization, and analysis techniques.",
        "Hands-on with Excel, Tableau, and Power BI.",
      ],
      certificate: "https://drive.google.com/file/d/15BHhHXhgYcJRwRQuL1835PfFIzuI_Eou/view?usp=sharing",
    },
    {
      type: "certificate",
      title: "Google AI Essentials",
      company: "Google",
      duration: "2024",
      details: [
        "Learned generative AI concepts, prompt engineering, and AI ethics.",
        "Applied concepts in practical AI-powered projects.",
      ],
      certificate: "https://drive.google.com/file/d/1_o9KfSpjPN8SWDkDNNOznANCzvw0Jg3B/view?usp=sharing",
    },
    {
      type: "certificate",
      title: "Introduction to Generative AI Concepts",
      company: "Microsoft",
      duration: "August 11, 2025",
      details: [
        "Explored foundational generative AI concepts including text, image, and multimodal models.",
        "Understood prompt engineering techniques, ethical AI use, and practical applications.",
      ],
      certificate: "https://drive.google.com/file/d/1I95effAfPMU9PAo3qNHQHz7YH4zQby-k/view?usp=sharing",
    },
    {
      type: "certificate",
      title: "The Joy of Computing Using Python",
      company: "NPTEL (Funded by MOE, Govt. of India)",
      duration: "2024",
      details: [
        "Achieved a consolidated score of 91% (Online Assignments: 25/25, Proctored Exam: 66/75).",
        "Course covered fundamentals of Python programming, problem-solving, and computational thinking.",
      ],
      certificate: "https://drive.google.com/file/d/1vIP02odeh4jLGu_V3JxVqbxlSI5lYGjh/view?usp=sharing",
    },
    {
      type: "certificate",
      title: "Introduction to Internet of Things (IoT)",
      company: "NPTEL (Funded by MOE, Govt. of India)",
      duration: "2024",
      details: [
        "Achieved a consolidated score of 91% (Online Assignments: 25/25, Proctored Exam: 66/75).",
        "Covered IoT architecture, protocols, and practical applications with case studies.",
      ],
      certificate: "https://drive.google.com/file/d/1CQSaWKciiSOksEOwUmshmFBz8TpF3aeI/view?usp=sharing",
    },
  ];

  return (
    <div id="experience" className="text-white py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold underline text-center mb-12">
          Experience & Certifications
        </h2>

        <div className="relative border-l-4 border-purple-500 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-2">
                <div className="bg-purple-500 p-3 rounded-full text-white mr-4">
                  {item.type === "internship" ? (
                    <FaBriefcase size={20} />
                  ) : (
                    <FaCertificate size={20} />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-purple-400">
                    {item.company} • {item.duration}
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              <div className="flex gap-4">
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
                  >
                    📜 View Certificate
                  </a>
                )}
                {item.demoVideo && (
                  <a
                    href={item.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
                  >
                    🎥 Watch Demo Video
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
