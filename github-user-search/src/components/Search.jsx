import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

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
          <div
            style={{
              border: "1px solid #ddd",
              padding: 12,
              borderRadius: 8,
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              style={{ width: 64, height: 64, borderRadius: 8 }}
            />
            <div>
              <h3 style={{ margin: 0 }}>{user.login}</h3>
              <p style={{ margin: "4px 0" }}>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <small>ID: {user.id}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
