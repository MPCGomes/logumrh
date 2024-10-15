package com.logumrh.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationDTO {

    @NotNull(message = "User ID is required")
    private Integer userId;

    @NotNull(message = "Job Vacancy ID is required")
    private Integer jobVacancyId;

    @NotNull(message = "Resume ID is required")
    private Integer resumeId;
}
