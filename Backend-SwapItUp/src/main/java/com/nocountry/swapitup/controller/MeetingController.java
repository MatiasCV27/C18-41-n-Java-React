package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.*;
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
    public ResponseEntity<Meeting> sendMeetingRequest(@PathVariable(value = "idTutor") Integer idTutor, @RequestBody PendingMeetingDto meetingDTO) {
        return ResponseEntity.ok(meetingService.requestExchange(idTutor, meetingDTO));
    }

    @PostMapping(value = "/status-request/{idMeeting}/response")
    @Operation(summary = "Aceptar o Rechazar la Solicitud de Intercambio",
            description = "Con el ID de la reunion y se agrega el Link. Si se acepta la solicitud su status se modifica a PROXIMOS y si se rechaza se elimina la solicitud")
    public ResponseEntity<Meeting> acceptOrRejectMeetingRequest(@PathVariable(value = "idMeeting") Integer idMeeting, @RequestBody LinkMeetDto linkDto, @RequestParam("response") boolean response) {
        return ResponseEntity.ok(meetingService.acceptOrRejectRequest(idMeeting, linkDto, response));
    }

    @PostMapping(value = "/history/{idMeeting}")
    @Operation(summary = "Finalizar reunión",
            description = "Con el ID de la reunion y el estudiante agrega la puntuación de la reunión. El status se modificara automaticamente en HISTORY")
    public ResponseEntity<Meeting> endMeetingToHistory(@PathVariable(value = "idMeeting") Integer idMeeting, @RequestBody ScoreMeeting scoreDto) {
        return ResponseEntity.ok(meetingService.endMeeting(idMeeting, scoreDto));
    }

    //Todo: Listados de reuniones

    @GetMapping(value = "/upcomings/{idTutor}")
    @Operation(summary = "Obtener los Meetings por PROXIMOS",
            description = "Obtiene todos las reuniones de estado PROXIMOS por el IdTutor")
    public ResponseEntity<List<UpcomingMeetingDto>> getAllMeetingUpcomings(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getUpcomingMeetingsByTutorId(idTutor));
    }

    @GetMapping(value = "/pendings/{idTutor}")
    @Operation(summary = "Obtener los Meetings por PENDIENTES",
            description = "Obtiene todos las reuniones de estado PENDIENTES por el IdTutor")
    public ResponseEntity<List<PendingMeetingDto>> getAllMeetingPendings(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getPendingMeetingsByTutorId(idTutor));
    }

    @GetMapping(value = "/histories/{idTutor}")
    @Operation(summary = "Obtener los Meetings por HISTORY",
            description = "Obtiene todos las reuniones de estado HISTORY por el IdTutor")
    public ResponseEntity<List<HistoryMeetingDto>> getAllMeetingHistories(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getHistoryMeetingsByTutorId(idTutor));
    }
}