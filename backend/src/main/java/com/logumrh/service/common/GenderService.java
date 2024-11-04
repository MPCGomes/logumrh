package com.logumrh.service.common;

import com.logumrh.model.common.Gender;
import com.logumrh.repository.common.GenderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenderService {

    private final GenderRepository genderRepository;

    public GenderService(GenderRepository genderRepository) {
        this.genderRepository = genderRepository;
    }

    public List<Gender> findAll() {
        return genderRepository.findAll();
    }

    public Optional<Gender> findById(Long id) {
        return genderRepository.findById(id);
    }
}
