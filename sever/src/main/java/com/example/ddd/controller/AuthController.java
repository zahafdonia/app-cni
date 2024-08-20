package com.example.ddd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {

    @GetMapping("/auth/login")
    public String showLoginPage(Model model) {
        return "login";
    }

    @GetMapping("/auth/signup")
    public String showSignupPage(Model model) {
        return "signup";
    }
}
