package com.logumrh.service.user;

import com.logumrh.dto.user.UserRequestDTO;
import com.logumrh.model.auth.Role;
import com.logumrh.model.common.*;
import com.logumrh.model.user.User;
import com.logumrh.repository.auth.RoleRepository;
import com.logumrh.repository.common.*;
import com.logumrh.repository.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final GenderRepository genderRepository;
    private final DisabilityRepository disabilityRepository;
    private final MaritalStatusRepository maritalStatusRepository;
    private final EthnicityRepository ethnicityRepository;
    private final NationalityRepository nationalityRepository;
    private final EducationLevelRepository educationLevelRepository;
    private final DriversLicenseRepository driversLicenseRepository;
    private final AddressRepository addressRepository;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            RoleRepository roleRepository,
            GenderRepository genderRepository,
            DisabilityRepository disabilityRepository,
            MaritalStatusRepository maritalStatusRepository,
            EthnicityRepository ethnicityRepository,
            NationalityRepository nationalityRepository,
            EducationLevelRepository educationLevelRepository,
            DriversLicenseRepository driversLicenseRepository,
            AddressRepository addressRepository
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.genderRepository = genderRepository;
        this.disabilityRepository = disabilityRepository;
        this.maritalStatusRepository = maritalStatusRepository;
        this.ethnicityRepository = ethnicityRepository;
        this.nationalityRepository = nationalityRepository;
        this.educationLevelRepository = educationLevelRepository;
        this.driversLicenseRepository = driversLicenseRepository;
        this.addressRepository = addressRepository;
    }

    public User createUser(UserRequestDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setName(userDTO.getName());
        user.setBirthDate(userDTO.getBirthDate());
        user.setPhone(userDTO.getPhone());
        user.setNationalId(userDTO.getNationalId());
        user.setSocialName(userDTO.getSocialName());
        user.setPhoto(userDTO.getPhoto());

        Gender gender = genderRepository.findById(userDTO.getGenderId())
                .orElseThrow(() -> new RuntimeException("Gender not found"));
        user.setGender(gender);

        Disability disability = disabilityRepository.findById(userDTO.getDisabilityId())
                .orElseThrow(() -> new RuntimeException("Disability not found"));
        user.setDisability(disability);

        MaritalStatus maritalStatus = maritalStatusRepository.findById(userDTO.getMaritalStatusId())
                .orElseThrow(() -> new RuntimeException("Marital Status not found"));
        user.setMaritalStatus(maritalStatus);

        Ethnicity ethnicity = ethnicityRepository.findById(userDTO.getEthnicityId())
                .orElseThrow(() -> new RuntimeException("Ethnicity not found"));
        user.setEthnicity(ethnicity);

        Nationality nationality = nationalityRepository.findById(userDTO.getNationalityId())
                .orElseThrow(() -> new RuntimeException("Nationality not found"));
        user.setNationality(nationality);

        EducationLevel educationLevel = educationLevelRepository.findById(userDTO.getEducationLevelId())
                .orElseThrow(() -> new RuntimeException("Education Level not found"));
        user.setEducationLevel(educationLevel);

        Address address = addressRepository.findById(userDTO.getAddressId())
                .orElseThrow(() -> new RuntimeException("Address not found"));
        user.setAddress(address);

        if (userDTO.getDriversLicenseIds() != null && !userDTO.getDriversLicenseIds().isEmpty()) {
            user.setDriversLicenses(driversLicenseRepository.findAllById(userDTO.getDriversLicenseIds()));
        }

        Role defaultRole = roleRepository.findById(2)
                .orElseThrow(() -> new RuntimeException("Default role not found"));
        user.setRole(defaultRole);

        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
