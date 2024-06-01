package com.nocountry.swapitup.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDto {

    String name;
    String lastname;
    String email;
    String gender;
    String country;
    String timeZone;
    String lenguage;
    String industry;
    String aboutMe;
    String skills;
    String experience;
    String link_linkedin;
    String link_portfolio;
    String image;

}
