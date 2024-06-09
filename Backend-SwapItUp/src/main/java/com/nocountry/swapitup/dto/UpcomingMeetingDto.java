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
public class UpcomingMeetingDto {

    String fullname;
    @Lob
    byte[] image;
    String schedule;
    String startDate;
    String endDate;
    String link;

}
