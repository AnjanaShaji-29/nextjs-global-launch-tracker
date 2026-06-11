import SearchFilters from "./SearchFilters";
import { Launch } from "@/types/launch";
import SkeletonCard from "./SkeletonCard";

type Props = {
  launches: Launch[];
};

export default function LaunchList({ launches }: Props) {
  if (!launches || launches.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return <SearchFilters launches={launches} />;
}
