import React from 'react'
import styles from './AdminCandidatesField.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import Link from 'next/link';

const AdminCandidatesField = () => {
  return (
    <div className={styles.grid}>
      <p>Nome</p>
      <p>Currículo</p>
      <p>E-mail</p>
      <p>Telefone</p>
      <p>Aplicado em</p>
    </div>
  )
}

export default AdminCandidatesField