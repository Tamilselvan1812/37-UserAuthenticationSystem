package com.example.test.service;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.test.entity.*;
import com.example.test.repository.*;

@Service
public class AppService {
 
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	LoginRepository loginRepo;
	
	//register
	public String register(String username,String password,String name,String email)
	{
		UserEntity user = new UserEntity();
		
		user.setUsername(username);
		user.setPassword(password);
		user.setName(name);
		user.setEmail(email);
		
		 userRepo.save(user);
		 
		 return "User Registered";
		 }
	
	//Login
	 public String login(String username, String password) {
		 
	
       UserEntity user = userRepo.findByUsername(username);

	    String status;

    if (user != null && user.getPassword().equals(password)) {
        status = "SUCCESS";
    } else {
        status = "FAILED";
    }
    
    LoginEntity attempt = new LoginEntity();
    attempt.setUsername(username);
    attempt.setStatus(status);
    attempt.setTime(LocalDateTime.now());

    loginRepo.save(attempt);

    return status;
}
	 
	 public UserEntity getUser(String username) {
		    return userRepo.findByUsername(username);
		}
	
}
