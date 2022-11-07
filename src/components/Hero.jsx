import React from 'react'
import { smily } from '../assets'
import Typed from 'react-typed'

const Hero = () => {
  return (
      <section className="flex flex-col justify-center m-0-auto sm:mt-[10rem] mt-[9rem] mb-[15rem] sm:pl-12 pl-6 sm:pr-12 pr-6 w-full h-[100%] z-10">    
        <img src={smily} alt="portrait" className='max-w-[128px]'/>
          <div className='sm:text-7xl text-5xl my-8 font-bold sm:h-[300px] h-[150px] sm:flex hidden'>
              <h1>
              Hi, ich bin&nbsp;<br />
              <Typed typeSpeed={80} backSpeed={20} loop={true} strings={['Webentwickler.', 'Webdesigner.','E-Commerce<br> Manager.', ]}/>
             </h1>
          </div>
          <div className='sm:text-7xl text-5xl my-8 font-bold sm:h-[300px] h-[150px] sm:hidden flex'>
              <h1>
              Hi, ich bin&nbsp;<br />
              <Typed typeSpeed={80} backSpeed={20} loop={true} strings={['Web-<br>Entwickler.', 'Webdesigner.','E-Commerce<br> Manager.', ]}/>
             </h1>
          </div>
          <div className='absolute bottom-[1.5rem] left-0 w-[100%]'>
              <div className='block m-auto max-w-[100px] text-center'>
                  <span className='border-2 dark:border-white border-gray-900 rounded-2xl block h-[2rem] w-[1.25rem] m-auto mt-0.75'>
                    <span className='animate-scrollDown dark:bg-white bg-gray-900 rounded-xl w-[0.75rem] h-[0.75rem] ml-[2px] absolute block '></span>
                  </span>
            </div>
          </div>
    </section>
  )
}

export default Hero