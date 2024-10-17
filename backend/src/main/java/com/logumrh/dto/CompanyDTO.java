package com.logumrh.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {

    @NotNull(message = "ID cannot be null")
    private Long id;

    @NotNull(message = "Name is required")
    @Size(min = 2, max = 255, message = "Name must be between 2 and 255 characters")
    private String name;

    @NotNull(message = "Legal Name is required")
    @Size(min = 2, max = 255, message = "Legal Name must be between 2 and 255 characters")
    private String legalName;

    @NotNull(message = "National ID is required")
    @Size(min = 11, max = 20, message = "National ID must be between 11 and 20 characters")
    private String nationalId;

    @NotNull(message = "Industry is required")
    @Size(max = 255, message = "Industry must be at most 255 characters")
    private String industry;

    @NotNull(message = "Address ID is required")
    private Long addressId;

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(max = 255, message = "Email must be at most 255 characters")
    private String email;

    @NotNull(message = "Phone is required")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,20}$", message = "Invalid phone number format")
    @Size(min = 10, max = 20, message = "Phone must be between 10 and 20 characters")
    private String phone;

    @NotNull(message = "Contact person is required")
    @Size(max = 255, message = "Contact person name must be at most 255 characters")
    private String contactPerson;

    private boolean isActive;
}
