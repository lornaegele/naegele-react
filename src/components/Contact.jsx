import React from 'react';
import { useState } from 'react';
import { contactInfo } from '../constants'
import { styles } from '../constants';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id='contact' className='p-4'>
      <div className=" flex flex-col  max-w-[1280px] w-full sm:p-6 p-4 border rounded-lg dark:text-white dark:border-white border-gray-900">
      <h2 className='text-3xl font-bold sm:text-left text-center mb-4'>Kontakt</h2>
      <div className="flex sm:flex-row flex-col sm:items-center items-left">
        <div className="flex flex-col sm:px-4 px-0 mx-0 sm:mx-4 mb-4">
        {contactInfo.map((contact) => (
            <div key={contact.id} className='flex flex-row py-4 text-lg'>
              <h2 className='px-2'>{contact.title}:</h2>
              <a href={contact.url} className={`${styles.hoverAnimation} before:bottom-[8px]`}>{contact.content}</a>
            </div>
          ))}
        </div>
          <div className="flex flex-col sm:px-6 px-0 sm:mx-4">
            <div className="sm:px-4 px-0">
              <form action="https://getform.io/f/e7d00226-3cd3-4fa2-839d-3a756739346b" method="POST">
                <label className='text-lg'>
                  Name
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    className={`${styles.contactForm}`}
                  />
                </label>
                <label className='text-lg'>
                  E-Mail
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className={`${styles.contactForm}`}
                  />
                </label>
                <label className='text-lg'>
                  Nachricht
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${styles.contactForm}`} 
                  />
                </label>
                <label className='text-sm'>
                  <input 
                    type ="checkbox"
                    required
                    className ='mr-2 border' 
                  />
                  Ich habe die <a href='/Datenschutz' className='hover:underline'>Datenschutzerklärung</a> gelesen und stimme zu.
                </label>
                <input 
                  type="submit" 
                  value="Absenden" 
                  className='dark:text-white text-dark-900 bg-primary mt-6 px-4 py-2 rounded-lg cursor-pointer w-[100%] hover:text-white hover:bg-gray-900 duration-300 dark:hover:text-gray-900 dark:hover:bg-white'
                />
              </form>
            </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact