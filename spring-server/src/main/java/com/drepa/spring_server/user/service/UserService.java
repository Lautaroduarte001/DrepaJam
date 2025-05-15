package com.drepa.spring_server.user.service;
import com.drepa.spring_server.user.dto.RegisterRequest;
import com.drepa.spring_server.user.entity.User;
import com.drepa.spring_server.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User registerUser(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setFullName(request.getFullName());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setDrepacoins(50);

        return userRepository.save(user);
    }
}
