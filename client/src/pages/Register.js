import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/feactures/alertSclice";
import {} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // single usestate for multiple values (get multiple input values)
  // const [values, setValues] = useState({
  //   name: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });
  // //
  // const handleInput = (e) => {
  //   const value = e.target.value;
  //   setValues({
  //     ...values,
  //     [e.target.name]: value,
  //   });
  // };

  //  Submit form
  const handleSubmit = async (e) => {
    // to prevent  data loss after submiting
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        return alert("Provide all fields");
      }
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
      });
      dispatch(hideLoading());
      if (data.sucess) {
        alert("Register Sucessfully");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      alert("Invalid data fill all fields ");
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="card p-4" onClick={handleSubmit}>
        {/* <img src="../public/logo192.png" alt="logo" height={400} width={200} /> */}
        <InputForm
          htmlFor={"name"}
          labeltext={"Name"}
          type={"text"}
          name={"name"}
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <InputForm
          htmlFor={"lastname"}
          labeltext={"lastName"}
          type={"text"}
          name={"lastName"}
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <InputForm
          htmlFor={"email"}
          labeltext={"Email"}
          type={"text"}
          name={"email"}
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          htmlFor={"password"}
          labeltext={"password"}
          type={"text"}
          name={"password"}
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex justify-content-between">
          <p>
            Already register <Link to="/login">Login</Link>{" "}
          </p>
          <button type="text" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
