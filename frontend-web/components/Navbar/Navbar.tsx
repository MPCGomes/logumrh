'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { IoMenu, IoClose } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav id="navbar" className={styles.navbar}>
        <div className="container">
          <Link href={'/'}>
            <Image src="/logo.svg" alt="Logo" width={130} height={65} />
          </Link>

          <div className={styles.linksContainer}>
            <Link className={styles.linkItem} href={'/'}>
              Ínicio
            </Link>
            <Link className={styles.linkItem} href={'/vacancies'}>
              Vagas
            </Link>
            <Link className={styles.linkItem} href={'/'}>
              Sobre Nós
            </Link>
          </div>

          <div className={styles.buttonContainer}>
            <Link href={'/login'}>
              <ButtonSecondary text="Entrar" />
            </Link>
            <ButtonPrimary text="Cadastrar" />
          </div>

          <button className={styles.menu} onClick={toggleModal}>
            <IoMenu />
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={toggleModal}>
            <IoClose />
          </button>
          <div className={styles.modalLinks}>
            <Link href={'/'}>Ínicio</Link>
            <Link href={'/vacancies'}>Vagas</Link>
            <Link href={'/'}>Sobre Nós</Link>
          </div>
          <div className={styles.modalButtons}>
            <Link href={'/login'}>
              <ButtonSecondary text="Entrar" />
            </Link>
            <ButtonPrimary text="Cadastrar" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
