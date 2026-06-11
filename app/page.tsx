import { getLaunches } from "@/lib/api";
import LaunchList from "@/components/LaunchList";

export default async function Home() {
  const data = await getLaunches();

  return (
    <main className="container mx-auto p-4">
      <LaunchList launches={data.results} />
    </main>
  );
}
