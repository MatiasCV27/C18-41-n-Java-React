package com.nocountry.swapitup.repository;

import com.nocountry.swapitup.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
}
