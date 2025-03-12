import { FC } from "react";
import styles from "./ProcessSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import ProcessCard from "@/components/homePage/ProcessCard/ProcessCard";

const steps = [
  {
    icon: "/assets/balloon-icon.svg",
    title: "Contato",
    description:
      "Avaliamos suas necessidades e encontramos o perfil ideal para sua empresa.",
  },
  {
    icon: "/assets/clock-icon.svg",
    title: "Poupe Tempo",
    description:
      "Deixe a triagem de currículos, testes e entrevistas com a gente.",
  },
  {
    icon: "/assets/person-icon.svg",
    title: "Recomendação",
    description:
      "Receba relatórios sobre os melhores candidatos: a decisão é sua!",
  },
];

const ProcessSection: FC = () => (
  <section className={styles.processSection}>
    <div className="container section">
      <SectionHeading
        subheading="contrate em"
        heading="3 passos simples"
        variant="center"
      />
      <div className={styles.cardsContainer}>
        {steps.map((step, index) => (
          <ProcessCard key={index} {...step} />
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
