package com.example.Backend.repository;

import com.example.Backend.model.NossasLojas;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NossasLojasRepository extends JpaRepository<NossasLojas, Long> {

    List<NossasLojas> findByCidadeIgnoreCase(String cidade);

    List<NossasLojas> findByEstadoIgnoreCase(String estado);

    List<NossasLojas> findByCidadeIgnoreCaseAndEstadoIgnoreCase(String cidade, String estado);

    boolean existsByNomeIgnoreCase(String nome);
}
