package com.logumrh.controller.auth;

import com.logumrh.dto.auth.JwtResponseDTO;
import com.logumrh.dto.auth.LoginRequestDTO;
import com.logumrh.model.user.User;
import com.logumrh.service.user.UserService;
import com.logumrh.security.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<JwtResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(), loginRequest.getPassword())
        );

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();
        User user = userService.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        String role = user.getRole().getName();

        String token = jwtUtil.generateToken(email, role);
        String refreshToken = jwtUtil.generateRefreshToken(email, role);

        return ResponseEntity.ok(new JwtResponseDTO(token, refreshToken));
    }
}
