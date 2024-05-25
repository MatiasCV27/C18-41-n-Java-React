package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
