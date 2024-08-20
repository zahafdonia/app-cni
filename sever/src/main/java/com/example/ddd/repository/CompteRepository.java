package com.example.ddd.repository;

import com.example.ddd.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteRepository extends JpaRepository<Compte, Long> {
    public  Compte findByEmail(String email);
}