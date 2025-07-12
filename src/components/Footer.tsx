'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shakirjamil9', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shakirjamil9/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mianshakir9@hotmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="text-center space-y-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">M. Shakir Jamil</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Engineer passionate about creating innovative web solutions and delivering exceptional user experiences.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-200 group"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-300 group-hover:text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              © {currentYear} M. Shakir Jamil. Made with Next.js & TailwindCSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 