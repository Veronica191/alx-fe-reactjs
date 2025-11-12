// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Decide which recipes to display: filtered if searchTerm exists, else all
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  if (displayedRecipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      {displayedRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}
        >
          <h3 style={{ margin: '0 0 10px 0' }}>{recipe.title}</h3>
          <p style={{ margin: '0 0 10px 0' }}>{recipe.description}</p>
          <Link
            to={`/recipes/${recipe.id}`}
            style={{
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: '#007bff',
              padding: '6px 12px',
              borderRadius: '5px',
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
