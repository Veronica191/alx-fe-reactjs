import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import Post from "./pages/Post";
import BlogPost from "./pages/BlogPost";   // ✅ NEW required import
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const isAuth = true; // Change to false to test protected route

  return (
    <Router>
      {/* Navigation Links */}
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/post/1">Post 1</Link> | 
        <Link to="/blog/101">Blog 101</Link> {/* ✅ NEW */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Profile route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Post Route */}
        <Route path="/post/:postId" element={<Post />} />

        {/* ✅ NEW required dynamic Blog route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
