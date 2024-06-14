package com.nocountry.swapitup.service;

import com.nocountry.swapitup.dto.HistoryMeetingDto;
import com.nocountry.swapitup.dto.LinkMeetDto;
import com.nocountry.swapitup.dto.PendingMeetingDto;
import com.nocountry.swapitup.dto.UpcomingMeetingDto;
import com.nocountry.swapitup.enums.StatusName;
import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.model.Profile;
import com.nocountry.swapitup.repository.MeetingRepository;
import com.nocountry.swapitup.repository.ProfileRepository;
import com.nocountry.swapitup.utils.MapInfoTemplates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TutorMeetingService {

    private final MeetingRepository meetingRepository;
    private final ProfileRepository profileRepository;

    public Meeting acceptOrRejectRequest(Integer idMeeting, LinkMeetDto linkDto, boolean response) {
        Meeting meeting = meetingRepository.findById(idMeeting)
                .orElseThrow(() -> new NotFoundDataException("Reunión con " + idMeeting + " no ha sido encontrado"));
        if (response && meeting.getStatus().equals(StatusName.PENDIENTES)) {
            meeting.setStatus(StatusName.PROXIMAS);
            meeting.setLink(linkDto.getLink());
            removeSwapis(meeting.getUsername());
            meetingRepository.save(meeting);
            return meeting;
        } else {
            meetingRepository.deleteById(idMeeting);
            return null;
        }
    }

    public void removeSwapis(String username) {
        Profile profile = profileRepository.findByUser_Username(username)
                .orElseThrow(() -> new NotFoundDataException("Perfil de " + username + " no ha sido encontrado"));
        if (profile.getPoints() > 0) {
            profile.setPoints(profile.getPoints() - 1);
            profileRepository.save(profile);
        }
    }

    //TODO: Listado de Reuniones de los Tutores

    public List<UpcomingMeetingDto> getUpcomingMeetingsByTutorId(String username) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_UserUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PROXIMAS)
                .map(MapInfoTemplates::mapToUpcomingMeetingDTO)
                .collect(Collectors.toList());
    }

    public List<PendingMeetingDto> getPendingMeetingsByTutorId(String username) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_UserUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.PENDIENTES)
                .map(MapInfoTemplates::mapToPendingMeetingDTO)
                .collect(Collectors.toList());
    }

    public List<HistoryMeetingDto> getHistoryMeetingsByTutorId(String username) {
        List<Meeting> allMeetings = meetingRepository.findByTutor_UserUsername(username);
        return allMeetings.stream()
                .filter(meeting -> meeting.getStatus() == StatusName.HISTORIAL)
                .map(MapInfoTemplates::mapToHistoryMeetingDTO)
                .collect(Collectors.toList());
    }

}
