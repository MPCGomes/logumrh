package com.logumrh.controller.auth;

import com.logumrh.security.JwtUtil;
import com.logumrh.service.user.UserService;
import com.logumrh.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class RefreshTokenController {

    private final JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    public RefreshTokenController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/refresh")
    public ResponseEntity<Map<String, String>> refresh(@RequestBody Map<String, String> request) {
        String refreshToken = request.get("refreshToken");
        if (jwtUtil.validateToken(refreshToken)) {
            String email = jwtUtil.getEmailFromToken(refreshToken);
            String role = jwtUtil.getRoleFromToken(refreshToken);

            if (role == null) {
                User user = userService.findByEmail(email)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
                role = user.getRole().getName();
            }

            String newAccessToken = jwtUtil.generateToken(email, role);
            return ResponseEntity.ok(Map.of("token", newAccessToken));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid refresh token"));
        }
    }
}
