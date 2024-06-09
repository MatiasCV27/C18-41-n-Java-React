package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    List<Review> findByTutor_IdTutor(Integer tutorId);

}
