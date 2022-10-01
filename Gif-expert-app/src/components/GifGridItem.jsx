import React from "react";

const getTitle = (title, category) => {
    if (title == " ") {
      return category;
    }
    return title;
  };

export const GifGridItem = ({ title, url, category }) => {
 

  return (
    <div className="column">
      <div className="card">
        <img src={url} className="responsive" width="auto" height="200"></img>
        <h2>{getTitle(title, category)}</h2>
      </div>
    </div>
  );
};

export default GifGridItem;
