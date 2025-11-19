import React from "react";
import Search from "./Search";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Search GitHub Users</h2>
      <Search />
    </div>
  );
}
