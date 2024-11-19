import styles from './page.module.scss'
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ContactCard from '@/components/ContactCard/ContactCard';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp, IoIosPeople } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import ButtonSecondary from '@/components/ButtonSecondary/ButtonSecondary';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.heroContainer}>
              <h1>
                Conectando Talentos ao Seu Sucesso
              </h1>
              <p>
                Somos a sua melhor solução para o recrutamento e seleção.
                Quer poupar tempo e encontrar o candidato certo?
                Deixe isso com a gente!
              </p>
              <div className={styles.btnGroup}>
                <ButtonPrimary
                  text="Oferecer vagas"
                />
                <ButtonSecondary
                  text="Ver vagas"
                />
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
            <VacancyCard
              id={1}
              vacancy={'Nome da Vaga'}
              firm={'Empresa'}
              salary={1500}
              sector={'Setor'}
              modality={'Modalidade'}
              period={'Período'}
              scale={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Requisitos'}
              activities={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis?'}
            />
            <VacancyCard
              id={2}
              vacancy={'Nome da Vaga'}
              firm={'Empresa'}
              salary={1500}
              sector={'Setor'}
              modality={'Modalidade'}
              period={'Período'}
              scale={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Requisitos'}
              activities={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis?'}
            />
            <VacancyCard
              id={3}
              vacancy={'Nome da Vaga'}
              firm={'Empresa'}
              salary={1500}
              sector={'Setor'}
              modality={'Modalidade'}
              period={'Período'}
              scale={'Escala'}
              location={'Bairro, Cidade - UF'}
              requirements={'Requisitos'}
              activities={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis?'}
            />
          </div>
          <Link
            href={'vacancies'}
            className={styles.vancacyButton}>
            <p>
              <ButtonPrimary
                text='Ver mais vagas'
              />

            </p>
          </Link>
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
          <img
            src="./about-image.jpg"
            alt=""
          />
        </div>
      </section>

      {/* Serviços */}
      <section className={styles.services}>
        <div className='container paddingSection'>
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
        </div>
      </section>

      <CTA />

      {/* Qualidades  */}
      <section className={styles.qualities}>
        <div className='container paddingSection'>
          <img
            src="./quality-image.jpg"
            alt=""
          />
          <div className={styles.qualityGroup}>
            <div className={styles.qualityTitle}>
              <h4 className='subtitle darkText'>Por que a Logum?</h4>
              <h3 className='title darkText'>Nossos Diferenciais</h3>
            </div>
            <ul className={styles.qualityList}>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Humanização
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Tecnologia
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Especialização
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Mercado Promissor
              </li>
              <li className={styles.listItem}>
                <FaCheckCircle className={styles.listIcon} />
                Serviço Personalizado
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
              contact={'logumrh@contato.com.br'}
              link={'#'}
            />
            <ContactCard
              icon={<IoLogoWhatsapp />}
              title={'WhatsApp'}
              contact={'(12) 3456-7890'}
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
