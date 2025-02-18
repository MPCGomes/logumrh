import styles from "./FeaturesSection.module.scss";
import Button from "@/components/common/Button/Button";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import FeatureCard from "@/components/homePage/FeatureCard/FeatureCard";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="container section">
      <div className={styles.featureContainer}>
        <div className={styles.textContainer}>
          <SectionHeading
            variant="start"
            subheading="conheça a"
            heading="logum recursos humanos"
          />
          <p className={styles.description}>
            Somos pioneiros em Recursos Humanos em Caraguatatuba. Atendemos
            empresas do Litoral Norte e Vale do Paraíba com soluções
            estratégicas em Gestão de Pessoas, garantindo contratações
            assertivas e processos confiáveis.
          </p>
          <Button variant="contained">Fale conosco</Button>
        </div>
        <div className={styles.featuresGrid}>
          <FeatureCard
            title={"Equipe Especializada"}
            description={"Processos conduzidos por profissionais qualificados"}
          />
          <FeatureCard
            title={"Planos Rápidos e Flexíveis"}
            description={"Opções de contratação em até 2 semanas"}
          />
          <FeatureCard
            title={"Serviço Personalizado"}
            description={"Cada negócio, uma solução"}
          />
          <FeatureCard
            title={"Tecnologia  e Humanização"}
            description={"Eficiência tecnológica, seleção humanizada."}
          />
          <FeatureCard
            title={"Contratações Assertivas"}
            description={"Decida entre os melhores e evite a alta rotatividade"}
          />
          <FeatureCard
            title={"Economia de Tempo e Dinheiro"}
            description={"Cuidamos da burocracia e você foca na gestão"}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
