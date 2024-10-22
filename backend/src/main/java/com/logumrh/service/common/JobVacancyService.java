package com.logumrh.service.common;

import com.logumrh.dto.common.JobVacancyDTO;
import com.logumrh.model.common.JobVacancy;
import com.logumrh.repository.common.JobVacancyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobVacancyService {

    private final JobVacancyRepository jobVacancyRepository;

    public JobVacancyService(JobVacancyRepository jobVacancyRepository) {
        this.jobVacancyRepository = jobVacancyRepository;
    }

    public JobVacancy createJobVacancy(JobVacancyDTO jobVacancyDTO) {
        JobVacancy jobVacancy = new JobVacancy();
        jobVacancy.setTitle(jobVacancyDTO.getTitle());
        jobVacancy.setCode(jobVacancyDTO.getCode());
        jobVacancy.setModality(jobVacancyDTO.getModality());
        jobVacancy.setDescription(jobVacancyDTO.getDescription());
        jobVacancy.setSalary(jobVacancyDTO.getSalary());
        return jobVacancyRepository.save(jobVacancy);
    }

    public List<JobVacancy> findByCompanyId(Long companyId) {
        return jobVacancyRepository.findByCompanyId(companyId);
    }

    public void deleteJobVacancy(Long id) {
        jobVacancyRepository.deleteById(id);
    }
}
