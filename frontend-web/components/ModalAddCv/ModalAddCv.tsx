'use client';

import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface ModalAddCvProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddCv: React.FC<ModalAddCvProps> = ({ isOpen, onClose }) => {
  const [cvName, setCvName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = () => {
    if (cvName && file) {
      console.log("Nome do CV:", cvName);
      console.log("Arquivo enviado:", file);
      onClose();
    } else {
      alert("Por favor, preencha o nome do CV e envie um arquivo PDF.");
    }
  };

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
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Adicionar Currículo
        </Typography>

        <TextField
          label="Nome do Currículo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cvName}
          onChange={(e) => setCvName(e.target.value)}
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Enviar arquivo (PDF)
          </Typography>
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 1 }}
          >
            Escolher arquivo
            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {file && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              Arquivo selecionado: {file.name}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
          <Button variant="text" color="secondary" onClick={onClose}>
            Fechar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!cvName || !file}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAddCv;
