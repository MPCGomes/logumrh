package com.logumrh.service.common;

import com.logumrh.dto.common.ResumeDTO;
import com.logumrh.model.common.Resume;
import com.logumrh.model.user.User;
import com.logumrh.repository.common.ResumeRepository;
import com.logumrh.repository.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;

    public ResumeService(ResumeRepository resumeRepository, UserRepository userRepository) {
        this.resumeRepository = resumeRepository;
        this.userRepository = userRepository;
    }

    public Resume createResume(ResumeDTO resumeDTO) {
        Resume resume = new Resume();
        resume.setTitle(resumeDTO.getTitle());
        resume.setAreaOfExpertise(resumeDTO.getAreaOfExpertise());
        resume.setFile(resumeDTO.getFile());

        User user = userRepository.findById(resumeDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        resume.setUser(user);

        return resumeRepository.save(resume);
    }

    public List<Resume> findByUserId(Long userId) {
        return resumeRepository.findByUserId(userId);
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }
}
