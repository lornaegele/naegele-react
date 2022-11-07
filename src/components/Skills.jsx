import React from 'react'
import { styles } from '../constants'

const Skills = () => {
  return (
    <section id='skills' className='p-4'>
      <div className={`${styles.container} flex-col`}>
        <div>
            <h2 className={`${styles.sectionHeading} mb-4`}>Meine Skills</h2>
                <div className='w-[100%] flex flex-wrap'>
                    <div className={`${styles.skillsContainers}`}>
                        <h4 className={`${styles.skillsHeadings}`}>
                            HTML5
                        </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[90%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                90%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        CSS3 & Tailwind
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[85%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                85%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        JavaScript
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[60%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                60%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        React
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[60%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                60%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        Git
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[65%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                65%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        Adobe Creative Cloud
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[80%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                80%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        SEO
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[85%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                85%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        UX / UI Design
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[85%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                85%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        Englisch
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[90%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                90%
                            </div>
                        </div>
                    </div>
                <div className={`${styles.skillsContainers}`}>
                    <h4 className={`${styles.skillsHeadings}`}>
                        Französisch
                    </h4>
                    <div className={`${styles.skillsBarWhite}`}>
                        <div className={`${styles.skillsBarColor} w-[40%]`}>
                            </div>
                            <div className={`${styles.skillsPercentage}`}>
                                40%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills