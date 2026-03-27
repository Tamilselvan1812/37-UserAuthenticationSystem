package com.example.test.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.test.entity.UserEntity;
import com.example.test.service.AppService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class AppController {

	 @Autowired
	 AppService service;
	 
	 @PostMapping("/register")
	 public String register(@RequestParam String username,@RequestParam String password,@RequestParam String name,@RequestParam String email){
		 
		 return service.register(username,password,name,email);
		 
	 }
	 
	 @PostMapping("/login")
	    public String login(@RequestParam String username,@RequestParam String password) {

	        return service.login(username, password);
	    }
	 
	 @GetMapping("/user")
	    public UserEntity getUser(@RequestParam String username) {
	        return service.getUser(username);
	    }
	 
	 
}
