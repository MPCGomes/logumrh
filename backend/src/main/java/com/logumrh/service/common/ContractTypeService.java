package com.logumrh.service.common;

import com.logumrh.model.common.ContractType;
import com.logumrh.repository.common.ContractTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContractTypeService {

    private final ContractTypeRepository contractTypeRepository;

    public ContractTypeService(ContractTypeRepository contractTypeRepository) {
        this.contractTypeRepository = contractTypeRepository;
    }

    public List<ContractType> findAll() {
        return contractTypeRepository.findAll();
    }

    public Optional<ContractType> findById(Long id) {
        return contractTypeRepository.findById(id);
    }
}
