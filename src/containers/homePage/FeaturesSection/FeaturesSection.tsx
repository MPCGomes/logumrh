"use client";

import { FC, useEffect, useState } from "react";
import styles from "./FeaturesSection.module.scss";
import Button from "@/components/common/Button/Button";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import FeatureCard from "@/components/homePage/FeatureCard/FeatureCard";

import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

const WHATSAPP_NUMBER = "5512974096393";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const features = [
  {
    title: "Equipe Especializada",
    description: "Processos conduzidos por profissionais qualificados.",
    icon: <GroupsRoundedIcon />,
  },
  {
    title: "Planos Rápidos e Flexíveis",
    description: "Opções de contratação em até 2 semanas.",
    icon: <ScheduleRoundedIcon />,
  },
  {
    title: "Serviço Personalizado",
    description: "Cada negócio, uma solução.",
    icon: <HandshakeRoundedIcon />,
  },
  {
    title: "Tecnologia e Humanização",
    description: "Eficiência tecnológica, seleção humanizada.",
    icon: <SmartToyRoundedIcon />,
  },
  {
    title: "Contratações Assertivas",
    description: "Decida entre os melhores e evite a alta rotatividade.",
    icon: <HowToRegRoundedIcon />,
  },
  {
    title: "Economia de Tempo e Dinheiro",
    description: "Cuidamos da burocracia, você foca na gestão.",
    icon: <SavingsRoundedIcon />,
  },
];

const FeaturesSection: FC = () => {
  const [variant, setVariant] = useState<"start" | "center">("center");

  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth >= 1024 ? "start" : "center");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container section">
      <div className={styles.featureContainer}>
        <div className={styles.textContainer}>
          <SectionHeading
            subheading="conheça a"
            heading="logum recursos humanos"
            variant={variant}
          />
          <p className={styles.description}>
            Somos pioneiros em Recursos Humanos em Caraguatatuba, atendendo
            empresas do Litoral Norte e Vale do Paraíba com soluções
            estratégicas para contratações assertivas e confiáveis.
          </p>
          <Button
            variant="contained"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Fale Conosco
          </Button>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
