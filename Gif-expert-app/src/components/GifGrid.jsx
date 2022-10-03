import { useState, useEffect } from "react";
import { getGifs } from "../functions/getGifs";
import { GifItemm } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // LLamamos a nuestro custom hook.
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="listGifs">
      <h1>{category}</h1>
      {isLoading ? (
          <h2>Cargando...</h2>
        ) : null}
      <div className="row">
        {images.map((image) => {
          //Esparcimos todas las propiedades del image.
          return (
            <GifItemm key={image.id} {...image} category={category} isLoading={isLoading}></GifItemm>
          );
        })}
      </div>
    </div>
  );
};
