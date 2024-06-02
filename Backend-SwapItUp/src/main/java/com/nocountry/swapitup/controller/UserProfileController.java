package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.UserProfileDto;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

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

    //IMAGEN

    @PostMapping(value = "/{id}/image")
    public ResponseEntity<Profile> uploadImage(@PathVariable Integer id, @RequestParam MultipartFile imageFile){
        try{
            Profile profile = userService.saveImage(id,imageFile);
            return ResponseEntity.ok(profile);
        }catch (IOException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}/image")
    public ResponseEntity<Void> deleteImage(@PathVariable Integer id){
        userService.deleteImage(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable String userName){
        Optional<UserProfileDto> profile = Optional.ofNullable(userService.getProfile(userName));
        if(profile.isPresent() && profile.get().getImage() != null){
            return ResponseEntity.ok(profile.get().getImage());
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
