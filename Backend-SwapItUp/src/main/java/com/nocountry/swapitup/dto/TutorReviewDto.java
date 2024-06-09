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
public class TutorReviewDto {

    String fullname;
    @Lob
    byte[] image;
    String comment;
    String dateCreated;
    double meetingScore;

}
