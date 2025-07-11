'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    company: 'The Aime Group',
    position: 'Full Stack Engineer',
    duration: 'Apr 2023 – Present',
    location: 'Remote',
    description: [
      'Delivered high-quality development solutions on-time and within budget.',
      'Introduced new technical stacks to enhance project efficiency.',
      'Collaborated with remote teams effectively.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
  },
  {
    company: 'Xeven Solutions',
    position: 'Full Stack Engineer (MERN)',
    duration: 'Sep 2022 – Jan 2023',
    location: 'Lahore, Pakistan',
    description: [
      'Established agile practices and scheduling.',
      'Maintained high product quality with proper standards and security measures.',
    ],
    technologies: ['MERN Stack', 'Express.js', 'MongoDB', 'React', 'Git'],
  },
  {
    company: 'Innovation Insight',
    position: 'Frontend Engineer',
    duration: 'Aug 2021 – May 2022',
    location: 'Lahore, Pakistan',
    description: [
      'Developed and supported web apps using React.js and Next.js.',
      'Collected user requirements, wrote stories, and provided 3rd-level support.',
    ],
    technologies: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Git'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-3 h-3 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
                          <Building size={16} />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 