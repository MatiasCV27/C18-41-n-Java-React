package com.nocountry.swapitup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReview;

    @Column(length = 75)
    private String fullname;

    private String username;

    @Lob
    private byte[] image;

    private String dateCreated;

    private String comment;

    private double meetingScore;

    @ManyToOne
    @JoinColumn(name = "idTutor")
    @JsonIgnore
    private Tutor tutor;

}
