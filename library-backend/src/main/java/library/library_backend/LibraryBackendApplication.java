package library.library_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryBackendApplication {

	public static void main(String[] args) {
		System.out.println("Library Management System.");
		SpringApplication.run(LibraryBackendApplication.class, args);
	}

}
