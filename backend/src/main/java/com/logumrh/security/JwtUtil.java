package com.logumrh.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class JwtUtil {

    private final SecretKey key;
    private static final long jwtExpirationInMs = 3600000;
    private static final long refreshExpirationInMs = 86400000;

    public JwtUtil(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }
    
    public String generateToken(String email, String role) {
        long now = System.currentTimeMillis();
        return buildToken(email, role, now, jwtExpirationInMs);
    }

    public String generateRefreshToken(String email, String role) {
        long now = System.currentTimeMillis();
        return buildToken(email, role, now, refreshExpirationInMs);
    }

    private String buildToken(String email, String role, long now, long expiry) {
        return Jwts.builder()
                .claim("email", email)
                .claim("role", role)
                .claim("created_at", now)
                .claim("expires_at", now + expiry)
                .signWith(key)
                .compact();
    }

    public String getEmailFromToken(String token) {
        Map<String, Object> claims = decodeToken(token);
        return (String) claims.get("email");
    }

    public String getRoleFromToken(String token) {
        Map<String, Object> claims = decodeToken(token);
        return (String) claims.get("role");
    }

    public boolean validateToken(String token) {
        try {
            Map<String, Object> claims = decodeToken(token);
            return claims != null && !claims.isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    private Map<String, Object> decodeToken(String token) {
        try {
            String[] parts = token.split("\\.");
            String payload = new String(Base64.getUrlDecoder().decode(parts[1]));
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(payload, new TypeReference<Map<String, Object>>() {});
        } catch (Exception e) {
            return new HashMap<>();
        }
    }
}
