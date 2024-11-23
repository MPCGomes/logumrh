'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './AdminCompanyField.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

interface AdminCompanyFieldProps {
  name: string;
  cnpj: string;
  responsible: string;
  email: string;
  phone: string;
}

const AdminCompanyField: React.FC<AdminCompanyFieldProps> = ({ name, cnpj, responsible, email, phone }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fecha o menu quando clicar fora
  const closeMenu = (event: MouseEvent) => {
    if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isMenuOpen]); // Adiciona a dependência `isMenuOpen`

  return (
    <div className={styles.grid} ref={menuRef}>
      <p>{name}</p>
      <p>{cnpj}</p>
      <p>{responsible}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}
      >
        <TbDotsVertical />
      </button>
      {isMenuOpen && (
        <div className={styles.optionsMenu}>
          <button className={styles.optionButton}>
            <FaEdit />
            Editar
          </button>
          <button className={styles.optionButton}>
            <FaRegTrashCan />
            Apagar
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminCompanyField;
