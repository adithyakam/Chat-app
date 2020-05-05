import React from "react";
import "./Login.css";

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <div className="infobox">
      <div className="container center">
        <h1>CHATZ</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Display name</label>
          <input
            type="text"
            name="username"
            placeholder="Display name"
            required
            onChange={(e) => handleChange(e)}
          />
          <label>Room</label>
          <input
            type="text"
            name="room"
            placeholder="Room"
            required
            onChange={(e) => handleChange(e)}
          />
          <button>Join</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
