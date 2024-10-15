package com.logumrh.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {

    @NotNull(message = "Name is required")
    @Size(min = 2, max = 255, message = "Name must be between 2 and 255 characters")
    private String name;

    @NotNull(message = "Legal name is required")
    @Size(min = 2, max = 255, message = "Legal name must be between 2 and 255 characters")
    private String legalName;

    @NotNull(message = "National ID is required")
    @Size(min = 20, max = 20, message = "National ID must be exactly 20 characters")
    private String nationalId;

    @NotNull(message = "Industry is required")
    @Size(min = 2, max = 255, message = "Industry must be between 2 and 255 characters")
    private String industry;

    private Boolean isActive = true;
    private Integer createdBy;
    private Integer updatedBy;
}
