package com.example.Backend.service;

import com.example.Backend.dto.UsuarioDTO;
import com.example.Backend.model.UsuarioModel;
import com.example.Backend.repository.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public UsuarioModel cadastrarUsuario(UsuarioDTO dto) throws Exception {
        if (usuarioRepository.existsByEmail(dto.getEmail())) {
            throw new Exception("Email já cadastrado");
        }
        if (usuarioRepository.existsByCpf(dto.getCpf())) {
            throw new Exception("CPF já cadastrado");
        }
        if (!dto.getSenha().equals(dto.getConfirmarSenha())) {
            throw new Exception("Senha e confirmar senha não coincidem");
        }

        UsuarioModel usuario = new UsuarioModel();
        usuario.setNomeCompleto(dto.getNomeCompleto());
        usuario.setEmail(dto.getEmail());
        usuario.setTelefone(dto.getTelefone());
        usuario.setCpf(dto.getCpf());
        usuario.setEndereco(dto.getEndereco());
        usuario.setSenha(passwordEncoder.encode(dto.getSenha()));

        return usuarioRepository.save(usuario);
    }

    public UsuarioModel login(String email, String senha) throws Exception {
        UsuarioModel usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("Usuário não encontrado"));

        if (!passwordEncoder.matches(senha, usuario.getSenha())) {
            throw new Exception("Senha incorreta");
        }

        return usuario;
    }
}
