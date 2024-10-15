package com.logumrh.service;

import com.logumrh.model.JobVacancy;
import com.logumrh.repository.JobVacancyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobVacancyService {

    public final JobVacancyRepository jobVacancyRepository;

    public JobVacancyService(JobVacancyRepository jobVacancyRepository) {
        this.jobVacancyRepository = jobVacancyRepository;
    }

    public List<JobVacancy> getAllJobVacancies() {
        return jobVacancyRepository.findAll();
    }

    public JobVacancy createJobVacancy(JobVacancy jobVacancy) {
        return jobVacancyRepository.save(jobVacancy);
    }

    public void deleteJobVacancy(Integer id) {
        jobVacancyRepository.deleteById(id);
    }
}
