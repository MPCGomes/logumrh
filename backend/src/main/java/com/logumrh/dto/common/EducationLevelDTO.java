package com.logumrh.dto.common;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EducationLevelDTO {

    @NotNull(message = "Education level name is required")
    @Size(min = 2, max = 255, message = "Education level name must be between 2 and 255 characters")
    private String name;
}
