package com.nocountry.swapitup.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReview;

    @Column(length = 50)
    private String title;

    @Column(length = 450)
    private String description;

    @Min(value = 0)
    @Max(value = 10)
    private Integer score;

    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    private User user;

}
