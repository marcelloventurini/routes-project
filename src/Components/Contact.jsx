// import React from 'react'
import styles from './Contact.module.css'
import photo from '../img/contato.jpg'
import Head from './Head'

function Contact() {
  return (
    <section className={styles.contact + ' animationLeft'}>
      <Head title='Contato' description='Entre em contato.' />
      <img src={photo} alt='Máquina de escrever.' />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.data}>
          <li>marcellofventurini@gmail.com</li>
          <li>(19) 99141-0277</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
