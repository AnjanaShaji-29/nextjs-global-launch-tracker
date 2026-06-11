import Link from "next/link";
import { Launch } from "@/types/launch";
import StatusBadge from "./StatusBadge";
import { formatDate } from "@/utils/helper";
import { useSearchParams } from "next/navigation";

type Props = {
  launch: Launch;
};

export default function LaunchCard({ launch }: Props) {
  const searchParams = useSearchParams();
  return (
    <Link href={`/launches/${launch.id}?${searchParams.toString()}`}>
      <div className="rounded-lg border p-4 hover:shadow-lg">
        <div className="flex items-start justify-between">
          <h2 className="font-bold text-lg">{launch.name}</h2>
          <StatusBadge status={launch.status.name} />
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {launch.rocket.configuration.name}
        </p>

        <p className="text-sm text-gray-600">
          {launch.launch_service_provider.name}
        </p>

        <p className="text-xs text-gray-500 mt-2">{formatDate(launch.net)}</p>
      </div>
    </Link>
  );
}
