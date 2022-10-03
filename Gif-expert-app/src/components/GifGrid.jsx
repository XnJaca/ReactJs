import { useState, useEffect } from "react";
import { getGifs } from "../functions/getGifs";
import { GifItemm } from "./GifItem";

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
          //Esparcimos todas las propiedades del image.
          return <GifItemm key={image.id} {...image} category={category}></GifItemm>;
        })}
      </div>
    </div>
  );
};
