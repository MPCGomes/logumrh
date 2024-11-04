package com.logumrh.service.common;

import com.logumrh.model.common.Modality;
import com.logumrh.repository.common.ModalityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModalityService {

    private final ModalityRepository modalityRepository;

    public ModalityService(ModalityRepository modalityRepository) {
        this.modalityRepository = modalityRepository;
    }

    public List<Modality> findAll() {
        return modalityRepository.findAll();
    }

    public Optional<Modality> findById(Long id) {
        return modalityRepository.findById(id);
    }

    public Modality save(Modality modality) {
        return modalityRepository.save(modality);
    }

    public void deleteById(Long id) {
        modalityRepository.deleteById(id);
    }
}
