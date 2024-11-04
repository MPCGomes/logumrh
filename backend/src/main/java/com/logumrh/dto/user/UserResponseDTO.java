package com.logumrh.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private Long id;
    private String email;
    private String name;
    private Long genderId;
    private Long disabilityId;
    private Long maritalStatusId;
    private Long ethnicityId;
    private Long nationalityId;
    private byte[] photo;
    private LocalDate birthDate;
    private String phone;
    private String socialName;
    private String nationalId;
    private Long roleId;
    private Long educationLevelId;
    private Long addressId;
    private List<Long> driversLicenseIds;
    private boolean isActive;
    private String createdAt;
    private String updatedAt;
}
