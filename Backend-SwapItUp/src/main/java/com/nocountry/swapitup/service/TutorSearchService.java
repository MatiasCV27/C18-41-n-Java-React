package com.nocountry.swapitup.service;

import com.nocountry.swapitup.exception.NotFoundDataException;
import com.nocountry.swapitup.model.Tutor;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.TutorRepository;
import com.nocountry.swapitup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.nocountry.swapitup.utils.OtherUtils.findByTutorFullname;
import static com.nocountry.swapitup.utils.infoTokenUtils.getUsernameToken;

@Service
@RequiredArgsConstructor
public class TutorSearchService {

    private final TutorRepository tutorRepository;
    private final UserRepository userRepository;

    public Tutor createTutor() {
        Optional<Tutor> existingTutorOptional = tutorRepository.findByUser_Username(getUsernameToken());
        if (existingTutorOptional.isEmpty()) {
            User newUser = userRepository.findByUsername(getUsernameToken())
                    .orElseThrow(() -> new NotFoundDataException("Usuario " + getUsernameToken() + " no ha sido encontrado"));
            Tutor newTutor = Tutor.builder()
                    .fullname(newUser.getName() + " " + newUser.getLastname())
                    .image(newUser.getProfile().getImage())
                    .industry(newUser.getProfile().getIndustry())
                    .score(0)
                    .exchangesMade(0)
                    .active(true)
                    .link_calendar("")
                    .user(newUser)
                    .build();

            return tutorRepository.save(newTutor);
        } else {
            return null;
        }
    }

    public List<Tutor> findAllTutorsByFullname(String fulname) {
        return tutorRepository.findAll(findByTutorFullname(fulname));
    }

}
