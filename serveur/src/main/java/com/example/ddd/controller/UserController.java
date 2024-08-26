package com.example.ddd.controller;

import com.example.ddd.model.User;
import com.example.ddd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
    @Autowired
    private UserRepo repo;
    @PostMapping("/login")
    public ResponseEntity<?> loginUer(@RequestBody User userData) {
        User user = repo.findByCin(userData.getCin());
        if (user == null || !user.getPassword().equals(userData.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        return ResponseEntity.ok(user);
    }

}
