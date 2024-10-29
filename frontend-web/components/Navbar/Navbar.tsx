import React from 'react';
import styles from './Navbar.module.scss';
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <Link
          href={''}>
          <Image
            src='/logo.svg'
            alt="Logo"
            width={20}
            height={20}
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
            href={'vacancies'}>
            Vagas
          </Link>
          <Link
            className={styles.linkItem}
            href={''}>
            Sobre Nós
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link 
          href={'login'} >
            <ButtonSecondary
              text='Entrar'
            />
          </Link>

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