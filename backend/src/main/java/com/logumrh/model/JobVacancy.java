package com.logumrh.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class JobVacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(unique = true, length = 10)
    private String code;

    @Column(nullable = false)
    private String modality;

    private String location;
    private String neighborhood;
    private String city;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @ManyToOne
    private Category category;

    private String objectiveRequirements;
    private String subjectiveRequirements;
    private String benefits;

    @Lob
    @Column(nullable = false)
    private String description;

    private String schedule;
    private BigDecimal salary;

    @ElementCollection
    private List<String> tags;

    private String contractType;

    private LocalDateTime announcementDate = LocalDateTime.now();
    private LocalDateTime closeDate;
    private Boolean isActive = true;
}
