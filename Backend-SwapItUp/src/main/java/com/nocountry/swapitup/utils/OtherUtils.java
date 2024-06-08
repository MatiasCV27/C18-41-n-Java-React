package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.model.Tutor;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class OtherUtils {

    public static String createdDate() {
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE d 'de' MMMM");
        String formattedDate = currentDate.format(formatter);
        return formattedDate;
    }

    public static Specification<Tutor> hasSkills(String habilidad) {
        return (root, query, criteriaBuilder) -> {
            String likePattern = "%" + habilidad + "%";
            return criteriaBuilder.like(root.get("skills"), likePattern);
        };
    }

    public static Specification<Tutor> findByIndustry(String industry) {
        return (root, query, criteriaBuilder) -> {
            if (industry == null || industry.isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get("industry"), industry);
        };
    }

}
