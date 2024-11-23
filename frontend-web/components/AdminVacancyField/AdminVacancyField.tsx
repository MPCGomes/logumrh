import React from 'react'
import styles from './AdminVacancyField.module.scss'
import { LuPlus } from "react-icons/lu";
import Link from 'next/link';

interface AdminVacancyFieldProps {
  link: string;
}

const AdminVacancyField: React.FC<AdminVacancyFieldProps> = ({ link }) => {
  return (
    <div className={styles.grid}>
      <p>Nome</p>
      <p>CNPJ</p>
      <p>Responsável</p>
      <p>E-mail</p>
      <p>Telefone</p>
      <button>
        <Link
          className={styles.button}
          href={`${link}`}
        >
          <LuPlus />
        </Link>
      </button>
    </div>
  )
}

export default AdminVacancyField