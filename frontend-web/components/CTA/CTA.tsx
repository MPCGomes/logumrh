import React from 'react'
import styles from './CTA.module.scss'
import CustomButton from '../CustomButton/CustomButton';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className='container'>
        <p className={styles.text}>
          Toque no botão para falar consoco por WhatsApp e agende um atendimento agora mesmo!
        </p>
        <CustomButton
          variant="negativeOutlined"
          color="primary"
          onClick={() => {
            document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Fale Conosco
        </CustomButton>
      </div>
    </section>
  )
}

export default CTA