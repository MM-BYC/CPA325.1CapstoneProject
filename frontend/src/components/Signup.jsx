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
  });
  const [submitButtonDisbled, setSubmitButtonDisabled] = useState(true);
  const [serverResponse, setServerResponse] = useState(null);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  //-----------------------------// useState for confirmation email

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDate((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmPassword = event.target.confirmedPassword.value;
    if (formData.password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);
    setSubmitButtonDisabled(true);

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        role: formData.role,
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      setServerResponse(error.response.data);
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  return (
    <>
      <div className="classSignUp">
        <h2>Sign Up </h2>
        {serverResponse && <p>{serverResponse}</p>}
      </div>
      <div className="classSignUp">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Role : </label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value=""> Select Role</option>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
