import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import RecipeDetail from './components/RecipeDetail.jsx'; // Make sure to include .jsx
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
