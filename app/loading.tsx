import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}