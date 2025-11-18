import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);

    const username = query.trim();
    if (!username) {
      setError("Please enter a username");
      return;
    }

    try {
      setLoading(true);
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      console.error("fetch error", err);
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username (e.g. torvalds)"
          aria-label="GitHub username"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: 16 }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <UserCard
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
            id={user.id}
          />
        )}
      </div>
    </div>
  );
}
