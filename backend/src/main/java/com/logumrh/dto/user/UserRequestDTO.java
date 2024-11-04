package com.logumrh.dto.user;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDTO {

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(max = 255, message = "Email must be at most 255 characters")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 8, max = 255, message = "Password must be between 8 and 255 characters")
    private String password;

    @NotNull(message = "Name is required")
    @Size(max = 255, message = "Name must be at most 255 characters")
    private String name;

    @NotNull(message = "Gender ID is required")
    private Long genderId;

    @NotNull(message = "Disability ID is required")
    private Long disabilityId;

    @NotNull(message = "Marital Status ID is required")
    private Long maritalStatusId;

    @NotNull(message = "Ethnicity ID is required")
    private Long ethnicityId;

    @NotNull(message = "Nationality ID is required")
    private Long nationalityId;

    private byte[] photo;

    @NotNull(message = "Birth date is required")
    private LocalDate birthDate;

    @NotNull(message = "Phone is required")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,20}$", message = "Invalid phone number format")
    @Size(max = 20, message = "Phone must be at most 20 characters")
    private String phone;

    @Size(max = 255, message = "Social name must be at most 255 characters")
    private String socialName;

    @NotNull(message = "National ID is required")
    @Size(max = 11, message = "National ID must be at most 11 characters")
    private String nationalId;

    @NotNull(message = "Role ID is required")
    private Long roleId;

    @NotNull(message = "Education Level ID is required")
    private Long educationLevelId;

    @NotNull(message = "Address ID is required")
    private Long addressId;

    private List<Long> driversLicenseIds;
}
