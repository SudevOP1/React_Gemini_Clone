import React, { useContext } from "react";
import { assets } from "../assets/assets";
import "./Main.css";
import { Context } from "../context/Context";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} />
            </div>

            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, Chad</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>
                                    I'm sick and need help crafting a text
                                    message for my boss
                                </p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Create a futuristic image of a car</p>
                                <img src={assets.bulb_icon} />
                            </div>
                            <div className="card">
                                <p>Help create a weekly meal plan for two</p>
                                <img src={assets.message_icon} />
                            </div>
                            <div className="card">
                                <p>
                                    Teach me the concept of game theory in
                                    python
                                </p>
                                <img src={assets.code_icon} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} />
                                {loading ? (
                                    <>
                                        <div className="loader">
                                            <hr className="loading-1" />
                                            <hr className="loading-2" />
                                            <hr className="loading-3" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: resultData,
                                            }}
                                        ></p>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"
                        />
                        <img src={assets.gallery_icon} />
                        <img src={assets.mic_icon} />
                        {input ? (
                            <img onClick={onSent} src={assets.send_icon} />
                        ) : null}
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about
                        people, so double-check its responses.
                        <a href="#">Your privacy and Gemini Apps</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
