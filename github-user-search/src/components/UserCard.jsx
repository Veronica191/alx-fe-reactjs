import React from "react";

export default function UserCard({ avatar_url, login, html_url, id }) {
  return (
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
        src={avatar_url}
        alt={`${login} avatar`}
        style={{ width: 64, height: 64, borderRadius: 8 }}
      />
      <div>
        <h3 style={{ margin: 0 }}>{login}</h3>
        <p style={{ margin: "4px 0" }}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
        <small>ID: {id}</small>
      </div>
    </div>
  );
}
