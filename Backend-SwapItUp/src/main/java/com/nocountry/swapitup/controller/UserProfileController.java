package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.UserProfileDto;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.service.UserProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.Table;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1/profile")
@RequiredArgsConstructor
@Tag(name = "Profile", description = "Controller for User Profile")
public class UserProfileController {

    private final UserProfileService userService;

    @GetMapping(value = "{username}")
    @Operation(summary = "Obtener usuario",
            description = "Obtiene todos los datos del usuario que se ha hecho login a la pagina.")
    public ResponseEntity<UserProfileDto> getInfoUser(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(userService.getProfile(username));
    }

    @PutMapping(value = "{username}")
    @Operation(summary = "Editar usuario",
            description = "Permite editar el nombre y el apellido del usuario logeado mediante su username.")
    public ResponseEntity<User> updateUserInfo(@PathVariable(value = "username") String username, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUserInfo(username, user));
    }

    @PutMapping(value = "/user/{id}")
    @Operation(summary = "Editar perfil",
            description = "Permite editar la mayoria de los datos del perfil del usuario logeado mediante su Id del usuario.")
    public ResponseEntity<Profile> updateProfileInfo(@PathVariable(value = "id") Integer id, @RequestBody Profile profile) {
        return ResponseEntity.ok(userService.updateProfileInfo(id, profile));
    }

    @DeleteMapping(value = "{username}")
    @Operation(summary = "Eliminar usuario",
            description = "Permite eliminar el usuario junto a su perfil cuando e ingresa el nombre de dicho usuario")
    public ResponseEntity<String> deleteUser(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(userService.eliminarUsuario(username));
    }

    //todo: IMAGEN
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
