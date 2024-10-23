import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContainer}>
          <Image
            src='/logo-white.png'
            alt="Logo"
          />
          <div className={styles.linkGroup}>
            <p className={styles.title}>
              Empresa
            </p>
            <ul className={styles.itemGroup}>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.title}>
              Empresa
            </p>
            <ul className={styles.itemGroup}>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.title}>
              Empresa
            </p>
            <ul className={styles.itemGroup}>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
              <li className={styles.item}>
                Sobre a Logum RH
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>™ & © 2024 Niloware. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer