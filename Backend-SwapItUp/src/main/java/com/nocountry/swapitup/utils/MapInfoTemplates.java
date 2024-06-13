package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.dto.*;
import com.nocountry.swapitup.model.*;

public class MapInfoTemplates {

    //TODO: Listado de todos los tutores disponibles

    public static TutorSearchDto mapToSearchTutorDTO(Tutor tutor) {
        return TutorSearchDto.builder()
                .idTutor(tutor.getIdTutor())
                .fullname(tutor.getFullname())
                .image(tutor.getImage())
                .skills(tutor.getSkills())
                .industry(tutor.getIndustry())
                .score(tutor.getScore())
                .exchangesMade(tutor.getExchangesMade())
                .active(tutor.getActive())
                .link(tutor.getLink_calendar())
                .build();
    }

    //TODO: Listado de todos los comentarios de un tutor

    public static TutorReviewDto mapToTutorReviewDTO(Review review) {
        return TutorReviewDto.builder()
                .fullname(review.getFullname())
                .image(review.getImage())
                .comment(review.getComment())
                .dateCreated(review.getDateCreated())
                .meetingScore(review.getMeetingScore())
                .build();
    }

    //TODO: Listado de Proximas Reuniones

    public static UpcomingMeetingDto mapToUpcomingMeetingDTO(Meeting meeting) {
        return UpcomingMeetingDto.builder()
                .idMetting(meeting.getIdMetting())
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
                .idMetting(meeting.getIdMetting())
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
                .idMetting(meeting.getIdMetting())
                .fullname(meeting.getFullname())
                .image(meeting.getImage())
                .startDate(meeting.getStartDate())
                .endDate(meeting.getEndDate())
                .meetingScore(meeting.getMeetingScore())
                .build();
    }

}