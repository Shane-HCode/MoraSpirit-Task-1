// Single source of truth for the backend base URL.
const BASE_URL = "https://task.moraspirit.com";

// Fetch the full member directory.
export async function getMembers() {
  const res = await fetch(`${BASE_URL}/api/members`);
  if (!res.ok) {
    throw new Error(`Failed to load members (status ${res.status})`);
  }
  return res.json(); // { count, members: [...] }
}

// Check one member's availability on a given date (YYYY-MM-DD).
export async function checkAvailability(msp_id, date) {
  const res = await fetch(`${BASE_URL}/api/availability/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msp_id, date }),
  });
  if (!res.ok) {
    throw new Error(`Availability check failed (status ${res.status})`);
  }
  return res.json(); // { status: 'available' | 'busy', reason?, ... }
}
