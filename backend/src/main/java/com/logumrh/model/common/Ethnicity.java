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
@Table(name = "ethnicities")
public class Ethnicity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "ethnicity", fetch = FetchType.LAZY)
    private List<User> users;
}
