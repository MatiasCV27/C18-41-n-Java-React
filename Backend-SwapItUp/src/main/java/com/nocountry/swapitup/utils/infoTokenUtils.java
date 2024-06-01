package com.nocountry.swapitup.utils;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class infoTokenUtils {

    public static String getUsernameToken() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        } else {
            return "El nombre de usuario no ha sido encontrado";
        }
    }

}
