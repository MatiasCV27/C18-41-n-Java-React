package com.nocountry.swapitup.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProfile;

    @Column(length = 25)
    private String gender;

    @Column(length = 50)
    private String country;

    @Column(length = 75)
    private String timeZone;

    @Column(length = 50)
    private String lenguage;

    @Column(length = 75)
    private String industry;

    @Column(length = 450)
    private String aboutMe;

    private String skills;

    @Column(length = 450)
    private String experience;

    @Column(length = 78)
    private String link_linkedin;

    @Column(length = 78)
    private String link_portfolio;

    @Min(value = 0)
    private Integer points;

    @Column(length = 450)
    private String image;

    @OneToOne
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    private User user;

}
