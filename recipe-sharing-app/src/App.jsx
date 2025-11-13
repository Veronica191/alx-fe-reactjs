import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Decide which recipes to show: filtered or all
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App 🍲</h1>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                {/* Add a new recipe */}
                <h2>Add a New Recipe</h2>
                <AddRecipeForm />

                {/* Search bar */}
                <h2>Search Recipes</h2>
                <SearchBar />

                {/* Recipe list */}
                <h2>All Recipes</h2>
                {displayedRecipes.length === 0 ? (
                  <p>No recipes found.</p>
                ) : (
                  displayedRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: "10px" }}>
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                    </div>
                  ))
                )}

                {/* Favorites */}
                <h2>My Favorites</h2>
                <FavoritesList />

                {/* Recommendations */}
                <h2>Recommended Recipes</h2>
                <RecommendationsList />
              </div>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract recipe ID from URL and pass it as a number
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
