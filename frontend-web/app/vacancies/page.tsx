"use client";

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard/JobCard';
import CustomPagination from '@/components/Pagination/Pagination';
import SearchBar from '@/components/SearchBar/SearchBar';
import Dropdown from '@/components/Dropdown/Dropdown';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.scss';

const Vacancies: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const pageFromQuery = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(pageFromQuery);
  }, [searchParams]);

  const vacancies = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    vacancy: 'Título',
    firm: 'Empresa',
    salary: 1500,
    sector: 'Setor',
    modality: 'Modalidade',
    period: 'Período',
    scale: 'Escala',
    location: 'Rua, Número - Bairro, Cidade - UF',
    requirements: 'Requisitos.',
    activities:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis?',
  }));

  const itemsPerPage = 9;
  const totalPages = Math.ceil(vacancies.length / itemsPerPage);
  const displayedVacancies = vacancies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.replace(`?page=${page}`);
  };

  const dropdownOptions = [
    ['Última semana', 'Último mês'],
    ['Empresa A', 'Empresa B', 'Empresa C'],
    ['Presencial', 'Híbrido', 'Remoto'],
    ['Pindamonhangaba', 'Caraguatatuba', 'São Sebastião', 'Ubatuba'],
    ['Estágio', 'Contrato', 'Trainee', 'Integral', 'Jovem Aprendiz'],
  ];

  const dropdownPlaceholders = [
    'Data do Anúncio',
    'Empresa',
    'Modalidade',
    'Localidade',
    'Tipo'
  ];

  return (
    <section className="container paddingSection">
      <div className={styles.centeredElements}>
        <SearchBar placeholder="Pesquisar vaga..." />
        <div className={styles.dropdownContainer}>
          {dropdownOptions.map((options, index) => (
            <Dropdown
              key={index}
              placeholder={dropdownPlaceholders[index]}
              options={options}
            />
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {displayedVacancies.map((vacancy) => (
          <JobCard key={vacancy.id} {...vacancy} />
        ))}
      </div>
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Vacancies;
