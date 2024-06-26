package com.nocountry.swapitup.service;

import com.nocountry.swapitup.dto.TutorReviewDto;
import com.nocountry.swapitup.dto.TutorSearchDto;
import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Review;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.ReviewRepository;
import com.nocountry.swapitup.repository.TutorRepository;
import com.nocountry.swapitup.repository.UserRepository;
import com.nocountry.swapitup.utils.MapInfoTemplates;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.nocountry.swapitup.utils.OtherUtils;
import static com.nocountry.swapitup.utils.infoTokenUtils.getUsernameToken;

@Service
@RequiredArgsConstructor
public class TutorSearchService {

    private final TutorRepository tutorRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;

    public Tutor createTutor() {
        Optional<Tutor> tutor = tutorRepository.findByUser_Username(getUsernameToken());
        if (tutor.isEmpty()) {
            User user = userRepository.findByUsername(getUsernameToken())
                    .orElseThrow(() -> new NotFoundDataException("Usuario " + getUsernameToken() + " no ha sido encontrado"));
            if (user.getName().isEmpty() || user.getLastname().isEmpty() || user.getProfile().getIndustry().isEmpty() || user.getProfile().getAboutMe().isEmpty() || user.getProfile().getSkills().isEmpty() || user.getProfile().getExperience().isEmpty()) {
                return null;
            }
            Tutor newTutor = Tutor.builder()
                    .fullname(user.getName() + " " + user.getLastname())
                    .image(user.getProfile().getImage())
                    .skills(user.getProfile().getSkills())
                    .industry(user.getProfile().getIndustry())
                    .score(0)
                    .exchangesMade(0)
                    .active(true)
                    .link_calendar("")
                    .user(user)
                    .build();
            return tutorRepository.save(newTutor);
        }
        return null;
    }

    public List<TutorSearchDto> findAllTutors(String skills, String industry) {
        Specification<Tutor> tutor = Specification.where(null);
        if (skills != null && !skills.isEmpty()) {
            tutor = tutor.and(OtherUtils.hasSkills(skills));
        }
        if (industry != null && !industry.isEmpty()) {
            tutor = tutor.and(OtherUtils.findByIndustry(industry));
        }
        tutor = tutor.and((root, query, criteriaBuilder) ->
                criteriaBuilder.isTrue(root.get("active"))
        );
        List<Tutor> tutoresList = tutorRepository.findAll(tutor);
        return tutoresList.stream()
                .map(MapInfoTemplates::mapToSearchTutorDTO)
                .collect(Collectors.toList());
    }

    public void disableTutoring() {
        Tutor tutor = tutorRepository.findByUser_Username(getUsernameToken())
                .orElseThrow(() -> new NotFoundDataException("El tutor no ha sido encontrado"));
        tutor.setActive(false);
        tutorRepository.save(tutor);
    }

    public void enableTutoring() {
        Tutor tutor = tutorRepository.findByUser_Username(getUsernameToken())
                .orElseThrow(() -> new NotFoundDataException("El tutor no ha sido encontrado"));
        tutor.setActive(true);
        tutorRepository.save(tutor);
    }

    public List<TutorReviewDto> getAllTutorReviewsByIdTuto(Integer tutorId) {
        List<Review> allReviews = reviewRepository.findByTutor_IdTutor(tutorId);
        if (allReviews == null) return new ArrayList<>();
        return allReviews.stream()
                .map(MapInfoTemplates::mapToTutorReviewDTO)
                .collect(Collectors.toList());
    }

}
