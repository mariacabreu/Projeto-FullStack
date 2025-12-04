package com.example.Backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "lojas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NossasLojas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome da loja é obrigatório.")
    @Size(max = 120)
    private String nome;

    @NotBlank(message = "O endereço é obrigatório.")
    @Size(max = 255)
    private String endereco;

    @NotBlank(message = "A cidade é obrigatória.")
    @Size(max = 50)
    private String cidade;

    @NotBlank(message = "O estado é obrigatório.")
    @Size(max = 2)
    private String estado;

    @Column(nullable = false, precision = 10, scale = 7)
    private BigDecimal latitude;

    @Column(nullable = false, precision = 10, scale = 7)
    private BigDecimal longitude;
}
