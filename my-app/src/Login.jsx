import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!data.username) newErrors.username = "Username is required";
    if (!data.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        new URLSearchParams(data)
      );

      if (response.data === "SUCCESS") {
        const userRes = await axios.get(
          `http://localhost:8080/api/user?username=${data.username}`
        );

        navigate("/dashboard", { state: userRes.data });

      } else {
        setResult("Invalid username or password");
      }

    } catch (error) {
      console.error(error);
      setResult("Server error");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>

      <h3>{result}</h3>

      <p onClick={() => navigate("/")}>Create account</p>
    </div>
  );
}

export default Login;