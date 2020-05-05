import React from "react";

import "./SendMessage.css";

const SendMessage = ({ onSubmitMsg, handleChangeMsg, messagevalue }) => {
  // $('#myTextArea').trigger('autoresize');
  // document.querySelector("#textarea1").trigger("autoresize");
  return (
    <div>
      <div class="row sendBtn">
        <form class="col s12" onSubmit={(e) => onSubmitMsg(e)}>
          <div
            class="row sendBtn"
            style={{ display: "flex", fontSize: "1rem" }}
          >
            <div class="input-field col s10 ">
              <input
                className="input"
                type="text"
                value={messagevalue}
                placeholder="Type a message..."
                onChange={(e) => handleChangeMsg(e)}
                id="textarea1"
                class="materialize-textarea"
                style={{ overflow: "auto" }}
                style={{ alignSelf: "flex-end" }}
              ></input>
            </div>
            <div class="input-field  s2" style={{ alignSelf: "flex-end" }}>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                send
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <h1 className="sendBtn">adfjalsdfjlajsdlfjl</h1> */}
      {/* <div class="row sendBtn">
        <form class="col s12">
          <div class="row sendBtn">
            <div class="input-field col s6">
              <input id="name" type="text" class="validate" />
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Go!
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default SendMessage;
