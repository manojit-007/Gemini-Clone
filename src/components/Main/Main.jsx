/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Main.css";
import { index } from "../../assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={index.user_icon} alt="" />
      </div>
      <div className="main_container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Create a travel itinerary for a trip to a new city</p>
                <img src={index.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Learn the basics of a new hobby</p>
                <img src={index.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Find affordable accommodation options for your next vacation
                </p>
                <img src={index.send_icon} alt="" />
              </div>
              <div className="card">
                <p>Discover strategies for effective time management</p>
                <img src={index.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <img src={index.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data">
              <img src={index.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <div className="spinner">
                    <div className="spinnerin"></div>
                  </div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main_bottom">
          <div className="search_box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={index.gallery_icon} alt="" />
              <img src={index.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={index.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span>Your privacy and Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
