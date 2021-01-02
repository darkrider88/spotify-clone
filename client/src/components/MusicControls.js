import React from "react";

function MusicControls() {
  return (
    <div className="music_outer">
      <div className="playingAlbum">
        <img
          src="https://i.scdn.co/image/88d4d742b9826c61ac60e0a4eca865994fc04c70"
          alt="haylee"
        />
        <div className="album_text">
          <h3>Rock Bottom </h3>
          <p>Hailee Stenfeld</p>
        </div>
      </div>
      <div className="controls">
        <div className="musicIcons">
          <button className="musicBack">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="svg_light_color"
            >
              <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
            </svg>
          </button>
          <button className="musicPlay">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="svg_light_color"
            >
              <path d="M4.018 14L14.41 8 4.018 2z"></path>
            </svg>
          </button>
          <button className="musicBack">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="svg_light_color"
            >
              <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
            </svg>
          </button>
        </div>
        <div className="music_time">
          <span>0:00</span>
          <div className="progressBar">
            <div></div>
          </div>
          <span>4:00</span>
        </div>
      </div>
    </div>
  );
}

export default MusicControls;
