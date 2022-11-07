import React from 'react'
import { avatar } from '../assets'
import { FiGithub } from "react-icons/fi";
import { styles } from '../constants';

const About = () => {
  const GitHubIcon = document.getElementById('GitHubIcon')
  const rotation = () => {
    GitHubIcon.classList.add("rotate-[360deg]")
  }
  const resetRotation = () => {
    GitHubIcon.classList.remove("rotate-[360deg]")
  }

  return (
    <section id='about' className='m-4'>
      <div className={`${styles.container} md:flex-row flex-col-reverse`}>
          <div>
            <h2 className={`${styles.sectionHeading}`}>Über mich</h2>
            <p className='text-lg p-2 hover:'>Hi, ich arbeite aktuell als E-Commerce Leiter. Ich mag es, an Aufgaben zu arbeiten, bei denen man seine Kreativität nutzen muss. Außerdem arbeite ich gern, unabhängig und ohne Beeinträchtigung, obwohl ich auch sehr gern im Team arbeite, um gemeinsam an neuen Ideen zu forschen oder um gemeinsam Probleme zu lösen. </p>
            <div className="sm:text-left text-center p-4" onMouseEnter={rotation} onMouseLeave={resetRotation}>
              <a href='https://github.com/lornaegele/naegele-react' className="text-white dark:text-gray-900 sm:text-lg text-base my-4 w-[230px] p-2 border-2 rounded-md border-primary z-[10]"> 
                <FiGithub id="GitHubIcon" className='inline-block my-1 mr-2 duration-700'/> 
                Zum Github Code
              </a>
            </div>
          </div>
          <div className='pl-4 mx-auto'>
            <img src={avatar} alt="avatar" class="center" className="max-w-[200px] p-4 text-center"/>
          </div>
      </div>
    </section>
  )
}

export default About