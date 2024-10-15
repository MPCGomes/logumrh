package com.logumrh.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Lob
    private byte[] photo;

    @Column(nullable = false)
    private LocalDate birthDate;

    private String maritalStatus;
    private String ethnicity;
    private String disability;
    private String phone;
    private String socialName;
    private String nationality;

    @Column(nullable = false, unique = true, length = 11)
    private String nationalId;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @ManyToOne
    private EducationLevel educationLevel;

    private Boolean isActive = true;
}