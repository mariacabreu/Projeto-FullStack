package com.example.Backend.dto;

import lombok.Data;

@Data
public class AdicionarItemDTO {
    private Long carrinhoId;
    private Long produtoId;
    private Integer quantidade;
}
