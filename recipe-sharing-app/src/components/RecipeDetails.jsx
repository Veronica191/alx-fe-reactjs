import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Include the Edit form and Delete button */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <br />
      <Link to="/">⬅ Back to All Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
