import axios from "axios";

const BASE = "https://api.github.com";

function getAuthHeader() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `token ${token}` } : {};
}

/**
 * Search users by query (returns array of users)
 * We'll use GitHub's "Search users" endpoint:
 * GET /search/users?q={query}
 */
export async function searchUsers(query) {
  const url = `${BASE}/search/users`;
  const params = { q: query, per_page: 20 };
  const headers = getAuthHeader();

  const resp = await axios.get(url, { params, headers });
  // resp.data.items is an array of user objects
  return resp.data.items || [];
}
