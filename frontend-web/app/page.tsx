import styles from './page.module.scss'
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import ContactCard from '@/components/ContactCard/ContactCard';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { GoArrowDown } from "react-icons/go";
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.heroContainer}>
              <h1>
                Lorem ipsum dolor<br></br>
                <span> sit amet</span>
              </h1>
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam, sit iure vero dolorum asperiores.
              </h2>
              <ButtonPrimary
                text="OFERECER VAGAS"
              />
            </div>
            <Image
              src="./hero-img.svg"
              alt=""
              height={470}
              width={470}
            />
          </div>
          <div className={styles.textGroup}>
            <a href="#recentVacancies">
              <p>
                Você é um <strong>candidato</strong>? Confira abaixo as nossas <strong>vagas</strong>!
              </p>
            </a>
            <span>
              <GoArrowDown className={styles.bounce} />
            </span>
          </div>
        </div>
      </header>
      <section
        id='recentVacancies'
        className={styles.vacancies}
      >
        <div className='container paddingSection'>
          <h3 className='subtitle'>Últimas Vagas</h3>
          <div className={styles.recentVacancies}>
            <VacancyCard
              id={1}
              vacancy={'Nome da Vaga'}
              firm={'Empresa'}
              sector={'Setor'}
              salary={1500}
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
              sector={'Setor'}
              salary={1500}
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
              sector={'Setor'}
              salary={1500}
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
      <CTA />
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
