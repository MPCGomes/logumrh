package com.logumrh.service.common;

import com.logumrh.model.common.MaritalStatus;
import com.logumrh.repository.common.MaritalStatusRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaritalStatusService {

    private final MaritalStatusRepository maritalStatusRepository;

    public MaritalStatusService(MaritalStatusRepository maritalStatusRepository) {
        this.maritalStatusRepository = maritalStatusRepository;
    }

    public List<MaritalStatus> getAllMaritalStatuses() {
        return maritalStatusRepository.findAll();
    }

    public MaritalStatus createMaritalStatus(MaritalStatus maritalStatus) {
        return maritalStatusRepository.save(maritalStatus);
    }
}
