package com.logumrh.model.user;

import com.logumrh.model.auth.Role;
import com.logumrh.model.common.Address;
import com.logumrh.model.common.Disability;
import com.logumrh.model.common.EducationLevel;
import com.logumrh.model.common.Gender;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
    @Column(length = 255, nullable = false, unique = true)
    private String email;

    @NotNull
    @Size(min = 8, max = 255)
    @Column(length = 255, nullable = false)
    private String password;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "gender_id", nullable = false)
    private Gender gender;

    @ManyToOne
    @JoinColumn(name = "disability_id", nullable = false)
    private Disability disability;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Lob
    private byte[] photo;

    @NotNull
    @Column(nullable = false)
    private LocalDate birthDate;

    @Size(max = 50)
    @Column(length = 50)
    private String maritalStatus;

    @Size(max = 50)
    @Column(length = 50)
    private String ethnicity;

    @Size(max = 20)
    @Column(length = 20)
    private String phone;

    @Size(max = 255)
    @Column(length = 255)
    private String socialName;

    @NotNull
    @Size(max = 50)
    @Column(length = 50, nullable = false)
    private String nationality;

    @NotNull
    @Size(min = 11, max = 11)
    @Column(length = 11, nullable = false, unique = true)
    private String nationalId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "education_level_id", nullable = false)
    private EducationLevel educationLevel;

    @Column(nullable = false)
    private boolean isActive;
}
