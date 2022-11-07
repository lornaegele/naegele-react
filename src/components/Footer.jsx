import React from 'react'
import { styles } from '../constants'

const Footer = () => (
    <section id='footer'>
      <div className='text-center mt-6 p-6'>
        <p><a href="/impressum" className={`${styles.hoverAnimation} text-lg`}>Impressum</a>&nbsp; &nbsp; | &nbsp; &nbsp;<a href="/datenschutz" className={`${styles.hoverAnimation} text-lg`}>Datenschutz</a></p>
      </div>
    </section>
)

export default Footer