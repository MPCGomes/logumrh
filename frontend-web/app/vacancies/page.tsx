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
    id: index + 1,
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
