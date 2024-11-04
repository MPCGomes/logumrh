package com.logumrh.service.common;

import com.logumrh.model.common.EducationLevel;
import com.logumrh.repository.common.EducationLevelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EducationLevelService {

    private final EducationLevelRepository educationLevelRepository;

    public EducationLevelService(EducationLevelRepository educationLevelRepository) {
        this.educationLevelRepository = educationLevelRepository;
    }

    public List<EducationLevel> findAll() {
        return educationLevelRepository.findAll();
    }

    public Optional<EducationLevel> findById(Long id) {
        return educationLevelRepository.findById(id);
    }
}
