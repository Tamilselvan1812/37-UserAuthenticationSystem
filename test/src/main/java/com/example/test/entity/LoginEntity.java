package com.example.test.entity;
import jakarta.persistence.Entity;
import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
public class LoginEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	
	 private String username;
	 private String status;
	 private LocalDateTime time;
	 
	 public String getUsername() {
		return username;
	 }
	 public void setUsername(String username) {
		this.username = username;
	 }
	 public String getStatus() {
		return status;
	 }
	 public void setStatus(String status) {
		this.status = status;
	 }
	 public LocalDateTime getTime() {
		return time;
	 }
	 public void setTime(LocalDateTime time) {
		this.time = time;
	 }
	 
	 
}
