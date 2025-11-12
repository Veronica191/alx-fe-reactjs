import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar"; // import the SearchBar
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // decide which recipes to show: filtered or all
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

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

                {/* Step 2: SearchBar placed here */}
                <SearchBar />

                {/* Display recipes (filtered if search term exists) */}
                {displayedRecipes.map((recipe) => (
                  <div key={recipe.id} style={{ marginBottom: "10px" }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                  </div>
                ))}

                {/* Message if no recipes found */}
                {displayedRecipes.length === 0 && <p>No recipes found.</p>}
              </div>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract recipe ID from URL
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
