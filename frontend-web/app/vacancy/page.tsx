import React from 'react'
import styles from './page.module.scss'
import { HiOutlineShare } from "react-icons/hi";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';

const page = () => {
  return (
    <section className={styles.vacancySection}>
      <div className='container paddingSection'>
        <div className={styles.nameContainer}>
          <div className={styles.vacancy}>
            <p className={styles.title}>
              Gerente de Negócios
            </p>
            <p>Sicred • Setor Bancário</p>
          </div>

          <div className={styles.idGroup}>
            <p>
              ID 12456
            </p>
            <button className={styles.share}>
              <HiOutlineShare />
            </button>
          </div>
        </div>

        <hr className={styles.hrLine} />

        <div className={styles.info}>
          <p>
            <span>
              <SiCashapp />
            </span>
            R$4780,68
          </p>
          <p>
            <span>
              <FaBriefcase />
            </span>
            Presencial • Integral
          </p>
          <p>
            <span>
              <FaClock />
            </span>
            Segunda a sexta 9:00h às 16:00h
          </p>
          <p>
            <span>
              <FaLocationDot />
            </span>
            Av. Armando Lombardi, 400 - Loja 103 - Petrópolis, Rio de Janeiro
          </p>
        </div>

        <hr className={styles.hrLine} />

        <div className={styles.requirements}>
          <p className={styles.title}>
            Requisitos
          </p>
          <p>
            • Mobilidade TOTAL (disponibilidade de mudança e para viagens);<br />
            • Formação Superior Completo Administração, Ciências Contábeis, Economia, Gestão Financeira ou áreas afins;<br />
            • Experiência anterior em instituição financeira;<br />
            • Possuir CPA 10;<br />
            • Possuir CNH e veículo próprio;<br />
            • Que seja ativo, dinâmico, inquieto, com comunicação, buscando crescimento pessoal e profissional.</p>
        </div>

        <div className={styles.activities}>
          <p className={styles.title}>
            Atividades
          </p>
          <p>
            Se você é apaixonado por pessoas e está no seu DNA fazer negócios venha fazer parte do nosso momento de expansão e construir o futuro da Sicredi Paranapanema Serrana PR/SP/RJ, pois nós acreditamos na COOPERAÇÃO, para gerar mais CONFIANÇA e estimular nosso PROTAGONISMO para CUIDAR DAS COMUNIDADES.
            <br />
            <br />
            O Sicredi possui presença NACIONAL com atuação REGIONAL e compromisso LOCAL. Realizando trabalho com segurança e solidez, proporcionando melhor experiência para o associado, mais proximidade e com um modelo agregador de renda no sistema ganha-ganha.
            <br />
            <br />
            Buscamos profissionais para realizar o atendimento qualificado aos associados e demais públicos de interesse, no que tange aos produtos e serviços do SICREDI, na plataforma das Agências e outros locais com potencial, a fim de apresentar soluções financeiras que atendam as necessidades do público em questão, efetivar negociações e cumprir com as metas estabelecidas.
            <br />
            <br />
            Responsabilidades e atribuições
            <br />
            · Venda de produtos e serviços;<br />
            · Visitas para geração de negócios;<br />
            · Gestão de carteira de associados;<br />
            · Análise estratégica para ações comerciais;<br />
            · Prospecção.
          </p>
        </div>
        <div className={styles.buttons}>
          <ButtonPrimary text='APLICAR' />
        </div>
      </div>

    </section>
  )
}

export default page