import React, { useState, useEffect } from "react";
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
  // useState for Server Response data
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // here we need to see if user record was returned.
  useEffect(() => {
    console.log("Server Response:!!!", serverResponse);
  }, [serverResponse]);

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

      setServerResponse(JSON.stringify(response.data));
      // save the data to serverResponse useState

      const { user } = await response.data;
      const { role, fname, lname, email, password } = user;
      debugger;
      if (email == formData.email && password == formData.password) {
        navigate("/Event");
        alert("Login successful!");
      }
    } catch (error) {
      console.log(`Error handleSubmit`, error);
      alert("Login failed you again.");
    } finally {
      setSubmitButtonDisabled(false);
    }
  };
  const schedulingText = "SCHEDULING FOR YOUR NEEDS";

  return (
    <>
      <div className="parentContainer">
        <div className="childContainerLeft ">
          <div className="childContainerScheduling">
            <span style={{ whiteSpace: "pre" }}>
              {schedulingText.split(" ").map((word, index) => (
                <span key={index}>
                  <span style={{ fontSize: "1.25em" }}>{word[0]}</span>
                  {word.slice(1)} {/* Add space after each word */}
                </span>
              ))}
            </span>
          </div>
          <div className="childContainerLeft childContainerDetail">
            <h3>
              Do you require a calendar to be arranged for a number of people?
            </h3>

            <h3>Managing your calendar has never been easier!</h3>

            <h3>
              Whether you’re organizing an event, coordinating with your team,
              or scheduling appointments with clients… our system simplifies the
              process. This seamlessly aligns with everyone.
            </h3>

            <h3 className="">For Events:</h3>
            <p className="indented-text">
              Easily book time slots for your attendees, ensuring everyone knows
              when and where to be. No more confusion or double-booking!
            </p>

            <h3>For Your Job:</h3>
            <p className="indented-text">
              Streamline your work schedule by booking meetings and tasks
              efficiently. Keep track of deadlines and ensure smooth
              collaboration with your colleagues.
            </p>

            <h3>For Volunteers:</h3>
            <p className="indented-text">
              Coordinate volunteer shifts effortlessly. Our system allows
              volunteers to sign up for available time slots, making it easy to
              manage and communicate with your team.
            </p>

            <h3>For Clients:</h3>
            <p className="indented-text">
              Offer your clients the convenience of booking appointments at
              their preferred times. Enhance your service by providing a
              seamless scheduling experience.
            </p>

            <h3>For Staff:</h3>
            <p className="indented-text">
              Organize staff schedules with ease. Ensure everyone is on the same
              page and avoid scheduling conflicts.
            </p>

            <p>
              With our user-friendly platform, scheduling and booking are
              straightforward and hassle-free. Try it today and experience the
              convenience!
            </p>
          </div>
        </div>

        <div className="childContainerRight">
          <div className="classLogin">
            <h2>Welcome Back</h2>
          </div>
          <div className="classSignUpForm gridParent">
            <form onSubmit={handleSubmit}>
              <div className="gridItem">
                <label htmlFor="email-input">
                  Username
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </label>
              </div>
              <div className="gridItem">
                <label htmlFor="password-input">
                  Password
                  <input
                    id="password-input"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field"
                  />
                </label>
              </div>
              <div className="gridItem">
                <button
                  type="submit"
                  className="classSignUpButton"
                  disabled={submitButtonDisabled}
                >
                  Sign in
                </button>
              </div>
              <div>
                <p className="classAlreadyAMember">
                  Not a member yet? <a href="/SignUp">Sign Up Now</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
