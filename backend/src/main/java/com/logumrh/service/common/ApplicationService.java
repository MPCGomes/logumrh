package com.logumrh.service.common;

import com.logumrh.dto.common.ApplicationDTO;
import com.logumrh.model.common.Application;
import com.logumrh.model.common.JobVacancy;
import com.logumrh.model.common.Resume;
import com.logumrh.model.user.User;
import com.logumrh.repository.common.ApplicationRepository;
import com.logumrh.repository.common.JobVacancyRepository;
import com.logumrh.repository.common.ResumeRepository;
import com.logumrh.repository.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;
    private final JobVacancyRepository jobVacancyRepository;
    private final ResumeRepository resumeRepository;

    public ApplicationService(
            ApplicationRepository applicationRepository,
            UserRepository userRepository,
            JobVacancyRepository jobVacancyRepository,
            ResumeRepository resumeRepository
    ) {
        this.applicationRepository = applicationRepository;
        this.userRepository = userRepository;
        this.jobVacancyRepository = jobVacancyRepository;
        this.resumeRepository = resumeRepository;
    }

    public Application createApplication(ApplicationDTO applicationDTO) {
        Application application = new Application();

        User user = userRepository.findById(applicationDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        application.setUser(user);

        JobVacancy jobVacancy = jobVacancyRepository.findById(applicationDTO.getJobVacancyId())
                .orElseThrow(() -> new RuntimeException("Job Vacancy not found"));
        application.setJobVacancy(jobVacancy);

        Resume resume = resumeRepository.findById(applicationDTO.getResumeId())
                .orElseThrow(() -> new RuntimeException("Resume not found"));
        application.setResume(resume);

        if (applicationDTO.getApplicationDate() != null) {
            application.setApplicationDate(applicationDTO.getApplicationDate());
        }

        return applicationRepository.save(application);
    }

    public List<Application> findByUserId(Long userId) {
        return applicationRepository.findByUserId(userId);
    }

    public List<Application> findByJobVacancyId(Long jobVacancyId) {
        return applicationRepository.findByJobVacancyId(jobVacancyId);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}
