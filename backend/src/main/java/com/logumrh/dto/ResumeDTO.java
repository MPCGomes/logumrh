package com.logumrh.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResumeDTO {

    @NotNull(message = "User ID is required")
    private Integer userId;

    @NotNull(message = "Title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    @NotNull(message = "Area of expertise is required")
    private String areaOfExpertise;

    @NotNull(message = "Resume file is required")
    private byte[] file;

    private Integer educationLevelId;
}
