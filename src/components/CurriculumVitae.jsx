import React from 'react'
import { MdWork } from "react-icons/md";
import { experience } from '../constants';
import { styles } from '../constants';

const CurriculumVitae = () => {
  return (
    <section id='cv'>
        <div className='flex flex-col m-4'>
          <div className={`${styles.container}`}>
              <div>
                <h2 className={`${styles.sectionHeading} mb-4`}>Mein Lebenslauf</h2>
                <div className='pl-4 pb-4 flex flex-col flex-1'>
                  {experience.map((cv) => (
                    <div key={cv.id}>
                      <h3>
                        <i><MdWork className='inline-block'/></i>
                        <span className="pl-3">{cv.year}</span>
                      </h3>
                      <div className='border-l border-primary p-4 ml-2'>
                        <h3 className='font-bold'>{cv.title}</h3>
                        <p>{cv.content}</p>
                        <ul className='list-disc'>
                          <li className='ml-5 empty:hidden'>{ cv.no1 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no2 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no3 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no4 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no5 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no6 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no7 }</li>
                          <li className='ml-5 empty:hidden'>{ cv.no8 }</li>
                        </ul>
                      </div> 
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default CurriculumVitae