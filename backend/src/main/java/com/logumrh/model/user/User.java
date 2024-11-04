package com.logumrh.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.logumrh.model.auth.Role;
import com.logumrh.model.common.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false, length = 255)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gender_id", nullable = false)
    private Gender gender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "disability_id", nullable = false)
    private Disability disability;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "marital_status_id", nullable = false)
    private MaritalStatus maritalStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ethnicity_id", nullable = false)
    private Ethnicity ethnicity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nationality_id", nullable = false)
    private Nationality nationality;

    @Lob
    private byte[] photo;

    @Column(nullable = false)
    private LocalDate birthDate;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(length = 255)
    private String socialName;

    @Column(nullable = false, unique = true, length = 11)
    private String nationalId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "education_level_id", nullable = false)
    private EducationLevel educationLevel;

    @Column(nullable = false)
    private Boolean isActive = true;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by", nullable = false)
    private User createdBy;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "updated_by")
    private User updatedBy;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_drivers_licenses",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "drivers_license_id")
    )
    private List<DriversLicense> driversLicenses;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Resume> resumes;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Application> applications;
}
