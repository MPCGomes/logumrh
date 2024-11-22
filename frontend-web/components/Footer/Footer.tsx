import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContainer}>
          <Image
            src='/logo-white.png'
            alt="Logo"
            width={325}
            height={100}
          />
          <div className={styles.linkGroup}>
            <p className={styles.title}>
              Links Rápidos
            </p>
            <div className={styles.itemGroup}>
              <Link
                className={styles.item}
                href={'/'}>
                Ínicio
              </Link>
              <Link
                className={styles.item}
                href={'/vacancies'}>
                Vagas
              </Link>
              <Link
                className={styles.item}
                href={''}>
                Sobre nós
              </Link>
            </div>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.title}>
              Empresa
            </p>
            <div className={styles.itemGroup}>
              <Link
                className={styles.item}
                target="_blank"
                href={'#'}>
                (12) 3456-7890
              </Link>
              <Link
                className={styles.item}
                target="_blank"
                href={'#'}>
                logumrh@gmail.com
              </Link>
              <Link
                className={styles.item}
                target="_blank"
                href={'https://www.linkedin.com/company/logumrh/about/'}>
                linkedin.com/company/logumrh
              </Link>
            </div>
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