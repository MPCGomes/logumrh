'use client';

import styles from './page.module.scss'
import ContactCard from '@/components/ContactCard/ContactCard';
import JobCard from '@/components/JobCard/JobCard';
import CTA from '@/components/CTA/CTA';
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp, IoIosPeople } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import CustomButton from '@/components/CustomButton/CustomButton';

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.heroContainer}>
              <h1>
                Humanizando Processos,
                Alavancando Negócios
              </h1>
              <p>
                Somos a sua melhor solução para recrutamento e seleção.
                Quer poupar tempo e encontrar o candidato certo?
                Deixe isso com a gente!
              </p>
              <div className={styles.btnGroup}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Oferecer vagas
                </CustomButton>
                <CustomButton
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    window.location.href = "/vacancies";
                  }}
                >
                  Ver vagas
                </CustomButton>
              </div>
            </div>
            <img
              src="./hero-img.png"
              alt=""
              height={470}
              width={470}
            />
          </div>
          <div className={styles.lastVacancies}>
            <a href='#recentVacancies'>
              Você é um <strong>candidato</strong>? confira abaixo as nossas <strong>Últimas vagas</strong>!
            </a>
            <p className={styles.bounce}>
              <GoArrowDown />
            </p>
          </div>
        </div>
      </header>

      {/* Vagas  */}
      <section
        id='recentVacancies'
        className={styles.vacancies}
      >
        <div className='container paddingSection'>
          <div className='sectionTitle'>
            <h4 className='subtitle lightText'> Nossas vagas</h4>
            <h3 className='title lightText'>Últimas Vagas</h3>
          </div>
          <div className={styles.recentVacancies}>
            <JobCard
              id={1}
              job={'Vaga'}
              company={'Empresa'}
              payment={'0.000,00/mês'}
              sector={'Setor'}
              modality={'Modalidade'}
              workHours={'Período'}
              workSchedule={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
              activities={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut dui eu mauris pellentesque consequat. Donec placerat velit at quam.'}
            />
            <JobCard
              id={1}
              job={'Vaga'}
              company={'Empresa'}
              payment={'0.000,00/mês'}
              sector={'Setor'}
              modality={'Modalidade'}
              workHours={'Período'}
              workSchedule={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
              activities={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut dui eu mauris pellentesque consequat. Donec placerat velit at quam.'}
            />
            <JobCard
              id={1}
              job={'Vaga'}
              company={'Empresa'}
              payment={'0.000,00/mês'}
              sector={'Setor'}
              modality={'Modalidade'}
              workHours={'Período'}
              workSchedule={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
              activities={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut dui eu mauris pellentesque consequat. Donec placerat velit at quam.'}
            />
          </div>
          <div className={styles.viewMoreButton}>
            <CustomButton
              variant="negativeOutlined"
              onClick={() => {
                window.location.href = "/vacancies";
              }}
            >
              Ver mais vagas
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className={styles.about}>
        <div className='container paddingSection'>
          <div className={styles.aboutGroup}>
            <div className={styles.aboutTitle}>
              <h4 className='subtitle darkText'>
                Sobre nós
              </h4>
              <h3 className='title darkText'>
                Consultoria em RH: Tecnologia e Humanização
              </h3>
            </div>
            <p>
              A Logum é uma consultoria de Recursos Humanos que integra tecnologia e humanização em seus processos. Especializada em Recrutamento e Seleção, conecta talentos às necessidades dos clientes com soluções personalizadas para fortalecer equipes e impulsionar o desenvolvimento organizacional.
            </p>
          </div>
          <div className={styles.imgHoverZoom}>
            <img
              src="./about-image.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className='container paddingSection'>
        <div className='sectionTitle'>
          <h4 className='subtitle darkText'>
            Descubra o serviço que atende às suas necessidades
          </h4>
          <h3 className='title darkText'>
            Nossos Serviços
          </h3>
        </div>
        <div className={styles.servicesCards}>
          <ServiceCard
            icon={<IoIosPeople />}
            title={'Recrutamento e Seleção'}
            description={'Alinhamento de perfil, captação e triagem de currículos, testes técnicos, testes comportamentais, entrevistas por competências, relatórios personalizados.'}
          />
          <ServiceCard
            icon={<IoIosPeople />}
            title={'Descrição de Cargos'}
            description={'Elaboração da documentação formal de Cargos e Salários, levantamento das atribuições de um cargo, mapeamento de competências (Conhecimentos, Habilidades e Atitudes), sumarização das informações financeiras de cargos.'}
          />
          <ServiceCard
            icon={<IoIosPeople />}
            title={'Indicadores de RH'}
            description={'Mapeamento de dados numéricos relacionados ao desempenho dos processos de gestão e resultados dos processos seletivos da empresa.'}
          />
        </div>
      </section>

      <CTA />

      {/* Qualidades  */}
      <section className={styles.qualities}>
        <div className='container paddingSection'>
          <span className={styles.imgHoverZoom}>
            <img
              src="./quality-image.jpg"
              alt=""
            />

          </span>
          <div className={styles.qualityGroup}>
            <div className={styles.qualityTitle}>
              <h4 className='subtitle darkText'>Por que a Logum?</h4>
              <h3 className='title darkText'>Nossos Diferenciais</h3>
            </div>
            <ul className={styles.qualityList}>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Processo Humanizado
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Serviço Especializado e Personalizado
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Cadastro Simplificado
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Cadastro de Múltiplos Currículos em PDF
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contatos */}
      <section className={styles.contact}>
        <div className='container paddingSection'>
          <div className='sectionTitle'>
            <h4 className='subtitle darkText'> Deixe uma mensagem</h4>
            <h3 className='title darkText'>Entre em Contato</h3>
          </div>
          <div className={styles.contactContainer}>
            <ContactCard
              icon={<IoMail />}
              title={'E-mail'}
              contact={'logumrh@gmail.com.br'}
              link={'#'}
            />
            <ContactCard
              icon={<IoLogoWhatsapp />}
              title={'WhatsApp'}
              contact={'(12) 97409-6393'}
              link={'#'}
            />
            <ContactCard
              icon={<FaLinkedin />}
              title={'Linkedin'}
              contact={'Logum Recursos Humanos'}
              link={'https://www.linkedin.com/company/logumrh/about/'}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
