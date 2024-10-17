package com.logumrh.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String name;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String legalName;

    @NotNull
    @Size(min = 11, max = 20)
    @Column(length = 20, nullable = false, unique = true)
    private String nationalId;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String industry;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @NotNull
    @Email
    @Size(max = 255)
    @Column(length = 255, nullable = false, unique = true)
    private String email;

    @NotNull
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,20}$", message = "Invalid phone number format")
    @Column(length = 20, nullable = false)
    private String phone;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String contactPerson;

    @Column(nullable = false)
    private boolean isActive;
}
