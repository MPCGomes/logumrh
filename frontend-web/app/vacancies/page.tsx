"use client";

import React, { useEffect, useState } from "react";
import JobCard from "@/components/JobCard/JobCard";
import CustomPagination from "@/components/Pagination/Pagination";
import { TextField, MenuItem, Box, IconButton, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.scss";

type FilterKey = "search" | "date" | "modality" | "company" | "location";

const Jobs: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    search: "",
    date: "",
    modality: "",
    company: "",
    location: "",
  });

  useEffect(() => {
    const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(pageFromQuery);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.replace(`?page=${page}`);
  };

  const handleFilterChange = (field: FilterKey, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const dropdowns: { field: FilterKey; placeholder: string; options: string[] }[] = [
    { field: "date", placeholder: "Data", options: ["A qualquer momento", "Últimas 24 horas", "Última semana", "Último mês"] },
    { field: "modality", placeholder: "Modalidade", options: ["Presencial", "Híbrido", "Remoto"] },
    { field: "company", placeholder: "Empresa", options: ["Menconi Contabilidade", "Niloware"] },
    { field: "location", placeholder: "Localidade", options: ["Caraguatatuba, SP", "São Sebastião, SP", "Pindamonhangaba, SP", "Ubatuba, SP"] },
  ];

  const jobs = Array.from({ length: 15 }, (_, index) => ({
    id: index + 4,
    job: "Título",
    company: "Empresa",
    payment: "1500",
    sector: "Setor",
    modality: "Modalidade",
    workHours: "Período",
    workSchedule: "Escala",
    location: "Rua, Número - Bairro, Cidade - UF",
    requirements: "Requisitos.",
    activities:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis?",
  }));

  const itemsPerPage = 9;
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const displayedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="container paddingSection">
      <Box className={styles.filtersContainer}>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Pesquisar vaga..."
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon color="primary" />
              </IconButton>
            ),
          }}
          sx={{ flex: 1, maxWidth: "600px", borderRadius: "50px" }}
        />

        {/* Dropdown Filters */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {dropdowns.map((dropdown) => (
            <TextField
              key={dropdown.field}
              select
              label={filters[dropdown.field] === "" ? dropdown.placeholder : ""}
              value={filters[dropdown.field]}
              onChange={(e) => handleFilterChange(dropdown.field, e.target.value)}
              variant="outlined"
              sx={{ minWidth: "150px", borderRadius: "50px" }}
            >
              <MenuItem value="">
                <em>{dropdown.placeholder}</em>
              </MenuItem>
              {dropdown.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </Box>
      </Box>

      {/* Job Cards */}
      <Box className={styles.grid}>
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
        {displayedJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </Box>

      {/* Pagination */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => handlePageChange(page)}
        color="primary"
        showFirstButton
        showLastButton
      />
    </section>
  );
};

export default Jobs;
