package com.nocountry.swapitup.controller;

import com.nocountry.swapitup.dto.HistoryMeetingDto;
import com.nocountry.swapitup.dto.LinkMeetDto;
import com.nocountry.swapitup.dto.PendingMeetingDto;
import com.nocountry.swapitup.dto.UpcomingMeetingDto;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.service.TutorMeetingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1/meeting/tutor")
@RequiredArgsConstructor
@Tag(name = "Meeting for Tutor", description = "Controller for Meetings Tutors")
public class TutorMeetingController {

    private final TutorMeetingService meetingService;

    @PostMapping(value = "/status-request/{idMeeting}/response")
    @Operation(summary = "Aceptar o Rechazar la Solicitud de Intercambio",
            description = "Con el ID de la reunion y se agrega el Link. Si se acepta la solicitud su status se modifica a PROXIMOS y si se rechaza se elimina la solicitud")
    public ResponseEntity<Meeting> acceptOrRejectMeetingRequest(@PathVariable(value = "idMeeting") Integer idMeeting, @RequestBody LinkMeetDto linkDto, @RequestParam("response") boolean response) {
        return ResponseEntity.ok(meetingService.acceptOrRejectRequest(idMeeting, linkDto, response));
    }

    //Todo: Listados de reuniones de Tutores

    @GetMapping(value = "/upcomings/{idTutor}")
    @Operation(summary = "Obtener los Meetings por PROXIMOS del Tutor",
            description = "Obtiene todos las reuniones del Tutor de estado PROXIMOS por el IdTutor")
    public ResponseEntity<List<UpcomingMeetingDto>> getAllTutorMeetingUpcomings(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getUpcomingMeetingsByTutorId(idTutor));
    }

    @GetMapping(value = "/pendings/{idTutor}")
    @Operation(summary = "Obtener los Meetings por PENDIENTES del Tutor",
            description = "Obtiene todos las reuniones del tutor de estado PENDIENTES por el IdTutor")
    public ResponseEntity<List<PendingMeetingDto>> getAllTutorMeetingPendings(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getPendingMeetingsByTutorId(idTutor));
    }

    @GetMapping(value = "/histories/{idTutor}")
    @Operation(summary = "Obtener los Meetings por HISTORY del Tutor",
            description = "Obtiene todos las reuniones del Tutor de estado HISTORY por el IdTutor")
    public ResponseEntity<List<HistoryMeetingDto>> getAllTutorMeetingHistories(@PathVariable(value = "idTutor") Integer idTutor) {
        return ResponseEntity.ok(meetingService.getHistoryMeetingsByTutorId(idTutor));
    }

}
