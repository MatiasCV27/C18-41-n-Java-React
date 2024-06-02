package com.nocountry.swapitup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tutor")
public class Tutor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTutor;

    @Column(length = 75)
    private String fullname;

    private byte[] image;

    @Column(length = 75)

    private String industry;

    private double stars;

    private Integer swapPoints;

    private boolean active;

    @OneToOne
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    private User user;

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL)
    private List<Meeting> meetings;

}
