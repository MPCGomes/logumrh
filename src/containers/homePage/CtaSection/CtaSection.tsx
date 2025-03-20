"use client";

import { FC } from "react";
import styles from "./CtaSection.module.scss";
import Button from "@/components/common/Button/Button";

const WHATSAPP_NUMBER = "5512974096393";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const CtaSection: FC = () => (
  <section className={styles.ctaSection}>
    <div className="container">
      <p>
        Toque no botão para falar conosco por WhatsApp e agende um atendimento
        agora mesmo!
      </p>
      <Button
        variant="outlined"
        onClick={() => window.open(whatsappLink, "_blank")}
      >
        Fale Conosco
      </Button>
    </div>
  </section>
);

export default CtaSection;
