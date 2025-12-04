package com.example.Backend.service;

import com.example.Backend.model.Carrinho;
import com.example.Backend.repository.CarrinhoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class CarrinhoService {

    private final CarrinhoRepository carrinhoRepository;

    public Carrinho obterOuCriar(Long idUsuario) {
        return carrinhoRepository.findByIdUsuario(idUsuario)
                .orElseGet(() -> {
                    Carrinho novo = new Carrinho();
                    novo.setIdUsuario(idUsuario);
                    novo.setTotal(BigDecimal.ZERO);
                    return carrinhoRepository.save(novo);
                });
    }

    public Carrinho salvar(Carrinho carrinho) {
        return carrinhoRepository.save(carrinho);
    }

    public Carrinho buscarPorId(Long idCarrinho) {
        return carrinhoRepository.findById(idCarrinho)
                .orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));
    }
}
