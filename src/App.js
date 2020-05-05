import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Chat from "./Components/Chat/Chat";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      room: "",
      onsubmit: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ onsubmit: true });
  };
  render() {
    return (
      <div className="App">
        {this.state.onsubmit ? (
          <Chat username={this.state.username} room={this.state.room} />
        ) : (
          <Login
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default App;
