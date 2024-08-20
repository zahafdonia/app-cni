package com.example.ddd.service;

import com.example.ddd.model.Compte;
import com.example.ddd.repository.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteService {

    @Autowired
    private CompteRepository compteRepository;

    public List<Compte> getAllComptes() {
        return compteRepository.findAll();
    }

    public Compte saveCompte(Compte compte) {
        return compteRepository.save(compte);
    }
}
