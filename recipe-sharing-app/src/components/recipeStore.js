import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Fried Rice", description: "Delicious rice with vegetables" },
    { id: 2, title: "Jollof Rice", description: "Tasty and spicy West African dish" },
  ],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));
