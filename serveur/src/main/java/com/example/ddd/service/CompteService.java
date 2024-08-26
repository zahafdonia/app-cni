package com.example.ddd.service;

import com.example.ddd.model.User;
import com.example.ddd.model.Compte;
import com.example.ddd.repository.CompteRepository;
import com.example.ddd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteService {

    @Autowired
    private CompteRepository compteRepository;

    @Autowired
    private UserRepo userRepo;  // Injecter le UserRepo

    public List<Compte> getAllComptes() {
        return compteRepository.findAll();
    }

    public Compte saveCompte(Compte compte) {
        // Enregistrer le compte dans la table 'compte'
        Compte savedCompte = compteRepository.save(compte);

        // Créer un nouvel utilisateur à partir du compte sauvegardé
        User newUser = new User();
        newUser.setCin(savedCompte.getCin());
        newUser.setPassword(savedCompte.getPassword()); // Utiliser le mot de passe du compte

        // Enregistrer l'utilisateur dans la table 'users'
        userRepo.save(newUser);

        return savedCompte;
    }
}
