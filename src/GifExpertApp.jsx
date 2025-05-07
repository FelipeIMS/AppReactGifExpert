import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (newCategory.trim().length <= 1) {
      alert("Agrega una categoria valida");
      return;
    }
    if (categories.includes(newCategory)) {
      alert("Ya existe la categoria");
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* Listado de Gif */}

      {/* <button onClick={() => onAddCategory("New Category")}>Agregar</button> */}

      {/* <ol> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
        // <div key={category}>
        //   <h3>{category}</h3>
        //   <li>{category}</li>
        // </div>
      ))}
      {/* </ol> */}
      {/* Gif Item */}
    </>
  );
};
