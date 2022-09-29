import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //Hook que mantiene el stado
  const [categories, setCategories] = useState(["Jujutsu Kaisen", "Kingdom"]);

  const onAddCategory = () => {
    // setCategories( categories.concat("Lol") );
    setCategories(["", ...categories]);
    // setCategories( cat => [...cat, 'NewCategory']);
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">GIFEXPERTAPP</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories }></AddCategory>
      <div className="searchbtn">
        {/* <button onClick={onAddCategory} className="button1">
          Agregar
        </button> */}
      </div>

      {/* Listado de Gifs */}
      <div className="listGif">
        <ol>
          {categories.map((category) => {
            return <li key={category}> {category}</li>;
          })}
        </ol>
      </div>
      {/* Gif Item */}
    </div>
  );
};
