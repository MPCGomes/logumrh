"use client";

import { FC } from "react";
import styles from "./FaqSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import FaqCard from "@/components/homePage/FaqCard/FaqCard";

const faqs = [
  {
    question: "Qual o endereço da Logum?",
    answer:
      "A Logum RH está em Caraguatatuba - SP e atende todo o Litoral Norte e Vale do Paraíba. Não possui espaço físico, operando 100% digitalmente.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O valor do Recrutamento e Seleção (R&S) varia conforme a remuneração da vaga e o prazo da contratação. Para Descrição de Cargos, há pacotes fixos com limites de cargos.",
  },
  {
    question: "A Logum tem atendimento presencial?",
    answer:
      "Não. Atuamos de forma 100% digital, com todos os processos realizados remotamente.",
  },
  {
    question: "A Logum atende apenas em Caraguatatuba?",
    answer:
      "Não. Atendemos todo o Litoral Norte e Vale do Paraíba e podemos atender outras regiões com processos digitais.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos transferência bancária e PIX, conforme acordo no fechamento do serviço.",
  },
  {
    question: "Quanto tempo leva um processo de recrutamento?",
    answer:
      "O tempo varia conforme a vaga e a urgência. Buscamos apresentar os melhores candidatos dentro do prazo acordado.",
  },
  {
    question: "Como funciona a Descrição de Cargos?",
    answer:
      "Coletamos informações via questionário, analisamos o perfil do cargo e o alinhamos ao CBO. Depois, estruturamos e validamos o documento junto à empresa.",
  },
  {
    question: "Como funciona o Recrutamento e Seleção?",
    answer:
      "Alinhamos o perfil da vaga com o gestor, divulgamos a oportunidade, triamos currículos e realizamos entrevistas. Os melhores candidatos são apresentados em relatórios detalhados.",
  },
];

const FaqSection: FC = () => (
  <section className="container section">
    <SectionHeading
      subheading="Respostas simples para ajudar você a fazer a escolha certa"
      heading="Perguntas Frequentes"
      variant="center"
    />
    <div className={styles.faqGrid}>
      {faqs.map((faq, index) => (
        <FaqCard key={index} {...faq} />
      ))}
    </div>
  </section>
);

export default FaqSection;
