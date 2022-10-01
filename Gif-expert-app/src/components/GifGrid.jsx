import { useState, useEffect } from "react";
import { getGifs } from "../functions/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  //useEffect dispara un efecto secundario
  //useEffect no puede ser asincrono (async)
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="listGifs">
      <h1>{category}</h1>
      <div className="row">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} category={category}></GifGridItem>;
        })}
      </div>
    </div>
  );
};
