package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
