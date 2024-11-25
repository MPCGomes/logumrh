'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './AdminCompanyVacancy.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import Link from 'next/link';

interface AdminCompanyVacancyProps {
  name: string;
  cnpj: string;
  responsible: string;
  email: string;
  phone: string;
}

const AdminCompanyVacancy: React.FC<AdminCompanyVacancyProps> = ({ name, cnpj, responsible, email, phone }) => {
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
          <button>
            <Link
              href={'/adminCandidates'}
              className={styles.button}>
              <IoPeopleSharp />
              Ver candidatos
            </Link>
          </button>
          <button>
            <Link
              href={'/adminVacancy'}
              className={styles.button}>
              <FaEdit />
              Editar
            </Link>
          </button>
          <button>
            <FaRegTrashCan />
            Apagar
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminCompanyVacancy;
