package com.logumrh.service.common;

import com.logumrh.model.common.Modality;
import com.logumrh.repository.common.ModalityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModalityService {

    private final ModalityRepository modalityRepository;

    public ModalityService(ModalityRepository modalityRepository) {
        this.modalityRepository = modalityRepository;
    }

    public List<Modality> getAllModalities() {
        return modalityRepository.findAll();
    }

    public Modality createModality(Modality modality) {
        return modalityRepository.save(modality);
    }
}
