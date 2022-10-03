import { useState, useEffect } from "react";
import { getGifs } from "../functions/getGifs";
import { GifItemm } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  console.log(isLoading);
  // En ves de todo este codigo usaremos un custom hook.
  // const [images, setImages] = useState([]);
  // const [isLoadinig, setIsLoading] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // //useEffect dispara un efecto secundario
  // //useEffect no puede ser asincrono (async)
  // useEffect(() => {
  //   getImages();
  // }, []);

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
