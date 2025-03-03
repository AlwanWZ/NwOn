'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function CvScroll() {
  const [activeSection, setActiveSection] = useState<string>('Beranda');

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-50 flex justify-center space-x-6">
        {['Beranda', 'Tentang', 'Skills', 'Portfolio'].map((section) => (
          <button 
            key={section} 
            className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${activeSection === section ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
            onClick={() => handleScrollToSection(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      
      {['Beranda', 'Tentang', 'Skills', 'Portfolio'].map((section) => (
        <motion.section 
          key={section}
          id={section} 
          className="h-screen flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 md:w-1/2"
            exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            {section === 'Beranda' && (
              <>
                <h1 className="text-5xl font-bold">Alwan's Portfolio</h1>
                <p className="text-lg mt-2">Mahasiswa Sistem Informasi A - Semester 4</p>
                <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full border-4 border-blue-500 shadow-lg mt-4" />
              </>
            )}
            {section === 'Tentang' && (
              <>
                <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
                <p className="max-w-2xl text-lg">
                  Nama saya Alwan, lahir di Lampung pada 6 November 2005. Saya seorang mahasiswa semester 4 di Program Studi Sistem Informasi A. Hobi saya meliputi bermain basket, membaca komik, menonton anime, riding, dan bermain game.
                </p>
              </>
            )}
            {section === 'Skills' && (
              <>
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <div className="w-full max-w-xl">
                  {[{ skill: 'HTML', level: 90 }, { skill: 'PHP', level: 89 }, { skill: 'CSS', level: 50 }, { skill: 'JavaScript', level: 50 }, { skill: 'React', level: 50 }].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-blue-600 h-6 my-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    >
                      <span className="block text-left pl-2 text-sm">{item.skill}</span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            {section === 'Portfolio' && (
              <>
                <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
                <motion.div 
                  className="cursor-pointer" 
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">Loopify</h3>
                  <p className="text-sm">Web Medsos menggunakan PHP</p>
                  <center>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/loopify.png" alt="Loopify Project" width={300} height={200} className="rounded-lg mt-4 cursor-pointer" />
                    </motion.div>
                  </center>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.section>
      ))}
    </motion.div>
  );
}
