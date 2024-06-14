package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {

    List<Meeting> findByUsername(String username);

    List<Meeting> findByTutor_IdTutor(Integer tutorId);

    List<Meeting> findByTutor_UserUsername(String username);

}
