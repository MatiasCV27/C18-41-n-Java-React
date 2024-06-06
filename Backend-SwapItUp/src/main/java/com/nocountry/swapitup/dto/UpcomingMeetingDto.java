package com.nocountry.swapitup.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpcomingMeetingDto {

    String fullname;
    byte[] image;
    String schule;
    String date;
    String link;

}
