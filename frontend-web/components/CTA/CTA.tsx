import React from 'react'
import styles from './CTA.module.scss'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className='container'>
        <p className={styles.text}>Toque no botão para falar consoco por WhatsApp e agende um atendimento agora mesmo!</p>
        <button>
          Fale Conosco
        </button>
      </div>
    </section>
  )
}

export default CTA