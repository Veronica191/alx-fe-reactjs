import React, { useState } from "react";
import Search from "./Search";
import UserCard from "./UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <Search setUsers={setUsers} setLoading={setLoading} setError={setError} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
