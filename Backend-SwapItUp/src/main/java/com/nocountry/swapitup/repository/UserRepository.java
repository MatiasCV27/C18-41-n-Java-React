package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
