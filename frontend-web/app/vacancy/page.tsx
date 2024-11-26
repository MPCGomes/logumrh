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
          <p className={styles.title}>Estagiário de Contabilidade</p>
          <p>Menconi Contabilidade • Contabilidade</p>
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
          R$ 1.000,00/mês + R$ 230/mês VR
        </p>
        <p>
          <span>
            <FaBriefcase />
          </span>
          Presencial • Meio Período
        </p>
        <p>
          <span>
            <FaClock />
          </span>
          Seg. a Sex. - 10h00 às 17h00
        </p>
        <p>
          <span>
            <FaLocationDot />
          </span>
          Centro, Pindamonhangaba - SP
        </p>
      </div>

      <hr className={styles.hrLine} />

      <div className={styles.requirements}>
        <p className={styles.title}>Requisitos</p>
        <p>
          Estar cursando a partir do 3º semestre: Administração, Ciências Contábeis ou áreas correlatas • Pacote Office básico • Organização • Proatividade
        </p>
      </div>

      <div className={styles.activities}>
        <p className={styles.title}>Síntese do Cargo</p>
        <p>
          Atuar nas rotinas gerais e prestar suporte aos departamentos contábil, pessoal e fiscal.
        </p>
      </div>

      <div className={styles.activities}>
        <p className={styles.title}>Atividades</p>
        <ul className={styles.list}>
          <li>
            Realização de lançamentos contábeis
          </li>
          <li>Processamento de lançamentos de folha de pagamento</li>
          <li>Execução de lançamentos fiscais</li>
          <li>Análise e levantamento da situação fiscal dos clientes</li>
          <li>Emissão de certidões fiscais e outras documentações</li>
          <li>Organização e manutenção de arquivos digitais</li>
        </ul>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: '1.25rem',
            padding: 'auto',
          }}
          onClick={openModal}
        >
          Aplicar
        </Button>
      </div>

      <ModalApply isOpen={isModalOpen} onClose={closeModal} onApply={function (): void {
        throw new Error("Function not implemented.");
      }} />
    </section>
  );
};

export default Page;
