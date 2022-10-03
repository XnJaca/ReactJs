import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //Hook que mantiene el stado
  const [categories, setCategories] = useState(["Irelia"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">GIFEXPERTAPP</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      ></AddCategory>

      <div className="listGif">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
