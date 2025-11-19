import axios from "axios";

const BASE = "https://api.github.com";

function getAuthHeader() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `token ${token}` } : {};
}

/**
 * Search GitHub users with optional filters
 */
export async function searchUsers({ query, location, minRepos }) {
  // Build search query
  let q = query;
  if (location) q += `+location:${location}`;
  if (minRepos) q += `+repos:>=${minRepos}`;

  const url = `${BASE}/search/users`;

  // Get users
  const resp = await axios.get(url, {
    headers: getAuthHeader(),
    params: { q, per_page: 20 },
  });

  const users = resp.data.items || [];

  // Fetch detailed info for each user
  const detailedUsers = await Promise.all(
    users.map(async (u) => {
      const userResp = await axios.get(`${BASE}/users/${u.login}`, {
        headers: getAuthHeader(),
      });
      return userResp.data;
    })
  );

  return detailedUsers;
}
