package com.logumrh.service.common;

import com.logumrh.model.common.DriversLicense;
import com.logumrh.repository.common.DriversLicenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriversLicenseService {

    private final DriversLicenseRepository driversLicenseRepository;

    public DriversLicenseService(DriversLicenseRepository driversLicenseRepository) {
        this.driversLicenseRepository = driversLicenseRepository;
    }

    public List<DriversLicense> getAllDriversLicenses() {
        return driversLicenseRepository.findAll();
    }

    public DriversLicense createDriversLicense(DriversLicense driversLicense) {
        return driversLicenseRepository.save(driversLicense);
    }
}
