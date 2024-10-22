package com.logumrh.service.common;

import com.logumrh.model.common.Gender;
import com.logumrh.repository.common.GenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenderService {

    @Autowired
    private GenderRepository genderRepository;

    public List<Gender> findAll() {
        return genderRepository.findAll();
    }

    public Optional<Gender> findById(Long id) {
        return genderRepository.findById(id);
    }

    public Gender save(Gender gender) {
        return genderRepository.save(gender);
    }

    public void deleteById(Long id) {
        genderRepository.deleteById(id);
    }
}
