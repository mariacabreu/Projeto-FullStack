package com.example.Backend.dto;

import com.example.Backend.model.enums.AreaAtuacao;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CPF;

import lombok.Data;

@Data
public class CurriculoRequestDTO {

    @NotBlank
    private String nome;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String telefone;

    @CPF
    @NotBlank
    private String cpf;

    private AreaAtuacao areaAtuacao;

    private String observacoes;
}
