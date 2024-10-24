import React from 'react'
import styles from './Navbar.module.scss'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <Link
          href={''}>
          <img
            src='/logo.svg'
            alt="Logo"
          />
        </Link>

        <div className={styles.linksContainer}>
          <Link
            className={styles.linkItem}
            href={''}>
            Ínicio
          </Link>
          <Link
            className={styles.linkItem}
            href={''}>
            Vagas
          </Link>
          <Link
            className={styles.linkItem}
            href={''}>
            Sobre Nós
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <ButtonSecondary
            text='Entrar'
          />
          <ButtonPrimary
            text='Cadastrar'
          />
          <button className={styles.menu}>
            <IoMenu />
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar