package com.logumrh.service.common;

import com.logumrh.dto.common.ResumeDTO;
import com.logumrh.model.common.Resume;
import com.logumrh.repository.common.ResumeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    public Resume createResume(ResumeDTO resumeDTO) {
        Resume resume = new Resume();
        resume.setTitle(resumeDTO.getTitle());
        resume.setAreaOfExpertise(resumeDTO.getAreaOfExpertise());
        resume.setFile(resumeDTO.getFile());
        return resumeRepository.save(resume);
    }

    public List<Resume> findByUserId(Long userId) {
        return resumeRepository.findByUserId(userId);
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }
}
