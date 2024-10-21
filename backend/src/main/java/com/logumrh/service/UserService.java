package com.logumrh.service;

import com.logumrh.dto.UserDTO;
import com.logumrh.model.User;
import com.logumrh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setName(userDTO.getName());
        user.setBirthDate(userDTO.getBirthDate());
        user.setNationality(userDTO.getNationality());
        user.setNationalId(userDTO.getNationalId());
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
