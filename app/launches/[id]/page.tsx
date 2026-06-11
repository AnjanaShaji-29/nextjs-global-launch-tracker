import { getLaunchDetail } from "@/lib/api";
import { Launch } from "@/types/launch";
import BackButton from "@/components/BackButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const launch: Launch = await getLaunchDetail(id);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <BackButton />
      </div>

      {launch.image && (
        <img
          src={launch.image}
          alt={launch.name}
          className="w-full max-h-72 object-cover rounded mb-4"
        />
      )}

      <h1 className="text-2xl font-bold mb-2">{launch.name}</h1>

      <p className="text-sm text-gray-700 mb-4">
        {launch.launch_service_provider.name}
      </p>

      {launch.vidURLs && launch.vidURLs.length > 0 && (
        <div className="space-y-2">
          <h2 className="font-semibold">Video Links</h2>
          <ul className="list-disc pl-5">
            {launch.vidURLs.map((v, i) => (
              <li key={i}>
                <a
                  className="text-blue-600 underline"
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {v.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}