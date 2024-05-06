/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { index } from "../../assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [state, setState] = useState(false);

  const { onSent, prevPrompt, setRecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async(prompt) =>{
    setRecentPrompt(prompt)
    onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setState((state) => !state)}
          className="img menuIcon"
          src={index.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new_chat">
          <img src={index.plus_icon} alt="" />
          {state ? <p>New Chat</p> : null}
        </div>
        {state ? (
          <div className="recent_history">
            <p className="recent_title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div onClick={() => loadPrompt(item)} className="recent_entry" key={index}>
                <img src={index.message_icon} alt="" />
                <p>{item.slice(0,20)} ...</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="bottom">
          <div className="bottom_item recent_entry">
            <img src={index.question_icon} alt="" />
            {state ? <p>Help</p> : null}
          </div>
          <div className="bottom_item recent_entry">
            <img src={index.history_icon} alt="" />
            {state ? <p>Activity</p> : null}
          </div>
          <div className="bottom_item recent_entry">
            <img src={index.setting_icon} alt="" />
            {state ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
