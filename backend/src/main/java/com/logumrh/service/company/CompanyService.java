package com.logumrh.service.company;

import com.logumrh.dto.company.CompanyDTO;
import com.logumrh.model.common.Address;
import com.logumrh.model.company.Company;
import com.logumrh.repository.common.AddressRepository;
import com.logumrh.repository.company.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final AddressRepository addressRepository;

    public CompanyService(CompanyRepository companyRepository, AddressRepository addressRepository) {
        this.companyRepository = companyRepository;
        this.addressRepository = addressRepository;
    }

    public Company createCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setName(companyDTO.getName());
        company.setLegalName(companyDTO.getLegalName());
        company.setNationalId(companyDTO.getNationalId());
        company.setIndustry(companyDTO.getIndustry());
        company.setEmail(companyDTO.getEmail());
        company.setPhone(companyDTO.getPhone());
        company.setContactPerson(companyDTO.getContactPerson());

        Address address = addressRepository.findById(companyDTO.getAddressId())
                .orElseThrow(() -> new RuntimeException("Address not found"));
        company.setAddress(address);

        return companyRepository.save(company);
    }

    public Optional<Company> findByNationalId(String nationalId) {
        return companyRepository.findByNationalId(nationalId);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
