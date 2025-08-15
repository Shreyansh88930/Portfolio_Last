// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Navbar = () => {
  const variants = {
    open: { clipPath: 'circle(1200px at 43px 43px)' },
    closed: {
      clipPath: 'circle(25px at 43px 37px)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  };

  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: 'About', to: "about" },
    { id: 2, text: 'Experience', to: "experience" },
    { id: 3, text: 'Work', to: "work" },
    { id: 4, text: 'Contact', to: "contact" },
  ];

  return (
    <div>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6 border-b-2 border-purple-500"
      >
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1 px-2">
          <span className="text-white">SHREYANSH</span>
          <span className="text-purple-500">PALWALIA</span>
        </div>

        {/* Menu Items */}
        <div>
          <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
            {items.map(({ id, text, to }) => (
              <li
                key={id}
                className="hover:text-purple-400 transition-colors duration-300 cursor-[url('/cursor.cur'),_pointer]"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Button */}
        <a
          href='https://drive.google.com/file/d/1S8ZApADR5dnBx0gZxyO-qiAbcrdAH9_R/view?usp=sharing'
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-5 py-2 ml-4 mr-6 rounded-full transition-all duration-300 cursor-[url('/cursor.cur'),_pointer]"
        >
          Download Resume
        </a>

      </motion.div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between w-full border-b-2 border-purple-500">
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={variants}
            className="bg-white w-1/3-full h-screen top-0 left-0 text-black fixed z-10"
          >
            <div className="px-7 py-6">
              {menu ? (
                <IoCloseSharp size={30} onClick={() => setMenu((prev) => !prev)} />
              ) : (
                <IoMenu size={30} onClick={() => setMenu((prev) => !prev)} />
              )}
            </div>

            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="hover:text-purple-500 duration-200 cursor-[url('/cursor.cur'),_pointer]"
                    >
                      <Link
                        to={to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href='https://drive.google.com/file/d/1uHWFAfqXN9vHJM_A4ZjoHVTtSik_UIBj/view?usp=sharing'
                  className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-5 py-2 mt-6 rounded-full cursor-[url('/cursor.cur'),_pointer]"
                >
                  Download Resume
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Mobile Logo */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">SHREYANSH</span>
          <span className="text-purple-500">PALWALIA</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
