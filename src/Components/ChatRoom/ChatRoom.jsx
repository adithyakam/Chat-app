import React from "react";
import "./ChatRoom.css";

const ChatRoom = ({ room }) => {
  return (
    <div className="room">
      <h1>{`Room : ${room}`}</h1>
    </div>
  );
};

export default ChatRoom;
