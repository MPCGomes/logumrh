package com.logumrh.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;

    @NotNull(message = "Name is required")
    @Size(min = 2, max = 255, message = "Name must be between 2 and 255 characters")
    private String name;

    private byte[] photo;

    @NotNull(message = "Birth date is required")
    @Past(message = "Birth date must be in the past")
    private LocalDate birthDate;

    private String maritalStatus;
    private String ethnicity;
    private String disability;

    @Pattern(regexp = "^\\+?[0-9]*$", message = "Phone must contain only numbers and optional '+' prefix")
    private String phone;

    private String socialName;

    @NotNull(message = "Nationality is required")
    private String nationality;

    @NotNull(message = "National ID is required")
    @Size(min = 11, max = 11, message = "National ID must be exactly 11 digits")
    private String nationalId;

    @NotNull(message = "Role ID is required")
    private Integer roleId;

    private Integer educationLevelId;
}

