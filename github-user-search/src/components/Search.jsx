import React, { useState } from "react";
import { searchUsers } from "../services/github";

export default function Search({ setUsers, setLoading, setError }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!query.trim()) {
      setError("Please enter a username to search.");
      return;
    }

    try {
      setLoading(true);
      const results = await searchUsers(query.trim());
      setUsers(results);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users. Try again later.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users (e.g. torvalds)"
        aria-label="Search"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Search
      </button>
    </form>
  );
}
