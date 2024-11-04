package com.logumrh.service.common;

import com.logumrh.dto.common.JobVacancyDTO;
import com.logumrh.model.common.*;
import com.logumrh.model.company.Company;
import com.logumrh.repository.common.*;
import com.logumrh.repository.company.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobVacancyService {

    private final JobVacancyRepository jobVacancyRepository;
    private final ModalityRepository modalityRepository;
    private final ContractTypeRepository contractTypeRepository;
    private final AddressRepository addressRepository;
    private final CompanyRepository companyRepository;

    public JobVacancyService(
            JobVacancyRepository jobVacancyRepository,
            ModalityRepository modalityRepository,
            ContractTypeRepository contractTypeRepository,
            AddressRepository addressRepository,
            CompanyRepository companyRepository
    ) {
        this.jobVacancyRepository = jobVacancyRepository;
        this.modalityRepository = modalityRepository;
        this.contractTypeRepository = contractTypeRepository;
        this.addressRepository = addressRepository;
        this.companyRepository = companyRepository;
    }

    public JobVacancy createJobVacancy(JobVacancyDTO jobVacancyDTO) {
        JobVacancy jobVacancy = new JobVacancy();
        jobVacancy.setTitle(jobVacancyDTO.getTitle());
        jobVacancy.setCode(jobVacancyDTO.getCode());

        Modality modality = modalityRepository.findById(jobVacancyDTO.getModalityId())
                .orElseThrow(() -> new RuntimeException("Modality not found"));
        jobVacancy.setModality(modality);

        ContractType contractType = contractTypeRepository.findById(jobVacancyDTO.getContractTypeId())
                .orElseThrow(() -> new RuntimeException("Contract Type not found"));
        jobVacancy.setContractType(contractType);

        jobVacancy.setDescription(jobVacancyDTO.getDescription());
        jobVacancy.setSchedule(jobVacancyDTO.getSchedule());
        jobVacancy.setRequirements(jobVacancyDTO.getRequirements());
        jobVacancy.setBenefits(jobVacancyDTO.getBenefits());

        Address address = addressRepository.findById(jobVacancyDTO.getAddressId())
                .orElseThrow(() -> new RuntimeException("Address not found"));
        jobVacancy.setAddress(address);

        Company company = companyRepository.findById(jobVacancyDTO.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company not found"));
        jobVacancy.setCompany(company);

        jobVacancy.setObservations(jobVacancyDTO.getObservations());
        jobVacancy.setSalary(jobVacancyDTO.getSalary());
        jobVacancy.setTags(jobVacancyDTO.getTags());
        jobVacancy.setCloseDate(jobVacancyDTO.getCloseDate());

        return jobVacancyRepository.save(jobVacancy);
    }

    public List<JobVacancy> findByCompanyId(Long companyId) {
        return jobVacancyRepository.findByCompanyId(companyId);
    }

    public void deleteJobVacancy(Long id) {
        jobVacancyRepository.deleteById(id);
    }
}
