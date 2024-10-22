package com.logumrh.model.common;

import com.logumrh.model.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String title;

    @NotNull
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String areaOfExpertise;

    @Lob
    @NotNull
    private byte[] file;

    @Column(nullable = false)
    private boolean isActive;
}
