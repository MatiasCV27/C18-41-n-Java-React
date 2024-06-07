package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.TutorSearchDto;
import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.service.TutorSearchService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

    @GetMapping(value = "/tutor-filter")
    @Operation(summary = "Buscar tutores",
            description = "Con este controllador el usuario puede buscar a un tutor por su habilidad y filtrado por su industria. - Ejemplo de URL: http://localhost:8080/api/v1/tutor/buscar-tutor?skills=SEO&industry=MARKETING")
    public ResponseEntity<List<TutorSearchDto>> getAllTutorByFullname(
            @RequestParam(value = "skills", required = false) String skills,
            @RequestParam(value = "industry", required = false) String industry) {
        return ResponseEntity.ok(tutorSearchService.findAllTutorsByFullname(skills, industry));
    }

    @PutMapping(value = "/disable")
    @Operation(summary = "Desabilitar el tutor",
            description = "Con este controllador tutor puede desbilitar su cuenta si no esta habilitada.")
    public ResponseEntity<Void> disableTutor() {
        try {
            tutorSearchService.disableTutoring();
            return ResponseEntity.noContent().build();
        } catch (NotFoundDataException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping(value = "/enable")
    @Operation(summary = "Habilitar el tutor",
            description = "Con este controllador tutor puede habilitar su cuenta si esta deshabilitada.")
    public ResponseEntity<Void> enableTutor() {
        try {
            tutorSearchService.enableTutoring();
            return ResponseEntity.noContent().build();
        } catch (NotFoundDataException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
