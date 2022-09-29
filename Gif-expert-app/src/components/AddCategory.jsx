import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
        <label htmlFor="input" className="Input-label">
          Busca algo extraordinario
        </label>
      </form>
    </div>
  );
};
