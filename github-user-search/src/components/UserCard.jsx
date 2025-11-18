import React from "react";

export default function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, display: "flex", gap: 12, alignItems: "center" }}>
      <img src={user.avatar_url} alt={`${user.login} avatar`} style={{ width: 64, height: 64, borderRadius: 8 }} />
      <div>
        <h3 style={{ margin: 0 }}>{user.login}</h3>
        <p style={{ margin: "4px 0" }}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
        <small>ID: {user.id}</small>
      </div>
    </div>
  );
}
