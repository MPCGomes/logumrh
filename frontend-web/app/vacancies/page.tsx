"use client";

import React, { useEffect, useState } from 'react';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
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

  const vacancies = Array.from({ length: 100 }, (_, index) => ({
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
    activities: 'Atividades.'
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
    ['Option 1A', 'Option 1B', 'Option 1C'],
    ['Option 2A', 'Option 2B', 'Option 2C'],
    ['Option 3A', 'Option 3B', 'Option 3C'],
    ['Option 4A', 'Option 4B', 'Option 4C'],
    ['Option 5A', 'Option 5B', 'Option 5C']
  ];

  return (
    <section className="container paddingSection">
      <div className={styles.centeredElements}>
        <SearchBar
          placeholder="Pesquisar vaga..."
        />
        <div className={styles.dropdownContainer}>
          {dropdownOptions.map((options, index) => (
            <Dropdown
              key={index}
              placeholder={`Filter ${index + 1}`}
              options={options} />
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {displayedVacancies.map((vacancy) => (
          <VacancyCard
            key={vacancy.id} {...vacancy}
          />
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
