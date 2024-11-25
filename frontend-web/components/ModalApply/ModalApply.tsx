'use client';

import React from "react";
import { Modal, Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import styles from './ModalApply.module.scss';

interface ModalApplyProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalApply: React.FC<ModalApplyProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "600px",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          overflow: "auto",
          maxHeight: "90vh",
        }}
      >
        <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
          Nome da Vaga
        </Typography>

        {/* CV Options */}
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Escolha seu currículo:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
          {["Opção 1", "Opção 2", "Opção 3"].map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Radio />}
              label={
                <Box sx={{ textAlign: "center", maxWidth: 120 }}>
                  <Typography variant="body2">{option}</Typography>
                  <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-curriculum-vitae-design-template-cd5136dd58591765d75125a12226d1cd_screen.jpg?ts=1674136405"
                    alt={option}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                      marginTop: "8px",
                    }}
                  />
                </Box>
              }
              value={option}
            />
          ))}
        </Box>

        {/* Residency */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Você reside em Pindamonhangaba?</Typography>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Sim" />
            <FormControlLabel value="no" control={<Radio />} label="Não" />
          </RadioGroup>
        </Box>

        {/* Enrollment */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">
            Você está matriculado em curso superior em administração, contabilidade ou áreas correlatadas?
          </Typography>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Sim" />
            <FormControlLabel value="no" control={<Radio />} label="Não" />
          </RadioGroup>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
          <Button variant="text" color="secondary" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" color="primary" onClick={onClose}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalApply;
