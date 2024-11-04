package com.logumrh.service.common;

import com.logumrh.model.common.MaritalStatus;
import com.logumrh.repository.common.MaritalStatusRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaritalStatusService {

    private final MaritalStatusRepository maritalStatusRepository;

    public MaritalStatusService(MaritalStatusRepository maritalStatusRepository) {
        this.maritalStatusRepository = maritalStatusRepository;
    }

    public List<MaritalStatus> findAll() {
        return maritalStatusRepository.findAll();
    }

    public Optional<MaritalStatus> findById(Long id) {
        return maritalStatusRepository.findById(id);
    }
}
