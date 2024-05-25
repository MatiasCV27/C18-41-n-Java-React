package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.model.Rol;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.RolRepository;
import com.nocountry.swapitup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolRepository rolRepository;

    @GetMapping("/users")
    public List<User> listadoUsuarios() {
        return userRepository.findAll();
    }

    @GetMapping("/roles")
    public List<Rol> listaRoles() {
        return rolRepository.findAll();
    }

}
