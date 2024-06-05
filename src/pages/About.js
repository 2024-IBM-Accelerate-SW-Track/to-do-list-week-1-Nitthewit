import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
          <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Nithin Nambi</div>
            <div className="brief_description">
              <h3>Interests</h3>
              <p>
                Puzzles, Traveling, Music, Sports, Board Games, Business,
                Crypto, AI, Quant
              </p>

              <h3>Fun Facts</h3>
              <p>
                I enjoy playing Taekwondo, Basketball,
                Powerlifting/Bodybuilding, Investing, Guitar, and Spike ball.
              </p>

              <h3>Additional Skills</h3>
              <p>Languages: Spanish (Intermediate), Tamil (Conversational)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
