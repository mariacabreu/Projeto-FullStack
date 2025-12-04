package com.example.Backend.repository;

import com.example.Backend.model.ItemCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItemCarrinhoRepository extends JpaRepository<ItemCarrinho, Long> {

    List<ItemCarrinho> findByCarrinhoId(Long carrinhoId);

    Optional<ItemCarrinho> findByCarrinhoIdAndIdProduto(Long carrinhoId, Long idProduto);

    void deleteByCarrinhoId(Long carrinhoId);
}
