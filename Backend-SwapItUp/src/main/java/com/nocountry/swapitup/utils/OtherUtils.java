package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.model.Tutor;
import org.springframework.data.jpa.domain.Specification;

public class OtherUtils {

    public static Specification<Tutor> hasSkills(String habilidad) {
        return (root, query, criteriaBuilder) -> {
            String likePattern = "%" + habilidad + "%";
            return criteriaBuilder.like(root.get("skills"), likePattern);
        };
    }

}
