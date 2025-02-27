"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import emailjs from "emailjs-com";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string | null;
  jobId: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null as File | null,
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const EMAILJS_SERVICE_ID = "service_xv7reo3";
  const EMAILJS_TEMPLATE_ID = "template_dqrlfjx";
  const EMAILJS_PUBLIC_KEY = "9VCW66jcVzVwu_oaW";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const uploadFile = async () => {
    if (!formData.file) return null;

    const fileData = new FormData();
    fileData.append("file", formData.file);

    try {
      const response = await fetch("https://store1.gofile.io/uploadFile", {
        method: "POST",
        body: fileData,
      });

      const result = await response.json();

      if (result.status === "ok") {
        return result.data.downloadPage;
      } else {
        throw new Error("Erro ao fazer upload no GoFile.io");
      }
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      setError("Erro ao enviar o anexo.");
      return null;
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

    const fileUrl = await uploadFile();
    if (!fileUrl) {
      setError("Erro ao fazer upload do anexo.");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          id: jobId,
          jobTitle: jobTitle,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          file_url: fileUrl,
        },
        EMAILJS_PUBLIC_KEY
      );

      alert("E-mail enviado com sucesso!");
      setFormData({ name: "", email: "", phone: "", file: null });
      onClose();
    } catch (err) {
      console.error("Erro ao enviar o e-mail:", err);
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
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <label className={styles.label}>
            Currículo:
            <input
              className={styles.inputUpload}
              type="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
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
