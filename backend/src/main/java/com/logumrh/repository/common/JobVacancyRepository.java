package com.logumrh.repository.common;

import com.logumrh.model.common.JobVacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobVacancyRepository extends JpaRepository<JobVacancy, Long> {
    List<JobVacancy> findByCompanyId(Long companyId);
}
