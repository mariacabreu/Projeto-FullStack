package com.example.Backend.service;

import com.example.Backend.exception.BusinessException;
import com.example.Backend.model.Usuario;
import com.example.Backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UsuarioService {

    @Autowired
    public UsuarioRepository usuarioRepository;

    public Usuario cadastrar(Usuario usuario) {

        if (!validarCpf(usuario.getCpf())) {
            throw new BusinessException("CPF inválido.");
        }

        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new BusinessException("Email já cadastrado.");
        }

        if (usuarioRepository.existsByCpf(usuario.getCpf())) {
            throw new BusinessException("CPF já cadastrado.");
        }

        Map<String, Object> endereco = buscarEnderecoViaCep(usuario.getCep());

        usuario.setLogradouro((String) endereco.get("logradouro"));
        usuario.setBairro((String) endereco.get("bairro"));
        usuario.setCidade((String) endereco.get("localidade"));
        usuario.setEstado((String) endereco.get("uf"));

        return usuarioRepository.save(usuario);
    }

    // MÉTODO PRIVADO (usado internamente)
    private boolean validarCpf(String cpf) {
        return cpf != null && cpf.matches("\\d{11}");
    }

    // MÉTODO PÚBLICO PARA O CONTROLLER
    public boolean validarCpfPublic(String cpf) {
        return validarCpf(cpf);
    }

    // Lógica interna
    private Map<String, Object> buscarEnderecoViaCep(String cep) {
        return Map.of(
                "logradouro", "Rua Exemplo",
                "bairro", "Centro",
                "localidade", "Cidade Exemplo",
                "uf", "SP"
        );
    }

    // Método público exposto ao Controller
    public Map<String, Object> buscarEnderecoViaCepPublic(String cep) {
        return buscarEnderecoViaCep(cep);
    }

    // Buscar usuário por ID
    public Usuario getById(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new BusinessException("Usuário não encontrado."));
    }
}
