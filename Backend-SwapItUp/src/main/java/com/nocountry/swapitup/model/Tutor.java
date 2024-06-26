package com.nocountry.swapitup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
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

    @Lob
    private byte[] image;

    @Column(length = 75)
    private String industry;

    private String skills;

    @Min(0)
    @Max(5)
    private double score;

    private Integer exchangesMade;

    private Boolean active;

    @Column(length = 78)
    private String link_calendar;

    @OneToOne
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meeting> meetings = new ArrayList<>();

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    public void addMeeting(Meeting meeting) {
        meetings.add(meeting);
        meeting.setTutor(this);
    }

}
