import React from 'react'
import styles from './AdminCompanyField.module.scss'
import { TbDotsVertical } from "react-icons/tb";

interface AdminCompanyFieldProps {
  name: string;
  cnpj: string;
  responsible: string;
  email: string;
  phone: string;
}

const AdminCompanyField: React.FC<AdminCompanyFieldProps> = ({ name, cnpj, responsible, email, phone }) => {
  return (
    <div className={styles.grid}>
      <p>{name}</p>
      <p>{cnpj}</p>
      <p>{responsible}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button>
        <TbDotsVertical />
      </button>
    </div>
  )
}

export default AdminCompanyField