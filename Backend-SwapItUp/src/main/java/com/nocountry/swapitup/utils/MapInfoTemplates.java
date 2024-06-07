package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.dto.HistoryMeetingDto;
import com.nocountry.swapitup.dto.PendingMeetingDto;
import com.nocountry.swapitup.dto.TutorSearchDto;
import com.nocountry.swapitup.dto.UpcomingMeetingDto;
import com.nocountry.swapitup.model.Meeting;
import com.nocountry.swapitup.model.Tutor;

public class MapInfoTemplates {

    //TODO: Listado de todos los tutores disponibles

    public static TutorSearchDto mapToSearchTutorDTO(Tutor tutor) {
        return TutorSearchDto.builder()
                .fullname(tutor.getFullname())
                .image(tutor.getImage())
                .skills(tutor.getSkills())
                .industry(tutor.getIndustry())
                .score(tutor.getScore())
                .active(tutor.getActive())
                .link(tutor.getLink_calendar())
                .build();
    }

    //TODO: Listado de Proximas Reuniones

    public static UpcomingMeetingDto mapToUpcomingMeetingDTO(Meeting meeting) {
        return UpcomingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .schedule(meeting.getSchedule())
                .startDate(meeting.getStartDate())
                .endDate(meeting.getEndDate())
                .link(meeting.getLink())
                .build();
    }

    //TODO: Listado de Reuniones Pendientes

    public static PendingMeetingDto mapToPendingMeetingDTO(Meeting meeting) {
        return PendingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .message(meeting.getMessage())
                .schedule(meeting.getSchedule())
                .startDate(meeting.getStartDate())
                .endDate(meeting.getEndDate())
                .build();
    }

    //TODO: Listado de Historial Reuniones

    public static HistoryMeetingDto mapToHistoryMeetingDTO(Meeting meeting) {
        return HistoryMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .startDate(meeting.getStartDate())
                .endDate(meeting.getEndDate())
                .meetingScore(meeting.getMeetingScore())
                .build();
    }

}