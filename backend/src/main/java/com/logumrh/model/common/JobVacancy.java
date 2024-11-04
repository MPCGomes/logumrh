package com.logumrh.model.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.logumrh.model.company.Company;
import com.logumrh.model.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job_vacancies")
public class JobVacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, unique = true, length = 10)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modality_id", nullable = false)
    private Modality modality;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "contract_type_id", nullable = false)
    private ContractType contractType;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false, length = 255)
    private String schedule;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "job_vacancy_requirements", joinColumns = @JoinColumn(name = "job_vacancy_id"))
    @Column(name = "requirement")
    private List<String> requirements;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "job_vacancy_benefits", joinColumns = @JoinColumn(name = "job_vacancy_id"))
    @Column(name = "benefit")
    private List<String> benefits;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @Lob
    private String observations;

    private BigDecimal salary;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "job_vacancy_tags", joinColumns = @JoinColumn(name = "job_vacancy_id"))
    @Column(name = "tag")
    private List<String> tags;

    private LocalDateTime closeDate;

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

    @JsonIgnore
    @OneToMany(mappedBy = "jobVacancy", fetch = FetchType.LAZY)
    private List<Application> applications;
}
