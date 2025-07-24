export async function handleError(url: string, errorMessage: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(errorMessage || "An error has occurred");
    }

    const json = await res.json();

    return json;
  } catch (err) {
    console.error(err);
    throw new Error(errorMessage || "An error has occurred");
  }
}
