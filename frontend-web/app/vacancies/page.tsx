import React from 'react';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
import styles from './page.module.scss';

const vacancies = [
  {
    id: 1,
    vacancy: 'Desenvolvedor Front-end',
    firm: 'Tech Solutions',
    sector: 'Tecnologia',
    modality: 'Tempo Integral',
    period: 'Turno da Manhã',
    scale: '40 horas/semana',
    location: 'São Paulo, SP',
    requirements: 'Experiência com JavaScript, React, CSS.',
    activities: 'Desenvolver e manter aplicações web.'
  },
  {
    id: 2,
    vacancy: 'Especialista em Marketing',
    firm: 'Marketing Pros',
    sector: 'Marketing',
    modality: 'Meio Período',
    period: 'Turno da Tarde',
    scale: '20 horas/semana',
    location: 'Rio de Janeiro, RJ',
    requirements: 'Conhecimento em ferramentas de marketing digital.',
    activities: 'Gerenciar campanhas e redes sociais.'
  },
  {
    id: 3,
    vacancy: 'Designer Gráfico',
    firm: 'Creative Minds',
    sector: 'Design',
    modality: 'Remoto',
    period: 'Flexível',
    scale: '30 horas/semana',
    location: 'Remoto',
    requirements: 'Proficiência com Adobe Creative Suite.',
    activities: 'Criar conceitos visuais para clientes.'
  },
  {
    id: 4,
    vacancy: 'Analista de Dados',
    firm: 'Data Insights',
    sector: 'Tecnologia',
    modality: 'Tempo Integral',
    period: 'Turno da Tarde',
    scale: '40 horas/semana',
    location: 'Belo Horizonte, MG',
    requirements: 'Experiência com SQL, Python, Power BI.',
    activities: 'Analisar e interpretar dados para relatórios.'
  },
  {
    id: 5,
    vacancy: 'Gestor de Projetos',
    firm: 'Enterprise Co.',
    sector: 'Consultoria',
    modality: 'Tempo Integral',
    period: 'Turno Integral',
    scale: '40 horas/semana',
    location: 'Curitiba, PR',
    requirements: 'Conhecimento em gestão ágil e metodologias PM.',
    activities: 'Gerenciar e coordenar projetos estratégicos.'
  },
  {
    id: 6,
    vacancy: 'Suporte Técnico',
    firm: 'Tech Assist',
    sector: 'Tecnologia',
    modality: 'Meio Período',
    period: 'Turno da Noite',
    scale: '20 horas/semana',
    location: 'Fortaleza, CE',
    requirements: 'Conhecimento em redes e suporte técnico.',
    activities: 'Atender e resolver problemas técnicos dos clientes.'
  }
];

const Vacancies: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.grid}>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} {...vacancy} />
        ))}
      </div>
    </div>
  )
}

export default Vacancies;