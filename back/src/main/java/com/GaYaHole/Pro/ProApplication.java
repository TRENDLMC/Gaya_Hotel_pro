package com.GaYaHole.Pro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ProApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProApplication.class, args);
	}

}
