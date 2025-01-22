import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uda2r9k", // Replace with your EmailJS Service ID
        "template_xp4mw3s", // Replace with your EmailJS Template ID
        formRef.current,
        "35BEyE_hTYBa4ODO9" // Replace with your EmailJS User ID (public key)
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
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          Let’s Discuss Your <span className="text-purple-500">Project</span>
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
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
          {/* Phone */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Call Me</p>
              <p className="text-white">+91 8764788930</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Email</p>
              <p className="text-white">shreyanshpalwalia@gmail.com</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaMapMarkerAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Address</p>
              <p className="text-white">DTU, Delhi, India</p>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
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

       {/* FOOTER */}
       <motion.div
       ref={ref}
       initial={{ opacity:0 }}
       animate={inView? { opacity:1 }:{}}
       transition={{ delay:1, duration:0.5 }}
      className='mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
        <p>2022. All Rights Reserved</p>
        <p>Shreyansh</p>
        <div className='flex justify-center space-x-4 text-white mt-4'>
            <a className='hover:text-purple-500'> <FaFacebook className='w-6 h-6'/> </a>
            <a className='hover:text-purple-500'> <FaTwitter className='w-6 h-6'/> </a>
            <a href="https://www.linkedin.com/in/shreyansh-palwalia-68065b26a/" className='hover:text-purple-500'> <FaLinkedin className='w-6 h-6'/> </a>
            <a className='hover:text-purple-500'> <FaInstagram className='w-6 h-6'/> </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
