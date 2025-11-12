// src/components/recipeStore.jsx
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Fried Rice", description: "Delicious rice with vegetables" },
    { id: 2, title: "Jollof Rice", description: "Tasty and spicy West African dish" },
  ],

  // Search and Filtering
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),

  // Recipe actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
    })),
}));
