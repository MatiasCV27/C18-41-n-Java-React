package com.nocountry.swapitup.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    String name;
    String lastname;
    String username;
    String email;
    String password;
    boolean isActive;
    Integer points;
    String image;
    String aboutMe;
    LocalDateTime createAt;

}
