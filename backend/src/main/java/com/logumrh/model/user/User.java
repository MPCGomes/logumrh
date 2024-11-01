package com.logumrh.model.user;

import com.logumrh.model.auth.Role;
import com.logumrh.model.common.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Email
    @Size(max = 255)
    @Column(unique = true, nullable = false)
    private String email;

    @NotNull
    @Size(min = 8, max = 255)
    @Column(nullable = false)
    private String password;

    @NotNull
    @Size(max = 255)
    @Column(nullable = false)
    private String name;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "gender_id", nullable = false)
    private Gender gender;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "disability_id", nullable = false)
    private Disability disability;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "marital_status_id", nullable = false)
    private MaritalStatus maritalStatus;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "ethnicity_id", nullable = false)
    private Ethnicity ethnicity;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "nationality_id", nullable = false)
    private Nationality nationality;

    @NotNull
    @Column(nullable = false)
    private LocalDate birthDate;

    @NotNull
    @Size(max = 20)
    @Column(nullable = false)
    private String phone;

    @Size(max = 255)
    private String socialName;

    @NotNull
    @Size(max = 11)
    @Column(unique = true, nullable = false)
    private String nationalId;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "education_level_id", nullable = false)
    private EducationLevel educationLevel;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @ManyToMany
    @JoinTable(
            name = "user_drivers_licenses",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "drivers_license_id")
    )
    private List<DriversLicense> driversLicenses;

    @Lob
    private byte[] photo;

    @NotNull
    @Column(nullable = false)
    private Boolean isActive = true;

    @NotNull
    @Column(nullable = false, updatable = false)
    private LocalDate createdAt;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "created_by", nullable = false)
    private User createdBy;

    @Column
    private LocalDate updatedAt;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private User updatedBy;
}
