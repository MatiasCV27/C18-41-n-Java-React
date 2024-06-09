package com.nocountry.swapitup.auth;

import com.nocountry.swapitup.enums.Rolename;
import com.nocountry.swapitup.jwt.JwtService;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.ProfileRepository;
import com.nocountry.swapitup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails userDetails = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(userDetails);
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        return AuthResponse.builder()
                .id(user.getIdUser())
                .name(user.getName())
                .lastname(user.getLastname())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(String.valueOf(user.getRole()))
                .token(token)
                .build();
    }

    public String register(RegisterRequest request) {
        if (!userRepository.findByEmail(request.getEmail()).isPresent()) {
            User user = User.builder()
                    .name(request.getName())
                    .lastname(request.getLastname())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .username(request.getUsername())
                    .isActive(true)
                    .createAt(LocalDateTime.now())
                    .role(Rolename.ROLE_USER)
                    .build();
            userRepository.save(user);

            Profile profile = Profile.builder()
                    .user(user)
                    .points(1)
                    .build();
            profileRepository.save(profile);

            return "El usuario " + request.getUsername() + " se registró exitosamente";
        }
        return "El email ingresado ya existe en la base de datos";
    }

}
