package com.logumrh.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 20)
    @Column(length = 20, nullable = false)
    private String postalCode;

    @NotNull
    @Size(max = 100)
    @Column(length = 100, nullable = false)
    private String country;

    @NotNull
    @Size(max = 100)
    @Column(length = 100, nullable = false)
    private String state;

    @NotNull
    @Size(max = 100)
    @Column(length = 100, nullable = false)
    private String city;

    @NotNull
    @Size(max = 100)
    @Column(length = 100, nullable = false)
    private String district;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String street;

    @NotNull
    @Size(max = 20)
    @Column(length = 20, nullable = false)
    private String number;

    @Size(max = 100)
    @Column(length = 100)
    private String complement;
}
