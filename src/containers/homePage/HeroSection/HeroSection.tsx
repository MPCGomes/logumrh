"use client";

import { FC } from "react";
import styles from "./HeroSection.module.scss";
import clsx from "clsx";
import Button from "@/components/common/Button/Button";
import Image from "next/image";
import ClientCarousel from "@/components/homePage/ClientCarousel/ClientCarousel";

const WHATSAPP_NUMBER = "5512974096393";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const HeroSection: FC = () => (
  <section className={clsx(styles.mainContainer, "container", "section")}>
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Processos seletivos humanizados e eficientes</h1>
        <h3>
          A melhor solução para o Recrutamento e Seleção no Litoral Norte e Vale
          do Paraíba! Economize tempo e dinheiro e encontre o candidato ideal
          com nossa equipe especializada.
        </h3>
        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Quero Contratar
          </Button>
          <Button href="/vagas">Ver Vagas</Button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/assets/hero-img.svg"
          alt="Processo de recrutamento"
          width={0}
          height={0}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>

    <div className={styles.clientsSection}>
      <div className={styles.titleContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.title}>Clientes Satisfeitos</h2>
        <div className={styles.line}></div>
      </div>
      <ClientCarousel />
    </div>
  </section>
);

export default HeroSection;
