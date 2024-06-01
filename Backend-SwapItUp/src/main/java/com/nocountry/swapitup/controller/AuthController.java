package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.auth.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Controller for Authentication")
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "login")
    @Operation(
            summary = "Login User",
            description = "Autentica al usuario y retorna el token de autorización con la info del usuario."
    )
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    @Operation(
            summary = "Register User",
            description = "Registra a un nuevo usuario y lo almacena en la base de datos."
    )
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

}
