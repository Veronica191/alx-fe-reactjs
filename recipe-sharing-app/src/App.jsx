import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App 🍲</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>All Recipes</h2>
                {recipes.map((recipe) => (
                  <div key={recipe.id} style={{ marginBottom: "10px" }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;