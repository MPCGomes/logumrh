package com.logumrh.service.common;

import com.logumrh.model.common.Ethnicity;
import com.logumrh.repository.common.EthnicityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EthnicityService {

    private final EthnicityRepository ethnicityRepository;

    public EthnicityService(EthnicityRepository ethnicityRepository) {
        this.ethnicityRepository = ethnicityRepository;
    }

    public List<Ethnicity> findAll() {
        return ethnicityRepository.findAll();
    }

    public Optional<Ethnicity> findById(Long id) {
        return ethnicityRepository.findById(id);
    }
}
