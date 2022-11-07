import React from 'react'
import { ThemeProvider } from './ThemeContext';
import {Hero, Skills, CurriculumVitae, Contact, About } from './'

const Home = () => {
  return (
    <ThemeProvider>
      <div id='light' className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full'>
        <div className='flex justify-center items-start'>
            <div className='w-full max-w-[960px]'>
                <Hero />
            </div>
        </div>
        <div className='flex justify-center items-start'>
            <div className='w-full max-w-[1280px]'>
                <About />
                <Skills />
                <CurriculumVitae />
                <Contact />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Home