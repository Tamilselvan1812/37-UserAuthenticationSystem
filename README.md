# User Authentication System (React + Spring Boot + PostgreSQL)

##  Overview

This is a full-stack **User Authentication System** that allows users to register, log in, and view their profile on a dashboard. The application is built using **React** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** for database management.

---

##  Features

* ✅ User Registration
* ✅ User Login Authentication
* ✅ Dashboard with User Details
* ✅ Client-side Form Validation
* ✅ REST API Integration
* ✅ Login Activity Tracking (Status + Timestamp)
* ✅ Responsive UI with modern CSS

---

##  Tech Stack

### Frontend

* React
* React Router
* Axios
* CSS

### Backend

* Java
* Spring Boot
* Spring Data JPA

### Database

* PostgreSQL

---

## Application Flow

1. User registers with username, password, name, and email
2. Data is stored in PostgreSQL via Spring Boot APIs
3. User logs in with credentials
4. Backend validates user and records login attempt
5. On success, user is redirected to dashboard
6. Dashboard displays user details

---

##  Project Structure

### Frontend (React)

```
src/
 ├── App.jsx
 ├── Register.jsx
 ├── Login.jsx
 ├── Dashboard.jsx
 └── style.css
```

### Backend (Spring Boot)

```
com.example.test
 ├── controller/
 ├── service/
 ├── repository/
 └── entity/
```

---

##  API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| POST   | /api/register | Register new user  |
| POST   | /api/login    | Authenticate user  |
| GET    | /api/user     | Fetch user details |

---

##  Database Tables

### UserEntity

* id
* username
* password
* name
* email

### LoginEntity

* id
* username
* status (SUCCESS / FAILED)
* time

---

##  Limitations

* Passwords stored in plain text (not secure for production)
* No JWT/session authentication implemented
* No backend validation for duplicate users

---

##  Future Improvements

* Add JWT-based authentication
* Encrypt passwords using BCrypt
* Implement protected routes
* Add global error handling
* Improve UI/UX with loading states

---

## Author

**Tamilselvan Krishnasamy** - 
Full Stack Developer

---

##  Conclusion

This project demonstrates a complete **end-to-end authentication flow**, including frontend UI, backend API development, and database integration, making it a strong foundation for real-world applications.
