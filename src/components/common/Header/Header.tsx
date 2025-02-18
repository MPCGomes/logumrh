"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { WhatsApp } from "@mui/icons-material";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const whatsappLink = `https://wa.me/5512974096393?text=Olá, estou interessado nos seus serviços!`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Image
            src="/assets/logo_horizontal.png"
            alt="Logo"
            width={150}
            height={50}
          />

          <nav className={styles.navbar}>
            <Link href="/" className={styles.navItem}>
              Início
            </Link>
            <Link href="/jobs" className={styles.navItem}>
              Vagas
            </Link>
          </nav>

          <Button onClick={() => window.open(whatsappLink, "_blank")}>
            <WhatsApp fontSize="small" />
            <span className={styles.buttonText}>+55 12 97409-6393</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
