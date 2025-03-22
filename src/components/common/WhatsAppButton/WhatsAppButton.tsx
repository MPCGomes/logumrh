import React from "react";
import styles from "./WhatsAppButton.module.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";

const WHATSAPP_NUMBER = "5512974096393";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const WhatsAppButton = () => {
  return (
    <Link className={styles.whatsApp} href={whatsappLink} target="_blank">
      <WhatsAppIcon sx={{ fontSize: 28 }} />
    </Link>
  );
};

export default WhatsAppButton;
