package com.logumrh.dto.common;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractTypeDTO {

    private Long id;

    @NotNull(message = "Name is required")
    @Size(max = 50, message = "Name must be at most 50 characters")
    private String name;
}
