import React, { useState } from "react";
import axios from "axios";
import "./styleComponents/styleSignUp.css";

function SignUp() {
  // define use state at the component level. fields match as is with data model.
  const [formData, setFormData] = useState({
    role: "client",
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [submitButtonDisbled, setSubmitButtonDisabled] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  //-----------------------------// useState for confirmation email

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmPassword = event.target.confirmedPassword.value;
    if (formData.password !== confirmPassword) {
      setPasswordMismatch(true);
      alert(`confirmation password did not match`);
      return;
    }

    setPasswordMismatch(false);
    setSubmitButtonDisabled(true);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users",
        data: formData,
        timeout: 30000, //30 seconds
      });
      setServerResponse("Sign Up Successful");
    } catch (error) {
      if (error.response) {
        console.log(`Error response`, error.response.data);
      } else if (error.request) {
        console.log(`Error request`, error.request);
      } else {
        console.log(`Error message  `, error.message);
      }
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  return (
    <>
      <div className="classSignUp">
        <h2>Membership Sign Up </h2>
      </div>
      <div className="classSignUpForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname">
              Name
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleChange}
                className="input-field"
              />
            </label>

            <label htmlFor="lname">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
          <div>
            <label htmlFor="confirmedPassword">
              Confirm Password
              <input
                type="password"
                name="confirmedPassword"
                placeholder="confirm password"
                value={formData.confirmedPassword}
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
          {passwordMismatch && <p>Passwords do not match</p>}
          <div>
            <button
              type="submit"
              className="classSignUpButton"
              disabled={submitButtonDisbled}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="classAlreadyAMember">
          <p>
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="classSignUpResponse">
        {serverResponse && <p>{serverResponse}</p>}
      </div>
    </>
  );
}

export default SignUp;
