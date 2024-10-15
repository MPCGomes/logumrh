package com.logumrh.service;

import com.logumrh.model.Resume;
import com.logumrh.repository.ResumeRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    public Resume createResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public Optional<Resume> findById(Integer id) {
        return resumeRepository.findById(id);
    }

    public void deleteResume(Integer id) {
        resumeRepository.deleteById(id);
    }
}
