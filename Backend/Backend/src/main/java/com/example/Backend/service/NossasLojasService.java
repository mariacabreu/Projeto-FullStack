package com.example.Backend.service;

import com.example.Backend.model.NossasLojas;
import com.example.Backend.repository.NossasLojasRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NossasLojasService {

    private final NossasLojasRepository lojasRepository;

    public List<NossasLojas> listarTodas() {
        return lojasRepository.findAll();
    }

    public NossasLojas buscarPorId(Long id) {
        return lojasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loja não encontrada."));
    }

    public List<NossasLojas> buscarPorCidade(String cidade) {
        return lojasRepository.findByCidadeIgnoreCase(cidade);
    }

    public NossasLojas salvar(NossasLojas loja) {
        return lojasRepository.save(loja);
    }

    public void deletar(Long id) {
        if (!lojasRepository.existsById(id)) {
            throw new RuntimeException("Loja não encontrada para exclusão.");
        }
        lojasRepository.deleteById(id);
    }
}
