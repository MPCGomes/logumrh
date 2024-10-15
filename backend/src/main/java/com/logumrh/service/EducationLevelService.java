package com.logumrh.service;

import com.logumrh.model.EducationLevel;
import com.logumrh.repository.EducationLevelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationLevelService {

    private final EducationLevelRepository educationLevelRepository;

    public EducationLevelService(EducationLevelRepository educationLevelRepository) {
        this.educationLevelRepository = educationLevelRepository;
    }

    public List<EducationLevel> getAllEducationLevels() {
        return educationLevelRepository.findAll();
    }

    public EducationLevel createEducationLevel(EducationLevel educationLevel) {
        return educationLevelRepository.save(educationLevel);
    }
}
