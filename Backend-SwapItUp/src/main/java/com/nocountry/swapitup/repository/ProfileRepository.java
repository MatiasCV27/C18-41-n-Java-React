package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {

    Optional<Profile> findByUser_IdUser(Integer idUser);

}
