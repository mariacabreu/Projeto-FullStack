package com.example.Backend.controller;

import com.example.Backend.model.Usuario;
import com.example.Backend.service.AuthGoogleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/google")
@RequiredArgsConstructor
public class AuthGoogleController {

    private final AuthGoogleService authGoogleService;

    @PostMapping("/login")
    public Usuario loginGoogle(@RequestParam String token) {
        return authGoogleService.loginComGoogle(token);
    }
}
