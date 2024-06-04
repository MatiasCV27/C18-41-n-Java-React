package com.nocountry.swapitup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.swapitup.enums.StatusName;
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
@Table(name = "meeting")
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMetting;

    @Column(length = 75)
    private String fullname;

    private byte[] image;

    @Column(unique = true, length = 450)
    private String message;

    @Column(length = 75)
    private String schule;

    @Column(length = 50)
    private String date;

    private boolean active;

    @Enumerated(EnumType.STRING)
    private StatusName status;

    @Column(length = 100)
    private String link;

    @ManyToOne
    @JoinColumn(name = "idTutor")
    @JsonIgnore
    private Tutor tutor;

}
