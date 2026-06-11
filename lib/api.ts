import { Launch } from "@/types/launch";

const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

export async function getLaunches(): Promise<{ results: Launch[] }> {
  const response = await fetch(`${BASE_URL}/launch/upcoming/`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch launches");
  }

  return response.json();
}

export async function getLaunchDetail(id: string): Promise<Launch> {
  console.log(id);
  const response = await fetch(`${BASE_URL}/launch/${id}/`, {
    next: {
      revalidate: 300,
    },
  });
  if (!response.ok) {
    throw new Error("Launch not found");
  }

  return response.json();
}
