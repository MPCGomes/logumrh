package com.logumrh.dto.common;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {
    @NotNull(message = "ID cannot be null")
    private Long id;

    @NotNull(message = "Postal code is required")
    @Size(min = 4, max = 20, message = "Postal code must be between 4 and 20 characters")
    private String postalCode;

    @NotNull(message = "Country is required")
    @Size(min = 2, max = 100, message = "Country must be between 2 and 100 characters")
    private String country;

    @NotNull(message = "State is required")
    @Size(min = 2, max = 100, message = "State must be between 2 and 100 characters")
    private String state;

    @NotNull(message = "City is required")
    @Size(min = 2, max = 100, message = "City must be between 2 and 100 characters")
    private String city;

    @NotNull(message = "District is required")
    @Size(min = 2, max = 100, message = "District must be between 2 and 100 characters")
    private String district;

    @NotNull(message = "Street is required")
    @Size(min = 2, max = 255, message = "Street must be between 2 and 255 characters")
    private String street;

    @NotNull(message = "Number is required")
    @Size(min = 1, max = 20, message = "Number must be between 1 and 20 characters")
    private String number;

    @Size(max = 100, message = "Complement can have up to 100 characters")
    private String complement;
}
