import React from "react";
import styles from './ModalApply.module.scss'
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

interface ModalApplyProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalApply: React.FC<ModalApplyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>Nome da Vaga</p>
        <form className={styles.cvContainer}>
          <label className={styles.radioCard}>
            <input
              type="radio"
              name="option"
              value="option1"
            />
            <div className={styles.cardContent}>
              <h3>Opção 1</h3>
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
              <h3>Opção 2</h3>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405" alt="" />
            </div>
          </label>
          <label className={styles.radioCard}>
            <input
              type="radio"
              name="option"
              value="option3"
            />
            <div className={styles.cardContent}>
              <h3>Opção 3</h3>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405" alt="" />
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
          <label for="i1">
            Sim
          </label>
          <input
            type="radio"
            name="imagem"
            id="i2"
          />
          <label for="i2">
            Não
          </label>
        </form>
        <form className={styles.locationContainer}>
          <h3>Você está matriculado em curso superior em administração, contabilidade ou áreas correlatadas?</h3>
          <input
            type="radio"
            name="imagem"
            id="i1"
          />
          <label for="i1">
            Sim
          </label>
          <input
            type="radio"
            name="imagem"
            id="i2"
          />
          <label for="i2">
            Não
          </label>
        </form>
        <div className={styles.buttonContainer}>
          <p
            onClick={onClose}
            className={styles.closeButton}
          >
            Fechar
          </p>
          <ButtonPrimary
            text={"Enviar"}
          />
        </div>
      </div>
    </div >
  );
};

export default ModalApply;
