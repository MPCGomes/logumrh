import styles from './page.module.scss'
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ContactCard from '@/components/ContactCard/ContactCard';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image'
import ButtonSecondary from '@/components/ButtonSecondary/ButtonSecondary';
import CTACard from '@/components/CTACard/CTACard';

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
              <h2>
                A melhor solução em recrutamento e seleção para sua empresa
              </h2>
              <div className={styles.btnGroup}>
                <ButtonPrimary
                  text="Oferecer vagas"
                />
                <ButtonSecondary
                  text="Ver vagas"
                />
              </div>
            </div>
            <Image
              src="./hero-img.svg"
              alt=""
              height={470}
              width={470}
            />
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
            <h4 className='subtitle lightColor'> Nossas vagas</h4>
            <h3 className='title lightColor'>Últimas Vagas</h3>
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

      {/* Qualidades  */}
      <section className={styles.ourQualities}>
        <div className='container paddingSection'>
          <img
            src="./quality-image.jpg"
            alt=""
          />
          <div className={styles.qualityGroup}>
            <div className={styles.qualityTitle}>
              <h4 className='subtitle darkColor'>Por que a Logum?</h4>
              <h3 className='title darkColor'>Nossos Diferenciais</h3>
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

      {/* CTA Cards  */}
      <section className={styles.ctaCards}>
        <div className='container paddingSection'>
          <div className='sectionTitle'>
            <h4 className='subtitle darkColor'>
              Descubra o serviço que atende às suas necessidades
            </h4>
            <h3 className='title darkColor'>
              Nossas Áreas de Atuação
            </h3>
          </div>
          <div className={styles.cardsContainer}>
            <CTACard
              title={'Quero me cadastrar'}
              description={'Quero me cadastrar'}
              link={''}
              button={'Sou empresa'}
              background={'#3a2640'}
              color={'#3a2640'}
            />
            <CTACard
              title={'Quero me cadastrar'}
              description={'Quero me cadastrar'}
              link={''}
              button={'Sou candidato'}
              background={'#7e053a'}
              color={'#7e053a'}
            />
          </div>

        </div>
      </section>

      <CTA />

      <section className={styles.about}>
        <div className='container paddingSection'>
          <div className={styles.aboutGroup}>
            <div className={styles.aboutTitle}>
              <h4 className='subtitle darkColor'>
                Sobre nós
              </h4>
              <h3 className='title darkColor'>
                Consultoria em RH: Tecnologia e Humanização
              </h3>
            </div>
            <p>
              A Logum é uma consultoria de Recursos Humanos que integra tecnologia e humanização em seus processos. Especializada em Recrutamento e Seleção, conecta talentos às necessidades dos clientes com soluções personalizadas para fortalecer equipes e impulsionar o desenvolvimento organizacional.
            </p>
          </div>
          <img
            src="./quality-image.jpg"
            alt=""
          />
        </div>
      </section>

      <section className={styles.contact}>
        <div className='container paddingSection'>
          <h3 className='subtitle'>
            Entre em Contato
          </h3>
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
