package com.example.Backend.service;

import com.example.Backend.model.Usuario;
import com.example.Backend.repository.UsuarioRepository;
import com.google.api.client.googleapis.auth.oauth2.*;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.http.javanet.NetHttpTransport;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthGoogleService {

    private final UsuarioRepository usuarioRepository;

    private static final String CLIENT_ID = "SUA_CLIENT_ID_GOOGLE_AQUI";

    public Usuario loginComGoogle(String tokenGoogle) {

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(
                new NetHttpTransport(),
                new JacksonFactory()
        ).setAudience(java.util.Collections.singletonList(CLIENT_ID)).build();

        try {

            GoogleIdToken googleIdToken = verifier.verify(tokenGoogle);

            if (googleIdToken == null) {
                throw new RuntimeException("Token Google inválido.");
            }

            GoogleIdToken.Payload payload = googleIdToken.getPayload();

            String email = payload.getEmail();
            String nome = (String) payload.get("name");

            // Se já existe → loga
            if (usuarioRepository.existsByEmail(email)) {
                return usuarioRepository.findByEmail(email).get();
            }

            // Se não existe → cria usuário automático
            Usuario novo = new Usuario();
            novo.setEmail(email);
            novo.setNomeCompleto(nome);
            novo.setCpf("GOOGLE");        // placeholder
            novo.setTelefone("GOOGLE");
            novo.setSenha("GOOGLE");

            return usuarioRepository.save(novo);

        } catch (Exception e) {
            throw new RuntimeException("Erro ao validar token Google.");
        }
    }
}
