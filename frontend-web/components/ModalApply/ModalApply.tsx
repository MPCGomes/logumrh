import React from "react";
import styles from './ModalApply.module.scss'
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Button } from "@mui/material";

interface ModalApplyProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalApply: React.FC<ModalApplyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>Selecione seu currículo</p>
        <form className={styles.cvContainer}>
          <label className={styles.radioCard}>
            <input
              type="radio"
              name="option"
              value="option1"
            />
            <div className={styles.cardContent}>
              <h3>Atendimento</h3>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405" alt="" />
            </div>
          </label>
          <label className={styles.radioCard}>
            <input
              type="radio"
              name="option"
              value="option2"
            />
            <div className={styles.cardContent}>
              <h3>Administrativo</h3>
              <img src="https://cdn-images.livecareer.com.br/pages/word_lc_br_1.jpg" alt="" />
            </div>
          </label>
          <label className={styles.radioCard}>
            <input
              type="radio"
              name="option"
              value="option3"
            />
            <div className={styles.cardContent}>
              <h3>Informática</h3>
              <img src="https://www.meucurriculoperfeito.com.br/wp-content/uploads/sites/6/2024/04/Curriculum-vitae-para-primeiro-emprego.svg" alt="" />
            </div>
          </label>
        </form>
        <form className={styles.locationContainer}>
          <h3>Você reside em Pindamonhangaba?</h3>
          <input
            type="radio"
            name="imagem"
            id="i1"
          />
          <label htmlFor="i1">
            Sim
          </label>
          <input
            type="radio"
            name="imagem"
            id="i2"
          />
          <label htmlFor="i2">
            Não
          </label>
        </form>
        <form className={styles.locationContainer}>
          <h3>Você está matriculado em curso superior em administração, <br></br>
            contabilidade ou áreas correlatadas?</h3>
          <input
            type="radio"
            name="imagem"
            id="j1"
          />
          <label htmlFor="j1">
            Sim
          </label>
          <input
            type="radio"
            name="imagem"
            id="j2"
          />
          <label htmlFor="j2">
            Não
          </label>
        </form>
        <div className={styles.buttonContainer}>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
          >
            Fechar
          </Button>
          <Button
            variant="contained"
            color="secondary"
          >
            Candidatar-se
          </Button>

        </div>
      </div>
    </div >
  );
};

export default ModalApply;