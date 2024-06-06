package com.nocountry.swapitup.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TutorSearchDto {

    String fullname;
    byte[] image;
    String skills;
    String industry;
    double score;
    String link;
    boolean active;

}
