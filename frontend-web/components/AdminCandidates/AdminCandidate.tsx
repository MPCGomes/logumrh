'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './AdminCandidate.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import Modal from "../ModalCv/ModalCv";
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdPerson } from "react-icons/md";

interface AdminCandidateProps {
  name: string;
  email: string;
  phone: string;
  date: string;
}

const AdminCandidate: React.FC<AdminCandidateProps> = ({ name, email, phone, date }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fecha o menu quando clicar p/ fora
  const closeMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={styles.grid}
      ref={menuRef}
    >
      <p>{name}</p>
      <button
        onClick={openModal}
        className={styles.curriculum}
      >
        <FiExternalLink />
      </button>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{date}</p>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}
      >
        <TbDotsVertical />
      </button>
      {isMenuOpen && (
        <div className={styles.optionsMenu}>
          <button>
            <MdPerson />
            Ver perfil
          </button>
          <button>
            <FaRegTrashCan />
            Apagar
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
      </Modal>
    </div>
  )
}

export default AdminCandidate