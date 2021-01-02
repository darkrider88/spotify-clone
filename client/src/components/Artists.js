import React from "react";

function Artists() {
  const artistList = [
    {
      id: 1,
      name: "Zayn",
      imageUrl:
        "https://i.scdn.co/image/9aa52d0443bc2c02a9187e7dd4f36ca417989915",
    },
    {
      id: 2,
      name: "Neha Kakkar",
      imageUrl:
        "https://i.scdn.co/image/d9cf81f26581c55c3ef9aba1acc1332ee915c30a",
    },
    {
      id: 3,
      name: "Charlie Puth",
      imageUrl:
        "https://i.scdn.co/image/ffd124dc5d0a342db0f50454f8caa613202452d8",
    },
    {
      id: 4,
      name: "Hailee Steinfeld",
      imageUrl:
        "https://i.scdn.co/image/88d4d742b9826c61ac60e0a4eca865994fc04c70",
    },
    {
      id: 5,
      name: "Ed Sheeran",
      imageUrl:
        "https://i.scdn.co/image/c9e693f336bc004af00c51bbf0a157e8b5af75f2",
    },
    {
      id: 6,
      name: "Alan Walker",
      imageUrl:
        "https://i.scdn.co/image/86213c012b11a646e3c8c67c7aa093cccf7e6b48",
    },
    {
      id: 7,
      name: "Armaan Malik",
      imageUrl:
        "https://i.scdn.co/image/37370cd635ecbda631e54e52e8b98a14fe0ce608",
    },
    {
      id: 8,
      name: "Charlotte Lawrence",
      imageUrl:
        "https://i.scdn.co/image/a6995a2d57c16d8daed531518a037b5ce2665b81",
    },
    {
      id: 9,
      name: "Arjit Singh",
      imageUrl:
        "https://i.scdn.co/image/2ef89fc8ae47fcfd1c4efbdb4135ad6ba9b93fb1",
    },
  ];

  const Artist = (props) => {
    return (
      <div className="artist">
        <div className="art-innerBox">
          <div className="imageBox">
            <img src={props.image} alt={props.name} className="artistImage" />
          </div>
          <div className="artistName">{props.name}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainInner">
      <h1 className="artH1">Artists</h1>
      <div className="artistCards">
        {artistList.map((artist) => (
          <Artist
            name={artist.name}
            image={artist.imageUrl}
            alt={artist.name}
            key={artist.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Artists;
