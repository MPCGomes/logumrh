package com.logumrh;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LogumRhApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure()
						.filename(".env.local")
								.ignoreIfMissing()
										.load();

		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		System.setProperty("FRONTEND_URL", dotenv.get("FRONTEND_URL"));

		SpringApplication.run(LogumRhApplication.class, args);
	}
}
