import { useState } from "react";

export const AddCategory = ({ setCategories, onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = inputValue.trim();
        if (category.length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(category);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleChangeInput}
            />
        </form>
    );
};
