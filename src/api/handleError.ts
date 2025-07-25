type ErrorWithStatus = Error & { status?: number };

export async function handleError(url: string, errorMessage: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error(errorMessage);
    (error as ErrorWithStatus).status = res.status;
    throw error;
  }

  return res.json();
}
