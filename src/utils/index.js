export async function fetchData(url) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
      cache: "no-store",
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
