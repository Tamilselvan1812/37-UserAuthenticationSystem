package com.example.test.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.test.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

	  UserEntity findByUsername(String username);
}
