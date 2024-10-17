package com.logumrh.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    @NotNull(message = "ID cannot be null")
    private Long id;

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(max = 255, message = "Email must be at most 255 characters")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 8, max = 255, message = "Password must be between 8 and 255 characters")
    private String password;

    @NotNull(message = "Name is required")
    @Size(min = 2, max = 255, message = "Name must be between 2 and 255 characters")
    private String name;

    @NotNull(message = "Gender ID is required")
    private Long genderId;

    @NotNull(message = "Disability ID is required")
    private Long disabilityId;

    @NotNull(message = "Address ID is required")
    private Long addressId;

    private byte[] photo;

    @NotNull(message = "Birth date is required")
    private LocalDate birthDate;

    @Size(max = 50, message = "Marital status must be at most 50 characters")
    private String maritalStatus;

    @Size(max = 50, message = "Ethnicity must be at most 50 characters")
    private String ethnicity;

    @Pattern(regexp = "^\\+?[0-9. ()-]{7,20}$", message = "Invalid phone number format")
    @Size(min = 7, max = 20, message = "Phone number must be between 7 and 20 digits")
    private String phone;

    @Size(max = 255, message = "Social name must be at most 255 characters")
    private String socialName;

    @NotNull(message = "Nationality is required")
    @Size(min = 2, max = 50, message = "Nationality must be between 2 and 50 characters")
    private String nationality;

    @NotNull(message = "National ID is required")
    @Size(min = 11, max = 11, message = "National ID must be exactly 11 digits")
    private String nationalId;

    @NotNull(message = "Role ID is required")
    private Long roleId;

    @NotNull(message = "Education Level ID is required")
    private Long educationLevelId;

    private boolean isActive;
}
