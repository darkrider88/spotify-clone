import React from "react";
import { ReactComponent as PlayButton } from "../../images/play-button.svg";
import { ReactComponent as HeartIcon } from "../../images/heart.svg";
//import { useParams } from "react-router-dom";

const Song = (props) => {
  return (
    <div className="song">
      <li>
        <div className="songNum">1</div>
        <div className="songDetails">
          <h3>{props.songName}</h3>
          <p>{props.singerName}</p>
        </div>
        <div className="songTime">
          <span>{props.songTime}</span>
        </div>
      </li>
    </div>
  );
};

const PlaylistPage = () => {
  //const { id } = useParams();
  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://source.unsplash.com/640x480?water"
              alt="boo"
            ></img>
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase">playlist</p>
            <h1>Top 20 Songs in India</h1>
            <p className="greyText">Something to listen </p>
            <p>Spotify</p>
          </div>
        </div>

        <div className="playlistPageSongs">
          <div className="playlistIcons">
            <button className="playButton">
              <PlayButton />
            </button>
            <div className="iconsHeart">
              <HeartIcon />
            </div>
            <div className="iconsDots"></div>
          </div>
          <ul className="songList">
            <Song songName="Gulabi ankhen" singerName="Sanam" songTime="4:00" />
            <Song songName="Yeh ratten" singerName="Sanam" songTime="3:40" />
            <Song songName="Lehnga" singerName="Sanam" songTime="4:13" />
            <Song songName="Laal ishq" singerName="Sanam" songTime="3:00" />
            <Song songName="Gulabi ankhen" singerName="Sanam" songTime="5:30" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
