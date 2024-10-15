package com.logumrh.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class EducationLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String name;
}
