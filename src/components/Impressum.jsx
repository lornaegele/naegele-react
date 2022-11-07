import React from 'react'
import Contact from './Contact'

const Impressum = () => {
  return (
    <div id='light' className='bg-white items-center dark:bg-gray-900 text-gray-900 dark:text-white w-full'>
      <div className='flex justify-center'>
        <div className='w-full h-[100%] max-w-[1280px]'>
          <div className="pt-16 px-8">
          <h1 className='sm:5xl text-4xl font-bold color-primary'>Impressum</h1><br />
            <p>
              Angaben gemäß § 5 TMG <br /><br />
              Lorenz Nägele<br />
              Lehenbergweg 6<br />
              87746 Erkheim<br />
              <br />
              Vertreten durch:<br />
              Lorenz Nägele<br />
              <br />
              Kontakt:<br />
              Telefon: +49 152 08536210<br />
              E-Mail: info@v5media.de<br />
            </p>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Impressum