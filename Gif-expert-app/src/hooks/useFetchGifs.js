import { useEffect,useState } from "react";
import { getGifs } from "../functions/getGifs";

// un Hook no es mas que una funcion que regresa algo c:
export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoadinig, setIsLoading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoadinig,
  };
};
