import React from "react";

import Playlist from "./Playlist";

const Categories = () => {
  const dataCategory = [
    {
      id: 1,
      name: "Focus",
      category_id: 1,
      tagline: "just focus on what you do",
    },
    {
      id: 2,
      name: "Love",
      category_id: 3,
      tagline: "Love in the air",
    },
    {
      id: 3,
      name: "Motivation",
      category_id: 2,
      tagline: "don't feel low",
    },
    {
      id: 4,
      name: "Gym",
      category_id: 6,
      tagline: "Push it up..",
    },
  ];

  return (
    <div className="mainInner">
      {dataCategory.map((category) => {
        return (
          <div className="wrap">
            <h1>{category.name}</h1>
            <span className="about_plalist">{category.tagline}</span>

            <Playlist key={category.id} category_id={category.category_id} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
