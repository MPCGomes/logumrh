package com.logumrh.dto.common;

import jakarta.validation.constraints.*;
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

    private Long id;

    @NotNull(message = "Title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    @NotNull(message = "Code is required")
    @Size(min = 1, max = 10, message = "Code must be between 1 and 10 characters")
    private String code;

    @NotNull(message = "Modality ID is required")
    private Long modalityId;

    @NotNull(message = "Contract Type ID is required")
    private Long contractTypeId;

    @NotNull(message = "Description is required")
    private String description;

    @NotNull(message = "Schedule is required")
    @Size(max = 255, message = "Schedule must be at most 255 characters")
    private String schedule;

    private List<String> requirements;
    private List<String> benefits;

    @NotNull(message = "Address ID is required")
    private Long addressId;

    @NotNull(message = "Company ID is required")
    private Long companyId;

    private String observations;

    private BigDecimal salary;

    private List<String> tags;

    private LocalDateTime closeDate;

    private boolean isActive;
}
