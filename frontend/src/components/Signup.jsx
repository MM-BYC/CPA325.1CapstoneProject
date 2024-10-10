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
        <h2>Sign Up </h2>
      </div>
      <div className="classSignUpForm">
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor="role">Role : </label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value=""> Select Role</option>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div> */}
          <div>
            <label htmlFor="fname">Name : </label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              className="input-field"
            />
            {/* </div>
          <div> */}
            <label htmlFor="lname"> </label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="confirmedPassword">Confirm Password: </label>
            <input
              type="password"
              name="confirmedPassword"
              value={formData.confirmedPassword}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          {passwordMismatch && <p>Passwords do not match</p>}
          <div>
            <button
              type="submit"
              className="classSignUpButton"
              disabled={submitButtonDisbled}
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <p className="classAlreadyAMember">
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="classSignUpResponse">
        {" "}
        {serverResponse && <p>{serverResponse}</p>}
      </div>
    </>
  );
}

export default SignUp;
