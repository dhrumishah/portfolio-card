import React from "react";
import ReactDOM from "react-dom";

export default function Info() {
  return (
    <div className="container">
      <img
        src="./Images/profile-pic.jpg"
        width="317px"
        height="317px"
        className="img"
      />

      <h2 className="name">Dhrumi Shah</h2>
      <p className="paragraph-1">Frontend Developer</p>
      <div className="btn">
        <button className="btn-1">
          <a className="btn-1" href="https://twitter.com/deetwts">
            Twitter
          </a>
        </button>
        <button className="btn-2">
          <a className="btn-2" href="https://github.com/dhrumishah">
            GitHub
          </a>
        </button>
      </div>

      <h3 className="main">About</h3>
      <p className="main">
        I am a Frontend Developer, Technical writer and a content creator.I love
        contribuiting to open source projects.
      </p>

      <h3 className="main">Interests</h3>
      <p className="main">
        I am a tennis player, a travel geek, Reader, love painting portraits,
        sketching illustration arts and a Internet fanatic.
      </p>

      <div className="footer">
        <p className="footer-para">Made with ❤️ by Dhrumi</p>
      </div>
    </div>
  );
}
