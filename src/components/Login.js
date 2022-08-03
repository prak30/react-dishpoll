import React, { useState } from "react";
import UsersData from "../databases/users.json";

// console.log(UsersData);

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const stylesForm = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  function handleSubmit(e) {
    e.preventDefault();
    const registeredUsers = UsersData.filter(
      (item) => item.username === userName && item.password === password
    );

    if (registeredUsers.length > 0) {
      alert("successfully registered");
    } else {
      alert("enter correct credentials");
    }
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  // console.log(userName, password);

  return (
    <div>
      <h2>LOGIN FORM</h2>

      <form style={stylesForm} onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Enter UserName"
            onChange={handleUserNameChange}
            value={userName}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;
