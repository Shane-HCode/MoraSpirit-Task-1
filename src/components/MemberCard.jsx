import { useState } from "react";
import { checkAvailability } from "../api/client";
import StatusIndicator from "./StatusIndicator";

// Turns "Thisuka Kodithuwakku" into "TK" for the avatar circle
function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberCard({ member, date }) {
  const [status, setStatus] = useState("idle");
  const [reason, setReason] = useState(null);

  async function handleCheck() {
    setStatus("checking");
    setReason(null);
    try {
      const result = await checkAvailability(member.id, date);
      setStatus(result.status === "busy" ? "busy" : "available");
      setReason(result.reason ?? null);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div
      className="flex flex-col p-4 transition-shadow border rounded-lg border-busy bg-surface hover:shadow-sm sm:p-5"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-12 h-12 text-xl text-blue-700 rounded-full lg:text-xl md:text-2xl shrink-0 bg-stone-200 font-display"
        >
          {initials(member.name)}
        </div>
        <div className="min-w-0">
          <p className="text-lg font-bold truncate lg:text-lg md:text-xl text-ink">{member.name}</p>
          <p className="truncate text-md lg:text-md md:text-lg text-muted">{member.role}</p>
        </div>
      </div>

      <button
        onClick={handleCheck}
        disabled={status === "checking"}
        className="mt-4 rounded-md border border-blue-700 px-3 py-1.5 text-sm lg:text-sm md:text-lg font-semibold text-blue-700
                  hover:bg-blue-500 hover:text-white"
      >
        Check availability
      </button>

      <StatusIndicator status={status} reason={reason} />
    </div>
  );
}
