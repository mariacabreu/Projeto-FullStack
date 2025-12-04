package com.example.Backend.service;

import com.example.Backend.exception.BusinessException;
import com.example.Backend.model.Curriculo;
import com.example.Backend.repository.CurriculoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class CurriculoService {

    private final CurriculoRepository curriculoRepository;

    public Curriculo salvarCurriculo(String nome, String email, MultipartFile arquivo) {

        if (arquivo.isEmpty()) {
            throw new BusinessException("Envie um arquivo PDF.");
        }

        String caminho = "uploads/curriculos/" + arquivo.getOriginalFilename();

        try {
            File destino = new File(caminho);
            destino.getParentFile().mkdirs();
            arquivo.transferTo(destino);
        } catch (IOException e) {
            throw new BusinessException("Erro ao salvar arquivo.");
        }

        Curriculo curriculo = new Curriculo();
        curriculo.setNome(nome);
        curriculo.setEmail(email);

        return curriculoRepository.save(curriculo);
    }
}
