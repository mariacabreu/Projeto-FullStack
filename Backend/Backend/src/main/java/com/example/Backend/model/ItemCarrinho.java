package com.example.Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "itens_carrinho")
@Data
@NoArgsConstructor
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long idProduto;

    @Column(nullable = false)
    private Integer quantidade = 0;

    @Column(nullable = false)
    private BigDecimal subtotal = BigDecimal.ZERO;

    @ManyToOne
    @JoinColumn(name = "carrinho_id", nullable = false)
    private Carrinho carrinho;

    public ItemCarrinho(Carrinho carrinho, Long idProduto, Integer quantidade) {
        this.carrinho = carrinho;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
    }
}
