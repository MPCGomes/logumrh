package com.logumrh.dto.common;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResumeDTO {

    @NotNull(message = "ID cannot be null")
    private Long id;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    @NotNull(message = "Area of expertise is required")
    @Size(min = 2, max = 255, message = "Area of expertise must be between 2 and 255 characters")
    private String areaOfExpertise;

    @NotNull(message = "File data is required")
    private byte[] file;
}
