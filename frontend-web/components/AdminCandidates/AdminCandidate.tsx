'use client'

import React, { useState } from 'react'
import styles from './AdminCandidate.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import Modal from "../ModalCv/ModalCv";
import { FaDownload } from "react-icons/fa";
import { IoPrintSharp } from "react-icons/io5";


interface AdminCandidateProps {
  name: string;
  email: string;
  phone: string;
  date: string;
}

const AdminCandidate: React.FC<AdminCandidateProps> = ({ name, email, phone, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.grid}>
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
      <button>
        <TbDotsVertical />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
      </Modal>
    </div>
  )
}

export default AdminCandidate