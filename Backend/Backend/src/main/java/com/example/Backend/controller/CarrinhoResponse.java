package com.example.Backend.controller;

import com.example.Backend.model.ItemCarrinho;
import java.util.List;

public record CarrinhoResponse(
        Long idCarrinho,
        List<ItemCarrinho> itens
) {}
