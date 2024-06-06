package com.nocountry.swapitup.controller;

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

    @PostMapping(value = "/create")
    @Operation(summary = "Convertirse en un tutor",
            description = "Con este controllador el Usuario del sistema decide tambien serlo y asi enseñar a otros.")
    public ResponseEntity<Tutor> createTutor() {
        return ResponseEntity.ok(tutorSearchService.createTutor());
    }

    @GetMapping(value = "/fullname")
    public ResponseEntity<List<Tutor>> getAllTutorByFullname(@RequestParam("fullname") String fullname) {
        return ResponseEntity.ok(tutorSearchService.findAllTutorsByFullname(fullname));
    }

}
