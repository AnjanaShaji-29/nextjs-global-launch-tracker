"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Launch } from "@/types/launch";
import LaunchCard from "./LaunchCard";

type Props = {
  launches: Launch[];
};

export default function SearchFilters({ launches }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const provider = searchParams.get("provider") || "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`/?${params.toString()}`);
  };

  const uniqueStatuses = Array.from(
    new Set(launches.map((l) => l.status.name)),
  );

  const uniqueProviders = Array.from(
    new Set(launches.map((l) => l.launch_service_provider.name)),
  );

  const filtered = launches.filter((launch) => {
    const q = search.toLowerCase();

    const matchesSearch =
      launch.name.toLowerCase().includes(q) ||
      launch.launch_service_provider.name.toLowerCase().includes(q);

    const matchesStatus = !status || launch.status.name === status;

    const matchesProvider =
      !provider || launch.launch_service_provider.name === provider;

    return matchesSearch && matchesStatus && matchesProvider;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-3 mb-6">
        <input
          className="border rounded px-3 py-2 w-full md:flex-1"
          placeholder="Search by mission or provider"
          value={search}
          onChange={(e) => updateParam("search", e.target.value)}
        />

        <select
          className="border rounded px-3 py-2 w-full md:w-48"
          value={status}
          onChange={(e) => updateParam("status", e.target.value)}
        >
          <option value="">All Statuses</option>
          {uniqueStatuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          className="border rounded px-3 py-2 w-full md:w-48"
          value={provider}
          onChange={(e) => updateParam("provider", e.target.value)}
        >
          <option value="">All Providers</option>
          {uniqueProviders.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  );
}
