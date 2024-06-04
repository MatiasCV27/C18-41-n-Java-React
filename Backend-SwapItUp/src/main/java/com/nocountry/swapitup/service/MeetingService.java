package com.nocountry.swapitup.service;

import com.nocountry.swapitup.dto.PendingMeetingDTO;
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

    public Meeting requestExchange(Integer idTutor, PendingMeetingDTO meetingDTO) {
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

    public List<PendingMeetingDTO> getPendingMeetingsByTutorId(Integer tutorId) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_IdTutor(tutorId);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PENDIENTES)
                .map(this::mapToPendingMeetingDTO)
                .collect(Collectors.toList());
    }

    private PendingMeetingDTO mapToPendingMeetingDTO(Meeting meeting) {
        return PendingMeetingDTO.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .message(meeting.getMessage())
                .schule(meeting.getSchule())
                .date(meeting.getDate())
                .build();
    }
}
