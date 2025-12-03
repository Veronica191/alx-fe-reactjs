// src/components/RecipeDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipesData.find(r => String(r.id) === String(id));
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-gray-600">Recipe not found.</p>
        <div className="text-center mt-6">
          <Link to="/" className="inline-block px-4 py-2 bg-blue-500 text-white rounded">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">{recipe.summary}</p>

          <div className="grid gap-6 md:grid-cols-2">
            <section>
              <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cooking Steps</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Start Cooking</button>
            <Link to="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
