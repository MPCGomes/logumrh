package com.logumrh.dto.common;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationDTO {

    private Long id;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Job Vacancy ID is required")
    private Long jobVacancyId;

    @NotNull(message = "Resume ID is required")
    private Long resumeId;

    private LocalDateTime applicationDate;
}
