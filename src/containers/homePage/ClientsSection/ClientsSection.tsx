"use client";

import React from "react";
import ClientCarousel from "@/components/homePage/ClientCarousel/ClientCarousel";
import styles from "./ClientsSection.module.scss";

const ClientsSection: React.FC = () => {
  return (
    <section className={styles.clients}>
      <div className="container section">
        <div className={styles.titleContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.title}>Clientes Satisfeitos</h2>
          <div className={styles.line}></div>
        </div>
        <ClientCarousel />
      </div>
    </section>
  );
};

export default ClientsSection;
