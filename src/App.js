import React from 'react'
import { Navbar, Footer, Home, Impressum, Datenschutz } from './components'
import { ThemeProvider } from './components/ThemeContext';
import { Routes, Route } from 'react-router-dom';


const App = () =>  {
  return (
    <ThemeProvider>
      <div id='light' className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full'>
        <header className='flex justify-center items-center px-4'>
          <div className='max-w-[1280px] w-full'>
            <Navbar />
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/impressum' element={<Impressum />}/>
            <Route path='/datenschutz' element={<Datenschutz />}/>
          </Routes>
        </main>
        <footer>
          <div className='flex justify-center items-start px-4'>
            <div className='max-w-[1280px] w-full'>
              <Footer />       
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
)};

export default App