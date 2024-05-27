package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/users")
    public List<User> listadoUsuarios() {
        return userRepository.findAll();
    }

    @PostMapping(value = "demo")
    public String welcome() {
        return "Welcome from secure endpoint";
    }

}
