"use client";

import { FC, useEffect, useState } from "react";
import styles from "./ServicesSection.module.scss";
import Button from "@/components/common/Button/Button";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import ServiceCard from "@/components/homePage/ServiceCard/ServiceCard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const WHATSAPP_NUMBER = "5512981924558";
const WHATSAPP_MESSAGE = "Olá, estou interessado nos seus serviços!";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const services = [
  {
    src: "https://assets.shiftbase.com/hubfs/6a0fa8af-1b1a-4f25-aa51-3ae2579d4e95%5B1%5D.jpeg",
    title: "Pacotes",
    description: "Descrição de Cargos",
    features: [
      "Adequação de CBO",
      "Levantamento de funções",
      "Mapeamento de competências",
      "Descrição completa",
      "Redução de riscos trabalhistas",
    ],
    icon: <ListAltOutlinedIcon sx={{ fontSize: 45 }} />,
  },
  {
    src: "/assets/job-interview.jpg",
    title: "Pacotes",
    description: "Recrutamento e Seleção",
    features: [
      "Levantamento de perfil",
      "Captação e triagem de currículos",
      "Aplicação de testes técnicos",
      "Entrevistas por competências",
      "Relatórios personalizados",
    ],
    icon: <PeopleAltOutlinedIcon sx={{ fontSize: 45 }} />,
  },
];

const ServicesSection: FC = () => {
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
    <section className="grayBackground">
      <div className="container section">
        <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className={styles.textContainer}>
          <SectionHeading
            variant={variant}
            subheading="compre 1, leve 2"
            heading="nossos serviços"
          />
          <p className={styles.description}>
            Evite processos trabalhistas com nosso plano de Descrição de Cargos
            e contrate os melhores talentos com nossos planos de Recrutamento e
            Seleção.
            <br />
            <br />
            <strong>Bônus exclusivo:</strong> Ao contratar um pacote de
            Recrutamento e Seleção, sua empresa ganha uma Descrição de Cargo
            GRATUITA!
          </p>
          <Button
            variant="contained"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;
