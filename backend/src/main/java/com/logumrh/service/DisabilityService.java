package com.logumrh.service;

import com.logumrh.model.Disability;
import com.logumrh.repository.DisabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisabilityService {

    @Autowired
    private DisabilityRepository disabilityRepository;

    public List<Disability> findAll() {
        return disabilityRepository.findAll();
    }

    public Optional<Disability> findById(Long id) {
        return disabilityRepository.findById(id);
    }

    public Disability save(Disability disability) {
        return disabilityRepository.save(disability);
    }

    public void deleteById(Long id) {
        disabilityRepository.deleteById(id);
    }
}
