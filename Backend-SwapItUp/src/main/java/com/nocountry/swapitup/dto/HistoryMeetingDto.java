package com.nocountry.swapitup.dto;

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
    byte[] image;
    String date;
    double meetingScore;

}
