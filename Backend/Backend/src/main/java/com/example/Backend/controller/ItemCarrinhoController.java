package com.example.Backend.controller;

import com.example.Backend.dto.AdicionarItemDTO;
import com.example.Backend.model.ItemCarrinho;
import com.example.Backend.service.ItemCarrinhoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item-carrinho")
@RequiredArgsConstructor
public class ItemCarrinhoController {

    private final ItemCarrinhoService itemCarrinhoService;

    @PostMapping
    public ItemCarrinho adicionar(@RequestBody AdicionarItemDTO dto) {
        return itemCarrinhoService.adicionarItem(
                dto.getCarrinhoId(),
                dto.getProdutoId(),
                dto.getQuantidade()
        );
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id) {
        itemCarrinhoService.removerItem(id);
    }

    @GetMapping("/carrinho/{idCarrinho}")
    public List<ItemCarrinho> listar(@PathVariable Long idCarrinho) {
        return itemCarrinhoService.listarItens(idCarrinho);
    }
}
