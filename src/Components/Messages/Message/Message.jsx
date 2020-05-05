import React from "react";
import "./Message.css";
import Moment from "react-moment";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user, date }, username }) => {
  let isSentByCurrentUser = false;
  const trimmedName = username.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  if (user == "Admin" || user == "admin") {
    return (
      <div className=" container ">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10 ">{user}</p>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="sentText pr-10">{trimmedName}</p>
          <Moment
            className="sentText pr-10"
            format="h:mm a"
            style={{ color: "black" }}
          >
            {date}
          </Moment>
        </div>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="sentText pl-10 ">{user}</p>
          <Moment
            format="h:mm a"
            className="sentText pl-10"
            style={{ color: "black" }}
          >
            {date}
          </Moment>
        </div>
      </div>
    </div>
  );
};

export default Message;
