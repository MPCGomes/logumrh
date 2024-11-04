package com.logumrh.service.common;

import com.logumrh.model.common.Disability;
import com.logumrh.repository.common.DisabilityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisabilityService {

    private final DisabilityRepository disabilityRepository;

    public DisabilityService(DisabilityRepository disabilityRepository) {
        this.disabilityRepository = disabilityRepository;
    }

    public List<Disability> findAll() {
        return disabilityRepository.findAll();
    }

    public Optional<Disability> findById(Long id) {
        return disabilityRepository.findById(id);
    }
}
