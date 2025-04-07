package library.library_backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig  implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Apply to all endpoints
                .allowedOrigins("http://localhost:5173/") // Allow React front-end origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow CRUD methods
                .allowedHeaders("Content-Type", "Accept") // Allow common headers
                .allowCredentials(false) // No credentials needed for local dev
                .maxAge(3600); // Cache preflight response for 1 hour
    }
}
