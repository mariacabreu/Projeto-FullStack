package com.example.Backend.controller;

import com.example.Backend.model.Carrinho;
import com.example.Backend.service.CarrinhoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
@RequiredArgsConstructor
public class CarrinhoController {

    private final CarrinhoService carrinhoService;

    @GetMapping("/usuario/{idUsuario}")
    public Carrinho obterOuCriar(@PathVariable Long idUsuario) {
        return carrinhoService.obterOuCriar(idUsuario);
    }

    @PutMapping
    public Carrinho salvar(@RequestBody Carrinho carrinho) {
        return carrinhoService.salvar(carrinho);
    }
}
