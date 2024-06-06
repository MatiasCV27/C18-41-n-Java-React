package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface TutorRepository extends JpaRepository<Tutor, Integer>, JpaSpecificationExecutor<Tutor> {

    Optional<Tutor> findByUser_Username(String username);

    Optional<Tutor> findByFullname(String fullname);

}