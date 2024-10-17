package com.logumrh.repository;

import com.logumrh.model.JobVacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobVacancyRepository extends JpaRepository<JobVacancy, Long> {
    List<JobVacancy> findByCompanyId(Long companyId);
}
