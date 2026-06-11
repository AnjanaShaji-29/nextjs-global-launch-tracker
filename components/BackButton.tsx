"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackButton() {
  const searchParams = useSearchParams();
  const q = searchParams.toString();

  return (
    <Link
      href={q ? `/?${q}` : "/"}
      className="inline-block text-sm text-blue-600 underline"
    >
      ← Back to Dashboard
    </Link>
  );
}
