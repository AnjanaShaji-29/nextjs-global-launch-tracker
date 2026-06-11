export default function StatusBadge({ status }: { status: string }) {
  const colors = {
    Success: "bg-green-500 text-white",
    Failure: "bg-red-500 text-white",
    "Go for Launch": "bg-blue-500 text-white",
  };

  return (
    <span
      className={`px-2 py-1 rounded ${
        colors[status as keyof typeof colors] ?? "bg-gray-400"
      }`}
    >
      {status}
    </span>
  );
}
