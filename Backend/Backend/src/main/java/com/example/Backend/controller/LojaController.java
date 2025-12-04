package com.example.Backend.controller;

import com.example.Backend.model.NossasLojas;
import com.example.Backend.service.NossasLojasService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lojas")
@RequiredArgsConstructor
public class LojaController {

    private final NossasLojasService lojaService;

    @GetMapping("/{id}")
    public NossasLojas getLoja(@PathVariable Long id) {
        return lojaService.buscarPorId(id);
    }

    @GetMapping("/{id}/maps")
    public String abrirNoGoogleMaps(@PathVariable Long id) {
        NossasLojas loja = lojaService.buscarPorId(id);

        // Link do Google Maps usando latitude e longitude
        return String.format(
                "https://www.google.com/maps?q=%s,%s",
                loja.getLatitude(),
                loja.getLongitude()
        );
    }
}
