package com.logumrh;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LogumRhApplication {

	@Bean
	public Dotenv dotenv() {
		return Dotenv.configure().filename(".env.local").ignoreIfMissing().load();
	}

	public static void main(String[] args) {
		SpringApplication.run(LogumRhApplication.class, args);
	}
}
