package com.example.Backend.service;

import com.example.Backend.model.Carrinho;
import com.example.Backend.model.ItemCarrinho;
import com.example.Backend.model.Produto;
import com.example.Backend.repository.CarrinhoRepository;
import com.example.Backend.repository.ItemCarrinhoRepository;
import com.example.Backend.repository.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@SuppressWarnings("null")
@RequiredArgsConstructor
public class ItemCarrinhoService {

    private final ItemCarrinhoRepository itemCarrinhoRepository;
    private final CarrinhoRepository carrinhoRepository;
    private final ProdutoRepository produtoRepository;

    public List<ItemCarrinho> listarItens(Long carrinhoId) {
        return itemCarrinhoRepository.findByCarrinhoId(carrinhoId);
    }

    @Transactional
    public ItemCarrinho adicionarItem(Long carrinhoId, Long produtoId, int quantidade) {

        Carrinho carrinho = carrinhoRepository.findById(carrinhoId)
                .orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));

        Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        ItemCarrinho item = itemCarrinhoRepository
                .findByCarrinhoIdAndIdProduto(carrinhoId, produtoId)
                .orElseGet(() -> {
                    ItemCarrinho novo = new ItemCarrinho();
                    novo.setCarrinho(carrinho);
                    novo.setIdProduto(produtoId);
                    novo.setQuantidade(0);
                    return novo;
                });

        // Atualizar quantidade
        item.setQuantidade(item.getQuantidade() + quantidade);

        // Calcular subtotal com BigDecimal
        BigDecimal subtotal = produto.getPreco()
                .multiply(BigDecimal.valueOf(item.getQuantidade()));

        item.setSubtotal(subtotal);

        ItemCarrinho salvo = itemCarrinhoRepository.save(item);

        // Recalcular total do carrinho
        carrinho.recalcularTotal();
        carrinhoRepository.save(carrinho);

        return salvo;
    }

    @Transactional
    public void removerItem(Long itemId) {

        ItemCarrinho item = itemCarrinhoRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item não encontrado"));

        Carrinho carrinho = item.getCarrinho();

        itemCarrinhoRepository.delete(item);

        carrinho.recalcularTotal();
        carrinhoRepository.save(carrinho);
    }

    @Transactional
    public void limparCarrinho(Long carrinhoId) {
        Carrinho carrinho = carrinhoRepository.findById(carrinhoId)
                .orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));

        itemCarrinhoRepository.deleteByCarrinhoId(carrinhoId);

        carrinho.setTotal(BigDecimal.ZERO);
        carrinhoRepository.save(carrinho);
    }
}
