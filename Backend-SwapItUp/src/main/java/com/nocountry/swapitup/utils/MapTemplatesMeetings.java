package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.dto.HistoryMeetingDto;
import com.nocountry.swapitup.dto.PendingMeetingDto;
import com.nocountry.swapitup.dto.UpcomingMeetingDto;
import com.nocountry.swapitup.model.Meeting;

public class MapTemplatesMeetings {

    //TODO: Listado de Proximas Reuniones

    public static UpcomingMeetingDto mapToUpcomingMeetingDTO(Meeting meeting) {
        return UpcomingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .schule(meeting.getSchule())
                .date(meeting.getDate())
                .link(meeting.getLink())
                .build();
    }

    //TODO: Listado de Reuniones Pendientes

    public static PendingMeetingDto mapToPendingMeetingDTO(Meeting meeting) {
        return PendingMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .message(meeting.getMessage())
                .schule(meeting.getSchule())
                .date(meeting.getDate())
                .build();
    }

    //TODO: Listado de Historial Reuniones

    public static HistoryMeetingDto mapToHistoryMeetingDTO(Meeting meeting) {
        return HistoryMeetingDto.builder()
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .date(meeting.getDate())
                .meetingScore(meeting.getMeetingScore())
                .build();
    }

}