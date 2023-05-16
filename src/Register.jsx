import React, { useState } from "react";

export const Register = (props) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Data:", email, pass, name);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Full name"
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={(e) => setpass(e.target.value)}
        />
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        You already have an account please register.
      </button>
    </div>
  );
};
