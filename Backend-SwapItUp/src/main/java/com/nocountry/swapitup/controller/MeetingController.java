package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.PendingMeetingDTO;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.service.MeetingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1/meeting")
@RequiredArgsConstructor
@Tag(name = "Meeting", description = "Controller for Meetings")
public class MeetingController {

    private final MeetingService meetingService;

    @PostMapping(value = "/send-request/{idTutor}")
    @Operation(summary = "Enviar Solicitud de Intercambio",
            description = "Con el ID del Tutor y agregando el mensaje, la fecha y el horario de la reunión se añade a meetings con el Status de PENDIENTE")
    public ResponseEntity<Meeting> sendMeetingRequest(@PathVariable(value = "idTutor") Integer idTutor, @RequestBody PendingMeetingDTO meetingDTO) {
        return ResponseEntity.ok(meetingService.requestExchange(idTutor, meetingDTO));
    }

    @GetMapping(value = "/pendings/{idTutor}")
    @Operation(summary = "Obtener los Meetings por PENDIENTES",
            description = "Obtiene todos las reuniones de estado PENDIENTES por el IdTutor")
    public ResponseEntity<List<PendingMeetingDTO>> getAllMeetingPendings(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getPendingMeetingsByTutorId(idTutor));
    }

}
