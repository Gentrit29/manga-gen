type ErrorWithStatus = Error & { status?: number };

export async function handleError(url: string, errorMessage: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error(errorMessage);
      (error as ErrorWithStatus).status = res.status;
      throw error;
    }

    return res.json();
  } catch (err) {
    const error = new Error(
      `${errorMessage} - ${err instanceof Error ? err.message : String(err)}`,
    );
    throw error;
  }
}
