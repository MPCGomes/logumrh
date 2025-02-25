"use client";

import React from "react";
import styles from "./FaqSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import FaqCard from "@/components/homePage/FaqCard/FaqCard";

const faqs = [
  {
    question: "Qual o endereço da Logum?",
    answer:
      "A Logum RH está localizada em Caraguatatuba - SP, com serviços que abrangem o Litoral Norte e o Vale do Paraíba. Não possuímos espaço físico, todos os processos são desenvolvidos de forma digital.",
  },
  {
    question: "Quanto custa?",
    answer:
      "A precificação dos serviços de Recrutamento e Seleção (R&S) da Logum é definida com base na remuneração bruta do cargo a ser contratado, utilizando percentuais variáveis conforme o prazo estipulado para a conclusão da contratação. Para o serviço de Descrição de Cargos, a Logum oferece pacotes fixos, cada um com um número limite de cargos a serem descritos, garantindo flexibilidade e adequação às necessidades da empresa.",
  },
  {
    question:
      "A Logum possui um escritório físico para atendimento presencial?",
    answer:
      "Não, a Logum RH atua de forma 100% digital, com processos de Recrutamento e Seleção (R&S) e Descrição de Cargos desenvolvidos remotamente.",
  },
  {
    question: "A Logum atende apenas empresas de Caraguatatuba?",
    answer:
      "Não, nossa atuação abrange todo o Litoral Norte e Vale do Paraíba, podendo atender empresas de outras regiões por meio de processos totalmente digitais.",
  },
  {
    question: " A Logum trabalha com quais formas de pagamento?",
    answer:
      "Os pagamentos podem ser realizados via transferência bancária ou PIX, conforme acordado no fechamento do serviço.",
  },
  {
    question: "Quanto tempo leva um processo de recrutamento e seleção?",
    answer:
      "O tempo pode variar conforme o perfil do cargo e a urgência da contratação. Nossa equipe trabalha para apresentar os melhores candidatos dentro do prazo estabelecido pela empresa.",
  },
  {
    question: "Como funciona a descrição de cargos?",
    answer:
      "O serviço de Descrição de Cargos da Logum RH começa com o encaminhamento de um questionário completo aos funcionários para coleta detalhada das atividades desempenhadas. Com base nessas informações, nossos profissionais realizam pesquisas e adequações ao Código Brasileiro de Ocupações (CBO), garantindo alinhamento com as melhores práticas do mercado. Em seguida, estruturamos a descrição do cargo, incluindo o mapeamento de competências. Após a elaboração, o documento é enviado à empresa para validação e ajustes finais, assegurando que esteja adequado às necessidades organizacionais.",
  },
  {
    question: "Como funciona o Recrutamento e Seleção?",
    answer:
      "O processo de Recrutamento e Seleção (R&S) da Logum RH começa com uma reunião com o gestor para alinhamento do perfil e levantamento das necessidades da vaga. Em seguida, realizamos o mapeamento do perfil ideal e a divulgação estratégica da oportunidade. Após a triagem de currículos, aplicamos os testes necessários e conduzimos entrevistas por competências de forma sequencial. Os candidatos mais qualificados são apresentados à empresa por meio de relatórios detalhados, permitindo que o gestor faça a escolha final.",
  },
];

const FaqSection: React.FC = () => {
  return (
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
};

export default FaqSection;
