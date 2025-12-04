package com.example.Backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCompleto;

    @Column(unique = true, nullable = false)
    private String email;

    private String telefone;

    @Column(unique = true, nullable = false)
    private String cpf;

    // 🚨 Substituir "endereco" e adicionar novos campos:
    private String cep;

    private String logradouro;
    private String bairro;
    private String cidade;
    private String estado;

    private String senha;
}
