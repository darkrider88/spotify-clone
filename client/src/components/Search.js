import React from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";

function Search() {
  //generating colors for the box
  const getRandomColor = () => {
    const color = "hsl(" + Math.random() * 360 + ", 100%, 40%)";
    return color;
  };

  const HorizCard = (props) => {
    return (
      <div className="horizCard" style={{ background: getRandomColor() }}>
        <p>{props.title}</p>
      </div>
    );
  };

  const VertiCard = (props) => {
    return (
      <div className="verticalCard" style={{ background: getRandomColor() }}>
        <p>{props.title}</p>
      </div>
    );
  };
  return (
    <div className="mainInner">
      <div className="searchBar">
        <input
          autoFocus
          type="text"
          className="searchInput"
          placeholder="Search for songs"
          autoComplete="off"
          maxLength="80"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <span className="searchIcon">
          <SearchIcon />
        </span>
      </div>
      <div className="searchedSongList">
        <h1>Your Top Genres</h1>
        <div className="horizontalCards">
          <HorizCard title="Pop" />
          <HorizCard title="Hip Hop" />
          <HorizCard title="Bollywood" />
          <HorizCard title="Dance" />
        </div>
        <h1>Browse All</h1>
        <div className="verticalCards">
          <VertiCard title="Podcasts" />
          <VertiCard title="Charts" />
          <VertiCard title="New releases" />
          <VertiCard title="Concerts" />
          <VertiCard title="Punjabi" />
          <VertiCard title="Tamil" />
          <VertiCard title="Chinease" />
          <VertiCard title="Devotion" />
          <VertiCard title="K-POP" />
          <VertiCard title="Romance" />
          <VertiCard title="Workout" />
          <VertiCard title="Athome" />
          <VertiCard title="sleep" />
          <VertiCard title="Kids" />
          <VertiCard title="family" />
        </div>
      </div>
    </div>
  );
}

export default Search;
