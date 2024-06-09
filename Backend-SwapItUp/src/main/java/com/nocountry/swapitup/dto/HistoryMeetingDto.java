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
public class HistoryMeetingDto {

    String fullname;
    @Lob
    byte[] image;
    String startDate;
    String endDate;
    double meetingScore;

}
