import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //Hook que mantiene el stado
  const [categories, setCategories] = useState(["Jujutsu Kaisen", "Kingdom"]);

  const onAddCategory = (newCategory) => {

    // setCategories( categories.concat("Lol") );
    setCategories([ newCategory, ...categories] );
    // setCategories( cat => [...cat, 'NewCategory']);
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">GIFEXPERTAPP</h1>

      {/* Input */}
      {/* <AddCategory setCategories={ setCategories }></AddCategory> */}

      <AddCategory onNewCategory={ (value) => onAddCategory( value )  }></AddCategory>


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
