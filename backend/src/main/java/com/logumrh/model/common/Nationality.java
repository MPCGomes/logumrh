package com.logumrh.model.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.logumrh.model.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "nationalities")
public class Nationality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "nationality", fetch = FetchType.LAZY)
    private List<User> users;
}
