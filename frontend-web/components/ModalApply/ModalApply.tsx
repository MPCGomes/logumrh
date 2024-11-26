import React from "react";
import { Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import styles from './ModalApply.module.scss';

interface ModalApplyProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

const ModalApply: React.FC<ModalApplyProps> = ({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>Selecione seu currículo</p>
        <form className={styles.cvContainer}>
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            name="cvOptions"
            row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
            }}
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label={
                <div className={styles.cardContent}>
                  <h3>Nome do Currículo</h3>
                  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405" alt="" />
                </div>
              }
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label={
                <div className={styles.cardContent}>
                  <h3>Nome do Currículo</h3>
                  <img src="https://cdn-images.livecareer.com.br/pages/word_lc_br_1.jpg" alt="" />
                </div>
              }
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label={
                <div className={styles.cardContent}>
                  <h3>Nome do Currículo</h3>
                  <img src="https://www.meucurriculoperfeito.com.br/wp-content/uploads/sites/6/2024/04/Curriculum-vitae-para-primeiro-emprego.svg" alt="" />
                </div>
              }
            />
          </RadioGroup>
        </form>
        <form className={styles.locationContainer}>
          <FormLabel component="legend">Você reside em Pindamonhangaba?</FormLabel>
          <RadioGroup name="residencia">
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </form>
        <form className={styles.locationContainer}>
          <FormLabel component="legend">Você está matriculado em curso superior em administração, contabilidade ou áreas correlatas?</FormLabel>
          <RadioGroup name="matricula">
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
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
    </div>
  );
};

export default ModalApply;
