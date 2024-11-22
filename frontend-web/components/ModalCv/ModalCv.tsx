import React from "react";
import styles from './ModalCv.module.scss'
import { IoPrintSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";

interface ModalCvProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCv: React.FC<ModalCvProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.text}>
          <p>Fulano de Tal</p>
          <div>
            <button>
              <IoPrintSharp />
            </button>
            <button>
              <FaDownload />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405"
            alt=""
          />
        </div>
        <p
          onClick={onClose}
          className={styles.closeButton}
        >
          Fechar
        </p>
      </div>
    </div >
  );
};

export default ModalCv;
