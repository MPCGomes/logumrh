package com.logumrh.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobVacancyDTO {

    @NotNull(message = "ID cannot be null")
    private Long id;

    @NotNull(message = "Title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    @NotNull(message = "Code is required")
    @Size(min = 1, max = 10, message = "Code must be between 1 and 10 characters")
    private String code;

    @NotNull(message = "Modality is required")
    @Size(max = 50, message = "Modality must be at most 50 characters")
    private String modality;

    @NotNull(message = "Description is required")
    private String description;

    @NotNull(message = "Location is required")
    @Size(max = 255, message = "Location must be at most 255 characters")
    private String location;

    @NotNull(message = "Address ID is required")
    private Long addressId;

    @NotNull(message = "Company ID is required")
    private Long companyId;

    @NotNull(message = "Category ID is required")
    private Long categoryId;

    private String objectiveRequirements;
    private String subjectiveRequirements;
    private String benefits;
    private String schedule;

    @NotNull(message = "Salary is required")
    private BigDecimal salary;

    private List<String> tags;
    private String contractType;
    private LocalDateTime closeDate;
    private boolean isActive;
}
