import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import "./Sidebar.css";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompts, setRecentPrompt, newChat } =
        useContext(Context);

    return (
        <div className="sidebar">
            <div className="top">
                <img
                    className="menu"
                    src={assets.menu_icon}
                    onClick={() => setExtended(!extended)}
                />
                <div className="new-chat" onClick={newChat}>
                    <img src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompts && previousPrompts.length > 0
                            ? previousPrompts.map((item, index) => {
                                  return (
                                      <div className="recent-entry" key={index}>
                                          <img src={assets.message_icon} />
                                          {item.length > 17 ? (
                                              <p>{item.slice(0, 18)}...</p>
                                          ) : (
                                              <p>{item}</p>
                                          )}
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
