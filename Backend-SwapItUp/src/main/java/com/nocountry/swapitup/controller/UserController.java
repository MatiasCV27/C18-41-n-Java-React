package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> listarUsuarios() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public User agregarUsuario(@RequestBody User user) {
        return userRepository.save(user);
    }

}
