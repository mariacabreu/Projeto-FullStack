package com.example.Backend.repository;

import com.example.Backend.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    List<Produto> findByCategoriaIgnoreCase(String categoria);

    List<Produto> findByNomeContainingIgnoreCase(String nome);

    List<Produto> findByPrecoBetween(Double min, Double max);

    List<Produto> findByNomeContainingIgnoreCaseAndCategoriaIgnoreCase(String nome, String categoria);

    boolean existsByNomeIgnoreCase(String nome);
}