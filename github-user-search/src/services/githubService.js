// src/services/githubService.js
import axios from "axios";

const BASE = "https://api.github.com";

function getAuthHeader() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `token ${token}` } : {};
}

/**
 * Fetch a single GitHub user profile by username.
 * Returns user object on success, throws on 404 or other errors.
 */
export async function fetchUserData(username) {
  if (!username) throw new Error("No username provided");
  const url = `${BASE}/users/${encodeURIComponent(username)}`;
  const headers = getAuthHeader();
  const resp = await axios.get(url, { headers });
  return resp.data;
}
