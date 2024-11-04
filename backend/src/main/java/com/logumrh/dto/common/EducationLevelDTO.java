package com.logumrh.dto.common;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EducationLevelDTO {

    private Long id;

    @NotNull(message = "Name is required")
    @Size(max = 255, message = "Name must be at most 255 characters")
    private String name;
}
