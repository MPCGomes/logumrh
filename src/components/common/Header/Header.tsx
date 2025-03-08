"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { WhatsApp, Menu, Close } from "@mui/icons-material";
import styles from "./Header.module.scss";

const WHATSAPP_NUMBER = "5512974096393";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <Link href="/" passHref>
            <Image
              src="/assets/logo_horizontal.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            <Link href="/jobs" className={styles.navLink}>
              Vagas
            </Link>
            <Button onClick={() => window.open(whatsappLink, "_blank")}>
              <WhatsApp fontSize="small" />
              <span className={styles.buttonText}>+55 12 97409-6393</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className={styles.menuButton} onClick={handleMenuToggle}>
            <Menu fontSize="large" />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {/* Close Button */}
          <button className={styles.closeButton} onClick={handleMenuToggle}>
            <Close fontSize="large" />
          </button>

          <nav className={styles.mobileNav}>
            <Link
              href="/"
              className={styles.mobileNavLink}
              onClick={handleMenuToggle}
            >
              Início
            </Link>
            <Link
              href="/jobs"
              className={styles.mobileNavLink}
              onClick={handleMenuToggle}
            >
              Vagas
            </Link>
            <Button onClick={() => window.open(whatsappLink, "_blank")}>
              <WhatsApp fontSize="small" />
              <span>+55 12 97409-6393</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
