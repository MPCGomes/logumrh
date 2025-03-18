"use client";

import { FC, useState, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string | null;
  jobId: string | null;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null as File | null,
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFileDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFormData((prev) => ({
        ...prev,
        file: droppedFile,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.file
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setIsSending(true);
    setError("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("jobTitle", jobTitle || "");
    formDataToSend.append("jobId", jobId || "");
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("/submit_application.php", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.text();

      if (result.includes("success")) {
        alert("E-mail enviado com sucesso!");
        setFormData({ name: "", email: "", phone: "", file: null });
        onClose();
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setError("Erro ao enviar. Tente novamente.");
    }

    setIsSending(false);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.textContainer}>
          <StickyNote2OutlinedIcon sx={{ fontSize: 40 }} />
          <h2 className={styles.modalTitle}>
            {jobTitle} - ID {jobId}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          encType="multipart/form-data"
        >
          <label className={styles.label}>
            Nome:
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <div className={styles.contactInfo}>
            <label className={styles.label}>
              E-mail:
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Telefone:
              <input
                className={styles.input}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Updated Upload Button with Drag-and-Drop Support */}
          <label
            className={styles.inputUpload}
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <CloudUploadOutlinedIcon
              sx={{ fontSize: 40, color: "var(--primary)" }}
            />
            <p>Selecionar ou Arrastar Arquivo</p>
            <input
              ref={fileInputRef}
              className={styles.hiddenInput}
              type="file"
              name="file"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
            {formData.file && (
              <p className={styles.fileName}>{formData.file.name}</p>
            )}
          </label>

          {error && <p className={styles.error}>{error}</p>}
          <hr />
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonCancel}
              type="button"
              onClick={onClose}
              disabled={isSending}
            >
              Cancelar
            </button>
            <button
              className={styles.button}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
