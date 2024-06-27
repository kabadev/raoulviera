export async function fetchData(url) {
  try {
    const res = await fetch(`/api${url}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
