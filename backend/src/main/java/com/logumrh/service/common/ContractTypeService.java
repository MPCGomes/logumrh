package com.logumrh.service.common;

import com.logumrh.model.common.ContractType;
import com.logumrh.repository.common.ContractTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractTypeService {

    private final ContractTypeRepository contractTypeRepository;

    public ContractTypeService(ContractTypeRepository contractTypeRepository) {
        this.contractTypeRepository = contractTypeRepository;
    }

    public List<ContractType> getAllContractTypes() {
        return contractTypeRepository.findAll();
    }

    public ContractType createContractType(ContractType contractType) {
        return contractTypeRepository.save(contractType);
    }
}
