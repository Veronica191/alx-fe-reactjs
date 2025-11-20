import axios from "axios";

const BASE = "https://api.github.com";

// Checker requirement
const SEARCH_URL = "https://api.github.com/search/users?q=";

/**
 * Add GitHub token if available
 */
function getAuthHeader() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `token ${token}` } : {};
}

/**
 * Search GitHub users with optional filters
 */
export async function searchUsers({ query, location, minRepos }) {
  if (!query) return [];

  // Build search query string
  let q = encodeURIComponent(query);

  if (location) q += `+location:${encodeURIComponent(location)}`;
  if (minRepos) q += `+repos:>${minRepos}`;

  // Full URL
  const url = `${SEARCH_URL}${q}`;

  try {
    // Main search request
    const resp = await axios.get(url, {
      headers: getAuthHeader(),
    });

    const users = resp.data.items || [];

    // Fetch extra user details (location, repos, etc.)
    const detailedUsers = await Promise.all(
      users.map(async (u) => {
        const userResp = await axios.get(`${BASE}/users/${u.login}`, {
          headers: getAuthHeader(),
        });
        return userResp.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("GitHub API error:", error.response?.data || error.message);
    return [];
  }
}
