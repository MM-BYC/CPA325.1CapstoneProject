import React, { useState } from "react";
import axios from "axios";
import "./styleComponents/styleLogin.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverResponse, setServerResponse] = useState(null);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitButtonDisabled(true);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/login",
        data: { email: formData.email, password: formData.password },
        timeout: 30000, //30 seconds
      });

      setServerResponse(response.data);
      navigate("/Event");
      alert("Login successful!");
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Login failed. Please try again.");
      }
      setServerResponse(error.response.data);
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  return (
    <div className="classLogin">
      <h2>Login</h2>
      {serverResponse && <p>{serverResponse}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={submitButtonDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
