import { useState } from "react";
import { checkAvailability } from "../api/client";
import StatusIndicator from "./StatusIndicator";

// Turns "Thisuka Kodithuwakku" into "TK" for the avatar circle.
function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberCard({ member, date }) {
  // "idle" | "checking" | "available" | "busy" | "error"
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
      className="flex flex-col rounded-lg border border-line bg-surface p-4
                 transition-shadow hover:shadow-sm sm:p-5"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                     bg-brand/10 font-display font-600 text-brand"
        >
          {initials(member.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-medium text-ink">{member.name}</p>
          <p className="truncate text-sm text-muted">{member.role}</p>
        </div>
      </div>

      <button
        onClick={handleCheck}
        disabled={status === "checking"}
        className="mt-4 rounded-md border border-brand px-3 py-1.5 text-sm font-medium text-brand
                   transition-colors hover:bg-brand hover:text-white
                   disabled:cursor-not-allowed disabled:opacity-60"
      >
        Check availability
      </button>

      <StatusIndicator status={status} reason={reason} />
    </div>
  );
}
