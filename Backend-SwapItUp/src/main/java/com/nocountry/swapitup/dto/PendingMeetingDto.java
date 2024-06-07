package com.nocountry.swapitup.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PendingMeetingDto {

    String fullname;
    byte[] image;
    String message;
    String schedule;
    String startDate;
    String endDate;

}
