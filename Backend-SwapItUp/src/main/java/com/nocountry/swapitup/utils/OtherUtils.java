package com.nocountry.swapitup.utils;

import com.nocountry.swapitup.model.Tutor;
import org.springframework.data.jpa.domain.Specification;

public class OtherUtils {

    public static Specification<Tutor> findByTutorFullname(String nombre) {
        return (root, query, criteriaBuilder) -> {
            String likePattern = "%" + nombre + "%";
            return criteriaBuilder.like(criteriaBuilder.concat(root.get("user").get("name"), criteriaBuilder.concat(" ", root.get("user").get("lastname"))), likePattern);
        };
    }

}
