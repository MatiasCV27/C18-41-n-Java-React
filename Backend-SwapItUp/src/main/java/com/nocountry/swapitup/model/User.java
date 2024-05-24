package com.nocountry.swapitup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String lastname;

    @Email
    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Size(min = 8)
    @Column(nullable = false, length = 50)
    private String password;

    private boolean status;

    private String image;

    @Column(length = 450)
    private String aboutMe;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable = false)
    private LocalDateTime createAt;

    @ManyToOne
    @JoinColumn(name = "idRol", referencedColumnName = "idRol")
    @JsonIgnore
    private Rol rol;

    @OneToMany(mappedBy = "user")
    private List<Review> reviews;

    @OneToMany(mappedBy = "user")
    private List<Post> posts;

    @ManyToMany
    @JoinTable(name = "UserInterest",
            joinColumns = @JoinColumn(name = "idUser"),
            inverseJoinColumns = @JoinColumn(name = "idInterest"))
    private List<Interest> interests;
}
