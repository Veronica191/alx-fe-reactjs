import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Testing Tailwind */}
        <h1 className="text-blue-500 text-3xl font-bold p-4">
          Tailwind is working
        </h1>

        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe Detail route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* Add Recipe Form route */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
