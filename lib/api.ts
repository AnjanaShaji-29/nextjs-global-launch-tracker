const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

export async function getLaunches() {
  const response = await fetch(`${BASE_URL}/launch/upcoming/`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}
