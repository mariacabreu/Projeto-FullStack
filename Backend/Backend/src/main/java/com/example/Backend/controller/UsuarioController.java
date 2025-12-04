package com.example.Backend.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.model.Usuario;
import com.example.Backend.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return usuarioService.cadastrar(usuario);
    }

    @GetMapping("/validar-cpf/{cpf}")
    public boolean validarCpf(@PathVariable String cpf) {
        return usuarioService.validarCpfPublic(cpf);
    }

    @GetMapping("/cep/{cep}")
    public Map<String, Object> buscarEnderecoViaCep(@PathVariable String cep) {
        return usuarioService.buscarEnderecoViaCepPublic(cep);
    }

    @GetMapping("/{id}")
    public Usuario getUsuario(@PathVariable Long id) {
        return usuarioService.getById(id);
    }
}
