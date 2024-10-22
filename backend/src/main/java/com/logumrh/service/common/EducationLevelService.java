package com.logumrh.service.common;

import com.logumrh.model.common.EducationLevel;
import com.logumrh.repository.common.EducationLevelRepository;
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
