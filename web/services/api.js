const API_URL = process.env.NEXT_PUBLIC_SIMAI_API || 'http://localhost:4000';

export async function fetchWithAuth(path, token) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  return response.json();
}
