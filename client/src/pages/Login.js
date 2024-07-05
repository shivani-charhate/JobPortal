import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";

const Login = () => {
  // UseState to read single input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Creating obj for multiple value
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleInput = (e) => {
  //   const value = e.target.value;
  //   setValues({
  //     ...values,
  //     [e.target.name]: value,
  //   });
  // };

  //  Submit form
  const handleSubmit = (e) => {
    // to prevent data lose after refresh
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="card p-4" onClick={handleSubmit}>
        <InputForm
          htmlFor={"email"}
          type={"text"}
          labeltext={"Email"}
          name={"email"}
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          htmlFor={"password"}
          labeltext={"Password"}
          type={"text"}
          name={"password"}
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-3 form-check">
          <div className="d-flex justify-content-evenly">
            <p>
              Not a User <Link to="/register"> Register </Link>{" "}
            </p>

            <button type="text" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
