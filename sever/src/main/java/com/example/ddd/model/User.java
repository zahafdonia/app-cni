package com.example.ddd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {

    @Id
    private long cin;
    private String password;
}
