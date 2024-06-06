package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.TutorSearchDto;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.service.TutorSearchService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1/tutor")
@RequiredArgsConstructor
@Tag(name = "Search a Tutor", description = "Controller to Find a Tutor")
public class TutorSearchController {

    private final TutorSearchService tutorSearchService;

    public ResponseEntity<Tutor> createTutor() {
        return ResponseEntity.ok(tutorSearchService.createTutor());
    }

    @GetMapping(value = "/skills")
    public ResponseEntity<List<Tutor>> getAllTutorByFullname(@RequestParam("skills") String skills) {
        return ResponseEntity.ok(tutorSearchService.findAllTutorsByFullname(skills));
    }

}
