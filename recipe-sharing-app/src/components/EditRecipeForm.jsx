import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    // update the recipe
    updateRecipe(recipe.id, { title, description });

    // optional message for user feedback
    console.log("Recipe updated successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <textarea
        value={description}
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
