package com.nocountry.swapitup.service;

import com.nocountry.swapitup.dto.UserProfileDto;
import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.ProfileRepository;
import com.nocountry.swapitup.repository.TutorRepository;
import com.nocountry.swapitup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

import static com.nocountry.swapitup.utils.infoTokenUtils.getUsernameToken;

@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final TutorRepository tutorRepository;

    public UserProfileDto getProfile(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundDataException("Usuario " + username + "no ha sido encontrado"));
        Profile profile = profileRepository.findByUser_IdUser(user.getIdUser()).orElse(null);
        return UserProfileDto.builder()
                .name(user.getName())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .gender(profile.getGender())
                .country(profile.getCountry())
                .timeZone(profile.getTimeZone())
                .lenguage(profile.getLenguage())
                .aboutMe(profile.getAboutMe())
                .skills(profile.getSkills())
                .industry(profile.getIndustry())
                .experience(profile.getExperience())
                .link_linkedin(profile.getLink_linkedin())
                .link_portfolio(profile.getLink_portfolio())
                .image(profile.getImage())
                .build();
    }

    public User updateUserInfo(String username, User user) {
        User newUser = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundDataException("Usuario " + username + "no ha sido encontrado"));
        if (newUser.getUsername().equals(getUsernameToken())) {
            newUser.setName(user.getName());
            newUser.setLastname(user.getLastname());
            Tutor tutor = tutorRepository.findByUser_Username(username).orElse(null);
            tutor.setFullname(newUser.getName() + " " + newUser.getLastname());
            tutorRepository.save(tutor);
            return userRepository.save(newUser);
        }
        return null;
    }

    public Profile updateProfileInfo(Integer id, Profile profile) {
        Profile newprofile = profileRepository.findByUser_IdUser(id)
                .orElseThrow(() -> new NotFoundDataException("Usuario con el " + id + "no ha sido encontrado"));
        User user = userRepository.findById(id).orElse(null);
        if (user.getUsername().equals(getUsernameToken())) {
            newprofile.setGender(profile.getGender());
            newprofile.setCountry(profile.getCountry());
            newprofile.setTimeZone(profile.getTimeZone());
            newprofile.setLenguage(profile.getLenguage());
            newprofile.setIndustry(profile.getIndustry());
            newprofile.setAboutMe(profile.getAboutMe());
            newprofile.setSkills(profile.getSkills());
            newprofile.setExperience(profile.getExperience());
            newprofile.setLink_linkedin(profile.getLink_linkedin());
            newprofile.setLink_portfolio(profile.getLink_portfolio());
            Tutor tutor = tutorRepository.findByUser_Username(user.getUsername()).orElse(null);
            if (tutor != null) {
                tutor.setIndustry(newprofile.getIndustry());
                tutor.setSkills(newprofile.getSkills());
                tutorRepository.save(tutor);
            }
            return profileRepository.save(newprofile);
        }
        return null;
    }

    public String eliminarUsuario(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundDataException("Usuario " + username + "no ha sido encontrado"));
        if (user.getUsername().equals(getUsernameToken())) {
            userRepository.deleteById(user.getIdUser());
            return "El usuario junto con su perfil han ido eliminado con exito";
        } else {
            return "El usuario no ha sido encontrado";
        }
    }

    public Profile saveImage(Integer profileId, MultipartFile imageFile) throws IOException {
        Optional<Profile> profileOptional = profileRepository.findById(profileId);
        if (profileOptional.isPresent()) {
            Profile profile = profileOptional.get();
            profile.setImage(imageFile.getBytes());
            Tutor tutor = tutorRepository.findByUser_Username(profile.getUser().getUsername()).orElse(null);
            tutor.setImage(profile.getImage());
            tutorRepository.save(tutor);
            return profileRepository.save(profile);
        } else {
            throw new IllegalArgumentException("Profile not found");
        }
    }

    public void deleteImage(Integer profileId) {
        Optional<Profile> profileOptional = profileRepository.findById(profileId);
        if (profileOptional.isPresent()) {
            Profile profile = profileOptional.get();
            profile.setImage(null);
            profileRepository.save(profile);
        } else {
            throw new IllegalArgumentException("Profile not found");
        }
    }
}
