package com.logumrh.service.common;

import com.logumrh.model.common.Ethnicity;
import com.logumrh.repository.common.EthnicityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EthnicityService {

    private final EthnicityRepository ethnicityRepository;

    public EthnicityService(EthnicityRepository ethnicityRepository) {
        this.ethnicityRepository = ethnicityRepository;
    }

    public List<Ethnicity> getAllEthnicities() {
        return ethnicityRepository.findAll();
    }

    public Ethnicity createEthnicity(Ethnicity ethnicity) {
        return ethnicityRepository.save(ethnicity);
    }
}
