package com.example.ddd.controller;

import com.example.ddd.model.User;
import com.example.ddd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
    @Autowired
    private UserRepo repo;
    @PostMapping("/login")
    public ResponseEntity<?> loginUer(@RequestBody User userData) {
        User user =repo.findByUserId(userData.getCin());
        if (user.getPassword().equals(userData.getPassword()))
            return ResponseEntity.ok(user);
        return (ResponseEntity<?> ) ResponseEntity.internalServerError();
    }
}
