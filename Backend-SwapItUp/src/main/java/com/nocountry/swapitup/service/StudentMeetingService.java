package com.nocountry.swapitup.service;

import com.nocountry.swapitup.dto.*;
import com.nocountry.swapitup.enums.StatusName;
import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.repository.MeetingRepository;
import com.nocountry.swapitup.repository.ProfileRepository;
import com.nocountry.swapitup.repository.TutorRepository;
import com.nocountry.swapitup.utils.MapInfoTemplates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.nocountry.swapitup.utils.infoTokenUtils.getUsernameToken;

@Service
@RequiredArgsConstructor
public class StudentMeetingService {

    private final ProfileRepository profileRepository;
    private final TutorRepository tutorRepository;
    private final MeetingRepository meetingRepository;

    public Meeting requestExchange(Integer idTutor, PendingMeetingDto meetingDTO) {
        Profile profile = profileRepository.findByUser_Username(getUsernameToken())
                .orElseThrow(() -> new NotFoundDataException("Usuario " + getUsernameToken() + "no ha sido encontrado"));
        Tutor tutor = tutorRepository.findById(idTutor)
                .orElseThrow(() -> new NotFoundDataException("Tutor " + idTutor + "no ha sido encontrado"));
        Meeting meeting = Meeting.builder()
                .fullname(profile.getUser().getName() + " " + profile.getUser().getLastname())
                .username(profile.getUser().getUsername())
                .image(profile.getImage())
                .message(meetingDTO.getMessage())
                .schedule(meetingDTO.getSchedule())
                .startDate(meetingDTO.getStartDate())
                .endDate(meetingDTO.getEndDate())
                .status(StatusName.PENDIENTES)
                .tutor(tutor)
                .build();
        tutor.addMeeting(meeting);
        tutorRepository.save(tutor);
        return meeting;
    }

    public Meeting endMeeting(Integer idMeeting, ScoreMeetingDto scoreMeetingDto) {
        Meeting meeting = meetingRepository.findById(idMeeting)
                .orElseThrow(() -> new NotFoundDataException("Reunión con " + idMeeting + " no ha sido encontrado"));
        if (meeting.getStatus().equals(StatusName.PROXIMAS)) {
            meeting.setStatus(StatusName.HISTORIAL);
            meeting.setMeetingScore(scoreMeetingDto.getMeetingScore());
            addInteraction(meeting.getTutor().getIdTutor());
            meetingRepository.save(meeting);
            return meeting;
        }
        return null;
    }

    public void addInteraction(Integer idTutor) {
        Tutor tutor = tutorRepository.findById(idTutor)
                .orElseThrow(() -> new NotFoundDataException("Tutor del ID - " + idTutor + " no ha sido encontrado"));
        tutor.setExchangesMade(tutor.getExchangesMade() + 1);
        tutor.setScore(scoreAvarageByTutor(idTutor));
        tutorRepository.save(tutor);
    }

    public double scoreAvarageByTutor(Integer tutorId) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_IdTutor(tutorId);
        double averageScore = allMeetings.stream()
                .mapToDouble(Meeting::getMeetingScore)
                .average()
                .orElse(0.0);
        return averageScore;
    }

    //TODO: Listado de Reuniones de los Estudiantes

    public List<UpcomingMeetingDto> getUpcomingMeetingsByStudent(String username) {
        List<Meeting> allMeetings = meetingRepository.findByUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PROXIMAS)
                .map(MapInfoTemplates::mapToUpcomingMeetingDTO)
                .collect(Collectors.toList());
    }

    public List<PendingMeetingDto> getPendingMeetingsByStudent(String username) {
        List<Meeting> allMeetings = meetingRepository.findByUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PENDIENTES)
                .map(MapInfoTemplates::mapToPendingMeetingDTO)
                .collect(Collectors.toList());
    }

    public List<HistoryMeetingDto> getHistoryMeetingsByStudent(String username) {
        List<Meeting> allMeetings = meetingRepository.findByUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.HISTORIAL)
                .map(MapInfoTemplates::mapToHistoryMeetingDTO)
                .collect(Collectors.toList());
    }

}
