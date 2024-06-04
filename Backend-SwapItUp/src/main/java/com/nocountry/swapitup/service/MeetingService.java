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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.nocountry.swapitup.utils.infoTokenUtils.getUsernameToken;

@Service
@RequiredArgsConstructor
public class MeetingService {

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
                .image(profile.getImage())
                .message(meetingDTO.getMessage())
                .schule(meetingDTO.getSchule())
                .date(meetingDTO.getDate())
                .status(StatusName.PENDIENTES)
                .tutor(tutor)
                .build();
        tutor.addMeeting(meeting);
        tutorRepository.save(tutor);
        return meeting;
    }

    public Meeting acceptOrRejectRequest(Integer idMeeting, LinkMeetDto linkDto, boolean response) {
        Meeting meeting = meetingRepository.findById(idMeeting)
                .orElseThrow(() -> new NotFoundDataException("Reunión con " + idMeeting + " no ha sido encontrado"));
        if (response && meeting.getStatus().equals(StatusName.PENDIENTES)) {
            meeting.setStatus(StatusName.PROXIMAS);
            meeting.setLink(linkDto.getLink());
            meetingRepository.save(meeting);
            return meeting;
        } else {
            meetingRepository.deleteById(idMeeting);
            return null;
        }
    }

    public Meeting endMeeting(Integer idMeeting, ScoreMeeting scoreMeeting) {
        Meeting meeting = meetingRepository.findById(idMeeting)
                .orElseThrow(() -> new NotFoundDataException("Reunión con " + idMeeting + " no ha sido encontrado"));
        if (meeting.getStatus().equals(StatusName.PROXIMAS)) {
            meeting.setStatus(StatusName.HISTORIAL);
            meeting.setMeetingScore(scoreMeeting.getMeetingScore());
            meetingRepository.save(meeting);
            return meeting;
        }
        return null;
    }

    //TODO: Listado de Proximas Reuniones

    public List<UpcomingMeetingDto> getUpcomingMeetingsByTutorId(Integer tutorId) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_IdTutor(tutorId);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PROXIMAS)
                .map(this::mapToUpcomingMeetingDTO)
                .collect(Collectors.toList());
    }

    private UpcomingMeetingDto mapToUpcomingMeetingDTO(Meeting meeting) {
        return UpcomingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .schule(meeting.getSchule())
                .date(meeting.getDate())
                .link(meeting.getLink())
                .build();
    }

    //TODO: Listado de Reuniones Pendientes

    public List<PendingMeetingDto> getPendingMeetingsByTutorId(Integer tutorId) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_IdTutor(tutorId);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PENDIENTES)
                .map(this::mapToPendingMeetingDTO)
                .collect(Collectors.toList());
    }

    private PendingMeetingDto mapToPendingMeetingDTO(Meeting meeting) {
        return PendingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .message(meeting.getMessage())
                .schule(meeting.getSchule())
                .date(meeting.getDate())
                .build();
    }

    //TODO: Listado de Historial Reuniones

    public List<HistoryMeetingDto> getHistoryMeetingsByTutorId(Integer tutorId) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_IdTutor(tutorId);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.HISTORIAL)
                .map(this::mapToHistoryMeetingDTO)
                .collect(Collectors.toList());
    }

    private HistoryMeetingDto mapToHistoryMeetingDTO(Meeting meeting) {
        return HistoryMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .date(meeting.getDate())
                .meetingScore(meeting.getMeetingScore())
                .build();
    }
}
