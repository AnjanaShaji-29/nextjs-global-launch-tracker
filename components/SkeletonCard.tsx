export default function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded p-4">
      <div className="h-6 bg-gray-300 rounded mb-3" />

      <div className="h-4 bg-gray-300 rounded mb-2" />

      <div className="h-4 bg-gray-300 rounded" />
    </div>
  );
}