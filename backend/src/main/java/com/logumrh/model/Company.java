package com.logumrh.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String legalName;

    @Column(nullable = false, unique = true, length = 20)
    private String nationalId;

    @Column(nullable = false)
    private String industry;

    private Boolean isActive = true;

    private Integer createdBy;
    private Integer updatedBy;
}
