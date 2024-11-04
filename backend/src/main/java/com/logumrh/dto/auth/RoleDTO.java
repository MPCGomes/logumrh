package com.logumrh.dto.auth;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoleDTO {

    private Long id;

    @NotNull(message = "Name is required")
    @Size(max = 50, message = "Name must be at most 50 characters")
    private String name;
}
