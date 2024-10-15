package com.logumrh.repository;

import com.logumrh.model.JobVacancy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobVacancyRepository extends JpaRepository<JobVacancy, Integer> {
}
