package com.nocountry.swapitup;

import com.nocountry.swapitup.model.Rol;
import com.nocountry.swapitup.model.User;
import com.nocountry.swapitup.repository.RolRepository;
import com.nocountry.swapitup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@SpringBootApplication
public class BackendSwapItUpApplication implements CommandLineRunner {

	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendSwapItUpApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*
		Rol rol = new Rol();
		rol.setName("ROLE_ADMIN");
		rolRepository.save(rol);

		User user = new User();
		user.setName("Matias Paolo");
		user.setLastname("Criollo Vigo");
		user.setEmail("matiascriollo57@gmail.com");
		user.setPassword("12345678");
		user.setStatus(true);
		user.setImage("image.jpg");
		user.setAboutMe("Hola, soy Matias, me gusta programar con Java y ver One Piece");
		user.setCreateAt(LocalDateTime.now());
		user.setRol(rol);
		user.setReviews(Collections.emptyList());
		user.setPosts(Collections.emptyList());
		user.setInterests(Collections.emptyList());
		userRepository.save(user);

		System.out.println("User created: " + user);
		*/
	}
}
