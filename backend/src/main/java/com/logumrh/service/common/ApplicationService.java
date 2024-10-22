package com.logumrh.service.common;

import com.logumrh.dto.common.ApplicationDTO;
import com.logumrh.model.common.Application;
import com.logumrh.repository.common.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public Application createApplication(ApplicationDTO applicationDTO) {
        Application application = new Application();
        application.setApplicationDate(applicationDTO.getApplicationDate());
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
