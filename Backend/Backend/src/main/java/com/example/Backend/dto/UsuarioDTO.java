package com.example.Backend.dto;

import lombok.Data;

@Data
public class UsuarioDTO {
    private String nomeCompleto;
    private String email;
    private String telefone;
    private String cpf;
    private String endereco;
    private String senha;
    private String confirmarSenha;
}
