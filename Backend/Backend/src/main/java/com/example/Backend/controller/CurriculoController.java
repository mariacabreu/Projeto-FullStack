package com.example.Backend.controller;

import com.example.Backend.model.Curriculo;
import com.example.Backend.service.CurriculoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/curriculo")
@RequiredArgsConstructor
public class CurriculoController {

    private final CurriculoService curriculoService;

    @PostMapping("/enviar")
    public Curriculo enviar(
            @RequestParam String nome,
            @RequestParam String email,
            @RequestParam("arquivo") MultipartFile arquivo
    ) {
        return curriculoService.salvarCurriculo(nome, email, arquivo);
    }
}
