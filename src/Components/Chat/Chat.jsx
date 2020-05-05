import React, { Component } from "react";
import io from "socket.io-client";

import ChatRoom from "../ChatRoom/ChatRoom";
import Messages from "../Messages/Messages";
import SendMessages from "../SendMessages/SendMessage";
import UsersDisplay from "../UsersDisplay/UsersDisplay";

import "./Chat.css";

const link = "http://localhost:3000/";
let socket = io(link);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      users: [],
      soc: "",
      messagevalue: "",
      msg: [],
      username: this.props.username,
      room: this.props.room,
    };
  }

  componentDidMount() {
    this.setState({ soc: io(link) });

    console.log("socket", this.state.soc);
    const { username, room } = this.state;

    socket.emit("join", { username, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      {
        message.date = new Date();
      }
      this.setState({
        msg: [...this.state.msg, message],
      });
    });

    socket.on("roomData", ({ users }) => {
      this.setState({ users: users });
    });
  }

  handleChangeMsg = (e) => {
    this.setState({
      messagevalue: e.target.value,
    });
  };

  onSubmitMsg = (e) => {
    e.preventDefault();
    let msgg = this.state.messagevalue;
    this.setState({ messagevalue: "" });
    console.log(this.state.messagevalue, "messagevalue");

    socket.emit("sendMessage", msgg, () => {});
  };

  render() {
    return (
      <div>
        <div className="display">
          <div className="userdisplay">
            <UsersDisplay users={this.state.users} />
          </div>
          <div className="chatContainer">
            <ChatRoom room={this.state.room} />
            <div className="chat-main">
              <Messages msg={this.state.msg} username={this.state.username} />
            </div>
            <div className="sendButton">
              <SendMessages
                messagevalue={this.state.messagevalue}
                onSubmitMsg={this.onSubmitMsg}
                handleChangeMsg={this.handleChangeMsg}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
