'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const projects = [
  {
    id: 1,
    title: 'Izzy AR (Accounts Receivable)',
    description: 'Built backend logic for chasing clients with due invoices. Integrated Stripe for payments and Xero for finance.',
    image: '/project1.png',
    technologies: ['Node.js', 'Stripe', 'Xero', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/shakirjamil9/izzy-ar',
    live: 'https://izzy-ar.com',
  },
  {
    id: 2,
    title: 'Workout/Meal Plan Generator',
    description: 'AI-based tool using OpenAI API to generate custom fitness and diet plans.',
    image: '/project2.jpg',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    category: 'AI/ML',
    github: 'https://github.com/shakirjamil9/workout-generator',
    live: 'https://workout-generator.vercel.app',
  },
  {
    id: 3,
    title: 'Portfolio with Admin Panel',
    description: 'A web-based portfolio builder with admin panel to manage data.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'Full Stack',
    github: 'https://github.com/shakirjamil9/portfolio-admin',
    live: 'https://portfolio-admin.vercel.app',
  },
  {
    id: 4,
    title: 'Resume Generator',
    description: 'Full-stack app with React, Node.js, MongoDB to create/download resumes.',
    image: '/project4.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/shakirjamil9/resume-generator',
    live: 'https://resume-generator.vercel.app',
  },
  {
    id: 5,
    title: 'Covid-19 Tracker',
    description: 'Frontend React app using Material UI for live COVID stats globally.',
    image: '/project5.jpg',
    technologies: ['React', 'Material UI', 'Chart.js', 'API'],
    category: 'Frontend',
    github: 'https://github.com/shakirjamil9/covid-tracker',
    live: 'https://covid-tracker.vercel.app',
  },
  {
    id: 6,
    title: 'Paint Nite',
    description: 'The original paint and sip experience for nights out, private events, or virtual painting at home. Local events across the US and Canada.',
    image: '/project6.jpg',
    technologies: ['React', 'Node.js', 'Event Management', 'Stripe'],
    category: 'Full Stack',
    github: '',
    live: 'https://paintnite.com/',
  },
  {
    id: 7,
    title: 'Vonza',
    description: 'The best business platform to create and sell online courses, community, digital products, e-commerce, sales funnels and more - all in one platform.',
    image: '/project7.jpg',
    technologies: ['React', 'Node.js', 'E-commerce', 'Community'],
    category: 'Full Stack',
    github: '',
    live: 'http://vonza.com/',
  },
  {
    id: 8,
    title: 'Yaymaker',
    description: 'Event planning platform for private, social, and corporate events—in-person, virtually or hybrid. From the makers of Paint Nite®.',
    image: '/project8.jpg',
    technologies: ['React', 'Node.js', 'Event Management'],
    category: 'Full Stack',
    github: '',
    live: 'http://yaymaker.com/',
  },
  {
    id: 9,
    title: 'Cuts Like a Knife',
    description: 'Audio equipment management system for professional environments.',
    image: '/project9.jpg',
    technologies: ['React', 'Node.js', 'Audio', 'Management'],
    category: 'Full Stack',
    github: '',
    live: 'https://qa.cutslikeaknife.net/',
  },
  {
    id: 10,
    title: 'Edge OCR',
    description: 'Home page for Edge OCR, an advanced optical character recognition platform.',
    image: '/project10.jpg',
    technologies: ['React', 'Node.js', 'OCR', 'AI'],
    category: 'AI/ML',
    github: '',
    live: 'https://edgeocr.com/',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const isMobile = useIsMobile();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={isMobile ? { opacity: 0, x: -40 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden card-hover group"
            >
              {/* Project Image */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
                />
              ) : (
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
} 