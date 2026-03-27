import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!data.username) newErrors.username = "Username is required";
    if (!data.password) newErrors.password = "Password is required";
    if (!data.name) newErrors.name = "Name is required";

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/register",
        new URLSearchParams(data)
      );

      navigate("/login");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className={errors.username ? "error-input" : ""}
      />
      {errors.username && <p className="error">{errors.username}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className={errors.password ? "error-input" : ""}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className={errors.name ? "error-input" : ""}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className={errors.email ? "error-input" : ""}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <button onClick={handleRegister}>Register</button>

      <p onClick={() => navigate("/login")}>Already have account? Login</p>
    </div>
  );
}

export default Register;