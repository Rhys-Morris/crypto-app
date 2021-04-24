export async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
