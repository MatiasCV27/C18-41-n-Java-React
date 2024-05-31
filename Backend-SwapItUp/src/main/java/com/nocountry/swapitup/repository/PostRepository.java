package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
