package com.example.ddd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "compte",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cin;

    @Column(nullable = false, unique = false)
    private String nom;

    @Column(nullable = false,unique = false)
    private String prenom;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // Getters and Setters

    public Long getId() {
        return cin;
    }

    public void setId(Long cin) {
        this.cin = cin;
    }

    public String getNom() {
        return nom;
    }
    public String getPrenom() {
        return prenom;
    }
    public String getEmail() {
        return email;
    }


    public void setNom(String nom) {
        this.nom = nom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    public void setEmail(String email) {
        this.email = email;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}