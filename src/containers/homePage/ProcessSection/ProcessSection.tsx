import React from "react";
import styles from "./ProcessSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import ProcessCard from "@/components/homePage/ProcessCard/ProcessCard";

const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <div className="container section">
        <SectionHeading
          subheading="contrate em"
          heading=" 3 passos simples"
          variant="center"
        />
        <div className={styles.cardsContainer}>
          <ProcessCard
            icon={"https://cdn-icons-png.flaticon.com/512/69/69544.png"}
            title={"Contato"}
            description={"Avaliamos suas necessidades e encontramos o perfil que sua empresa precisa!"}
          />
          <ProcessCard
            icon={"https://cdn-icons-png.flaticon.com/512/69/69544.png"}
            title={"Poupe Tempo"}
            description={"Deixe a triagem de currículos, testes e entrevistas com a gente."}
          />
          <ProcessCard
            icon={"https://cdn-icons-png.flaticon.com/512/69/69544.png"}
            title={"Recomendação"}
            description={"Receba relatórios sobre os melhores candidatos: a decisão é sua!"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
