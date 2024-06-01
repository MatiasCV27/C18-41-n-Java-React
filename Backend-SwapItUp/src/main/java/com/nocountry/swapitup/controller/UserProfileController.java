package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.UserProfileDto;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/profile")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userService;

    @GetMapping(value = "{username}")
    public ResponseEntity<UserProfileDto> getInfoUser(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(userService.getProfile(username));
    }

    @PutMapping(value = "{username}")
    public ResponseEntity<User> updateUserInfo(@PathVariable(value = "username") String username, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUserInfo(username, user));
    }

    @PutMapping(value = "/user/{id}")
    public ResponseEntity<Profile> updateProfileInfo(@PathVariable(value = "id") Integer id, @RequestBody Profile profile) {
        return ResponseEntity.ok(userService.updateProfileInfo(id, profile));
    }

    @DeleteMapping(value = "{username}")
    public ResponseEntity<String> deleteUser(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(userService.eliminarUsuario(username));
    }

}
