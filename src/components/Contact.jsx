import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uda2r9k",
        "template_xp4mw3s",
        formRef.current,
        "35BEyE_hTYBa4ODO9"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          Let’s Discuss Your <span className="text-purple-500">Project</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 mt-4"
        >
          Let’s make something new, different, and more meaningful—things that
          are more visual or conceptual.
        </motion.p>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-6">
          {[
            {
              icon: <FaPhone className="text-white w-6 h-6" />,
              title: "Call Me",
              value: "+91 8764788930",
              delay: 0.2
            },
            {
              icon: <FaEnvelope className="text-white w-6 h-6" />,
              title: "Email",
              value: "shreyanshpalwalia@gmail.com",
              delay: 0.4
            },
            {
              icon: <FaMapMarkerAlt className="text-white w-6 h-6" />,
              title: "Address",
              value: "DTU, Delhi, India",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center space-x-4"
            >
              <div className="bg-purple-500 p-4 rounded-full">{item.icon}</div>
              <div>
                <p className="text-lg font-medium text-purple-500">{item.title}</p>
                <p className="text-white">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-48 flex flex-col md:flex-row justify-between items-center p-5 text-white border-t-2 border-purple-500"
      >
        <p>2025. All Rights Reserved</p>
        <p>Shreyansh</p>
        <div className="flex justify-center space-x-4 text-white mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/shreyansh-palwalia-68065b26a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Shreyansh88930"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
