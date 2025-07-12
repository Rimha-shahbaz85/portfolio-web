'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { BadgeCheck, Code2, Database, Cloud, GitBranch, Star } from 'lucide-react';
import React from 'react';

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

const skillGroups = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Code2 },
      { name: 'JavaScript (ES5 & ES6+)', icon: Code2 },
      { name: 'TypeScript', icon: Star },
      { name: 'React JS (Redux / Next JS)', icon: Code2 },
      { name: 'React Query', icon: Code2 },
      { name: 'Formik', icon: Code2 },
      { name: 'ReactHookForm', icon: Code2 },
      { name: 'Bootstrap', icon: Code2 },
      { name: 'MaterialUI', icon: Code2 },
      { name: 'AntD', icon: Code2 },
    ],
  },
  {
    category: 'Backend',
    icon: Code2,
    skills: [
      { name: 'Node JS (Express / Nest JS)', icon: Code2 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Prisma', icon: Database },
      { name: 'Mongoose', icon: Database },
    ],
  },
  {
    category: 'Cloud/DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, S3, CloudFront, EBS)', icon: Cloud },
    ],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git & Github', icon: GitBranch },
    ],
  },
  {
    category: 'Integrations',
    icon: BadgeCheck,
    skills: [
      { name: 'Stripe Payments', icon: BadgeCheck },
      { name: 'Xero Integration', icon: BadgeCheck },
    ],
  },
];

const softSkills = [
  'Accountability',
  'Teamwork',
  'Coaching / Mentoring',
  'Adaptability',
  'Work Ethics',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 0, x: -40 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A highly skilled and competent Full Stack Engineer (MERN) with 3+ years of hands-on experience designing, developing, and implementing applications and solutions using a wide range of technologies. I've also mentored a team of 5+ developers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building scalable web applications using modern technologies and best practices. My expertise includes both frontend and backend development, with a strong focus on user experience and performance optimization.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-2">
                <p className="font-medium">BSCS – Lahore Garrison University</p>
                <p className="text-gray-600 dark:text-gray-400">Graduated 2024</p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillGroups.map((group, groupIdx) => (
                <div key={group.category} className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      {group.icon && React.createElement(group.icon, { size: 16 })}
                    </span>
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + (groupIdx * 0.2) + (idx * 0.05) }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-200 font-medium shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        {skill.icon && React.createElement(skill.icon, { size: 16, className: 'opacity-70' })}
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 