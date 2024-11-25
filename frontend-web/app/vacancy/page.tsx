"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import { HiOutlineShare } from "react-icons/hi";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import Button from "@mui/material/Button";
import ModalApply from "@/components/ModalApply/ModalApply";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="container paddingSection">
      <div className={styles.nameContainer}>
        <div className={styles.vacancy}>
          <p className={styles.title}>Vaga</p>
          <p>Empresa • Setor</p>
        </div>

        <div className={styles.idGroup}>
          <p>ID 1</p>
          <button className={styles.share}>
            <HiOutlineShare />
          </button>
        </div>
      </div>

      <hr className={styles.hrLine} />

      <div className={styles.info}>
        <p>
          <span>
            <SiCashapp />
          </span>
          R$ 0.000,00/mês
        </p>
        <p>
          <span>
            <FaBriefcase />
          </span>
          Modalidade • Período
        </p>
        <p>
          <span>
            <FaClock />
          </span>
          Escala
        </p>
        <p>
          <span>
            <FaLocationDot />
          </span>
          Bairro, Cidade - UF
        </p>
      </div>

      <hr className={styles.hrLine} />

      <div className={styles.requirements}>
        <p className={styles.title}>Requisitos</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className={styles.activities}>
        <p className={styles.title}>Atividades</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          dui eu mauris pellentesque consequat. Donec placerat velit at quam.
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={openModal}
        >
          Aplicar
        </Button>
      </div>

      <ModalApply isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Page;
