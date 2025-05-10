package com.drepa.spring_server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Desactiva protección CSRF (importante si usás API REST)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Permite todos los endpoints sin autenticación
                )
                .httpBasic(Customizer.withDefaults()); // Podés remover esto si no querés login básico

        return http.build();
    }
}
