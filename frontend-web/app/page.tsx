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
import { Button } from '@mui/material';

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
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: '1.25rem',
                    padding: 'auto',
                  }}
                  onClick={() => {
                    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Oferecer vagas
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontSize: '1.25rem',
                  }}
                  onClick={() => {
                    window.location.href = "/vacancies";
                  }}
                >
                  Ver vagas
                </Button>
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
              job={'Estagiário de Contabilidade'}
              company={'Menconi Contabilidade'}
              payment={'1.000,00/mês + R$ 230/mês VR'}
              sector={'Contabilidade'}
              modality={'Presencial'}
              workHours={'Meio Período'}
              workSchedule={'Seg. a Sex. - 10h00 às 17h00'}
              location={'Centro, Pindamonhangaba - SP'}
              requirements={'Estar cursando a partir do 3º semestre: Administração, Ciências Contábeis ou áreas correlatas • Pacote Office básico • Organização • Proatividade'}
              activities={'Atuar nas rotinas gerais e prestar suporte aos departamentos contábil, pessoal e fiscal.'}
            />
            <JobCard
              id={2}
              job={'Analista de Marketing Digital'}
              company={'Agência Criativa'}
              payment={'3.500,00/mês + Benefícios'}
              sector={'Marketing'}
              modality={'Híbrido'}
              workHours={'Integral'}
              workSchedule={'Seg. a Sex. - 09h00 às 18h00'}
              location={'Jardins, São Paulo - SP'}
              requirements={'Formação em Marketing, Publicidade ou áreas correlatas • Criatividade • Boa comunicação'}
              activities={'Planejar e executar campanhas de marketing digital, gerenciar redes sociais, otimizar conteúdo para SEO e analisar métricas para melhorar resultados.'}
            />
            <JobCard
              id={3}
              job={'Assistente de RH'}
              company={'Grupo Excelência'}
              payment={'2.800,00/mês + VT + VA'}
              sector={'Recursos Humanos'}
              modality={'Presencial'}
              workHours={'Integral'}
              workSchedule={'Seg. a Sex. - 08h00 às 17h00'}
              location={'Centro, Belo Horizonte - MG'}
              requirements={'Formação completa em Gestão de RH, Psicologia ou áreas correlatas • Conhecimento em processos de R&S'}
              activities={'Apoiar nos processos de recrutamento e seleção, treinamento e desenvolvimento, e administração de benefícios.'}
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
      <section id="contacts" className={styles.contact}>
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
              link={'mailto:https://w.app/sqSG8Z'}
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
