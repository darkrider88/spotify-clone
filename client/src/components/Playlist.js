import React from "react";
//import { ReactComponent as PlayIcon } from "../images/play.svg";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={"/playlist/" + props.id}>
        <div className="cardImage">
          <img src={props.image} alt="images" />
        </div>
        <div className="cardContent">
          {props.title}
          <p className="subText">{props.subtext}</p>
        </div>

        <span className="playIcon">
          <button className="playlistPlayButton">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path d="M4.018 14L14.41 8 4.018 2z"></path>
            </svg>
          </button>
        </span>
      </Link>
    </div>
  );
};

const Playlist = (props) => {
  const dataPlaylist = [
    {
      id: 100,
      category_id: 1,
      name: "Love",
      img: "https://source.unsplash.com/640x480?water",
    },
    {
      id: 101,
      category_id: 3,
      name: "go pro",
      img: "https://source.unsplash.com/640x480?people",
    },
    {
      id: 102,
      category_id: 2,
      name: "Hit music",
      img: "https://source.unsplash.com/640x480?tea",
    },
    {
      id: 103,
      category_id: 3,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?morning",
    },
    {
      id: 104,
      category_id: 6,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?beach",
    },
    {
      id: 105,
      category_id: 1,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?girl",
    },
    {
      id: 106,
      category_id: 3,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?boy",
    },
    {
      id: 107,
      category_id: 3,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?hot",
    },
    {
      id: 108,
      category_id: 3,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?chill",
    },
    {
      id: 109,
      category_id: 6,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?water",
    },
    {
      id: 1010,
      category_id: 6,
      name: "lazy rhymes",
      img: "https://source.unsplash.com/640x480?tree",
    },
  ];

  const matchedPlaylist = dataPlaylist.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className="cardsWrap">
      {matchedPlaylist.map((playlist) => (
        <Card
          title={playlist.name}
          key={playlist.id}
          image={playlist.img}
          id={playlist.id}
          subtext="you will love these"
        />
      ))}
    </div>
  );
};

export default Playlist;
