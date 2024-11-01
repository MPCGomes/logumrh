package com.logumrh.service.common;

import com.logumrh.model.common.Nationality;
import com.logumrh.repository.common.NationalityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NationalityService {

    private final NationalityRepository nationalityRepository;

    public NationalityService(NationalityRepository nationalityRepository) {
        this.nationalityRepository = nationalityRepository;
    }

    public List<Nationality> getAllNationalities() {
        return nationalityRepository.findAll();
    }

    public Nationality createNationality(Nationality nationality) {
        return nationalityRepository.save(nationality);
    }
}
