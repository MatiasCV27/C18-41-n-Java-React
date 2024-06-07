package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.*;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.service.StudentMeetingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1/meeting/student")
@RequiredArgsConstructor
@Tag(name = "Meeting for Student", description = "Controller for Meetings Students")
public class StudentMeetingController {

    private final StudentMeetingService meetingService;

    @PostMapping(value = "/send-request/{idTutor}")
    @Operation(summary = "Enviar Solicitud de Intercambio",
            description = "Con el ID del Tutor y agregando el mensaje, la fecha y el horario de la reunión se añade a meetings con el Status de PENDIENTE")
    public ResponseEntity<Meeting> sendMeetingRequest(@PathVariable(value = "idTutor") Integer idTutor, @RequestBody PendingMeetingDto meetingDTO) {
        return ResponseEntity.ok(meetingService.requestExchange(idTutor, meetingDTO));
    }

    @PostMapping(value = "/histories/{idMeeting}")
    @Operation(summary = "Finalizar reunión",
            description = "Con el ID de la reunion y el estudiante agrega la puntuación de la reunión. El status se modificara automaticamente en HISTORY")
    public ResponseEntity<Meeting> endMeetingToHistory(@PathVariable(value = "idMeeting") Integer idMeeting, @RequestBody ScoreMeetingDto scoreDto) {
        return ResponseEntity.ok(meetingService.endMeeting(idMeeting, scoreDto));
    }

    //Todo: Listados de reuniones de Estudiantes

    @GetMapping(value = "/upcomings/{username}")
    @Operation(summary = "Obtener los Meetings por PROXIMOS del Estudiante",
            description = "Obtiene todos las reuniones del estudiante de estado PROXIMOS por el IdTutor")
    public ResponseEntity<List<UpcomingMeetingDto>> getAllStudentMeetingUpcomings(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(meetingService.getUpcomingMeetingsByStudent(username));
    }

    @GetMapping(value = "/pendings/{username}")
    @Operation(summary = "Obtener los Meetings por PENDIENTES del Estudiante",
            description = "Obtiene todos las reuniones del estudiante de estado PENDIENTES por el IdTutor")
    public ResponseEntity<List<PendingMeetingDto>> getAllStudentMeetingPendings(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(meetingService.getPendingMeetingsByStudent(username));
    }

    @GetMapping(value = "/histories/{username}")
    @Operation(summary = "Obtener los Meetings por HISTORY del Estudiante",
            description = "Obtiene todos las reuniones del estudiante de estado HISTORY por el IdTutor")
    public ResponseEntity<List<HistoryMeetingDto>> getAllStudentMeetingHistories(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(meetingService.getHistoryMeetingsByStudent(username));
    }
}