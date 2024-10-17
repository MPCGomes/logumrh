package com.logumrh.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobVacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String title;

    @NotNull
    @Size(max = 10)
    @Column(length = 10, nullable = false, unique = true)
    private String code;

    @NotNull
    @Size(max = 50)
    @Column(length = 50, nullable = false)
    private String modality;

    @NotNull
    @Lob
    private String description;

    @Size(max = 255)
    @Column(length = 255)
    private String location;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Lob
    private String objectiveRequirements;

    @Lob
    private String subjectiveRequirements;

    @Lob
    private String benefits;

    @Lob
    private String schedule;

    @NotNull
    @Column(nullable = false)
    private BigDecimal salary;

    @ElementCollection
    private List<String> tags;

    @Size(max = 50)
    @Column(length = 50)
    private String contractType;

    private LocalDateTime closeDate;

    @Column(nullable = false)
    private boolean isActive;
}
