package com.logumrh.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobVacancyDTO {

    @NotNull(message = "Title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    @NotNull(message = "Code is required")
    @Size(max = 10, message = "Code must be at most 10 characters")
    private String code;

    @NotNull(message = "Modality is required")
    private String modality;

    private String location;
    private String neighborhood;
    private String city;

    @NotNull(message = "Company ID is required")
    private Integer companyId;

    private Integer categoryId;
    private String objectiveRequirements;
    private String subjectiveRequirements;
    private String benefits;

    @NotNull(message = "Description is required")
    private String description;

    private String schedule;
    private BigDecimal salary;
    private List<String> tags;
    private String contractType;
}
