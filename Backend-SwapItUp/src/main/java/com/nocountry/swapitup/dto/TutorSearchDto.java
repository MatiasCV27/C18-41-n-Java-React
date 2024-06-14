package com.nocountry.swapitup.dto;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TutorSearchDto {

    Integer idTutor;
    String fullname;
    String username;
    @Lob
    byte[] image;
    String skills;
    String industry;
    double score;
    Integer exchangesMade;
    String link;
    boolean active;

}
