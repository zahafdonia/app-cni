package com.example.ddd.repository;
import org.springframework.stereotype.Repository;
import com.example.ddd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface  UserRepo extends JpaRepository<User, String> {

    User findByUserId(long userData);
}
