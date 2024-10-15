package com.logumrh.service;

import com.logumrh.model.Application;
import com.logumrh.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public List<Application> getAllApplication() {
        return applicationRepository.findAll();
    }

    public void deleteApplication(Integer id) {
        applicationRepository.deleteById(id);
    }
}
