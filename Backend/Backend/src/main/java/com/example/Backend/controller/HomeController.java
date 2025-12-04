package com.example.Backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping
    public String home() {
        return "Bem-vindo à API do Mercado!";
    }
}
