package com.logumrh.service.common;

import com.logumrh.model.common.Nationality;
import com.logumrh.repository.common.NationalityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NationalityService {

    private final NationalityRepository nationalityRepository;

    public NationalityService(NationalityRepository nationalityRepository) {
        this.nationalityRepository = nationalityRepository;
    }

    public List<Nationality> findAll() {
        return nationalityRepository.findAll();
    }

    public Optional<Nationality> findById(Long id) {
        return nationalityRepository.findById(id);
    }

    public Nationality save(Nationality nationality) {
        return nationalityRepository.save(nationality);
    }

    public void deleteById(Long id) {
        nationalityRepository.deleteById(id);
    }
}
