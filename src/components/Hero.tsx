'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shakirjamil9', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shakirjamil9/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mianshakir9@hotmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Radial Gradient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-[radial-gradient(circle_at_60%_40%,rgba(99,102,241,0.18)_0%,rgba(139,92,246,0.12)_60%,transparent_100%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(99,102,241,0.22)_0%,rgba(139,92,246,0.18)_60%,transparent_100%)] rounded-full blur-2xl absolute -top-32 -left-32"></div>
        <div className="w-[60vw] h-[60vw] max-w-xl max-h-xl bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12)_0%,rgba(99,102,241,0.10)_60%,transparent_100%)] dark:bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.18)_0%,rgba(99,102,241,0.14)_60%,transparent_100%)] rounded-full blur-2xl absolute -bottom-24 -right-24"></div>
      </div>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                M. Shakir Jamil
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text">
                Full Stack Engineer (MERN)
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
            >
              A highly skilled and competent Full Stack Engineer with 3+ years of hands-on experience designing, developing, and implementing applications and solutions using a wide range of technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:brightness-110 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 border-2 border-transparent bg-transparent text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-200 relative overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-600 group-hover:via-blue-500 group-hover:to-purple-600 pointer-events-none transition-all duration-200"></span>
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-blue-500 group-hover:to-purple-600 transition-all duration-200">View Projects</span>
                <ArrowRight size={20} className="relative z-10" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src="/profile.jpg"
                      alt="M. Shakir Jamil"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <div className="text-sm font-medium">3+ Years</div>
                <div className="text-xs text-gray-500">Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <div className="text-sm font-medium">MERN</div>
                <div className="text-xs text-gray-500">Stack</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 