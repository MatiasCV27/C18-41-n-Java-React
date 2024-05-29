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
public class AuthResponse {

    Integer id;
    String name;
    String lastname;
    String username;
    String email;
    String role;
    String token;

}
