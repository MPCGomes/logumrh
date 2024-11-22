import React from 'react'
import styles from './AdminCandidatesField.module.scss'
import { LuPlus } from "react-icons/lu";
import Link from 'next/link';

const AdminCandidatesField = () => {
  return (
    <div className={styles.grid}>
      <p>Nome</p>
      <p>Currículo</p>
      <p>E-mail</p>
      <p>Telefone</p>
      <p>Aplicado em</p>
      <button>
        <Link 
        className={styles.button}
        href='adminVacancy'>
          <LuPlus />
        </Link>
      </button>
    </div>
  )
}

export default AdminCandidatesField