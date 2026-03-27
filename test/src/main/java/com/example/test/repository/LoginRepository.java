package com.example.test.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.test.entity.LoginEntity;


public interface LoginRepository extends JpaRepository<LoginEntity,Long> {

}
