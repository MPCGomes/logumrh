package com.logumrh.service.common;

import com.logumrh.model.common.DriversLicense;
import com.logumrh.repository.common.DriversLicenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriversLicenseService {

    private final DriversLicenseRepository driversLicenseRepository;

    public DriversLicenseService(DriversLicenseRepository driversLicenseRepository) {
        this.driversLicenseRepository = driversLicenseRepository;
    }

    public List<DriversLicense> findAll() {
        return driversLicenseRepository.findAll();
    }

    public Optional<DriversLicense> findById(Long id) {
        return driversLicenseRepository.findById(id);
    }
}
