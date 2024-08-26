package com.example.ddd.service;

import com.example.ddd.model.User;
import com.example.ddd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    public void createUser(Long cin, String password) {
        User user = new User();
        user.setCin(cin);
        user.setPassword(password);

        userRepository.save(user);
    }
}
