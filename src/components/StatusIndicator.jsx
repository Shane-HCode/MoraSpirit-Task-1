export default function StatusIndicator({ status, reason }) {
  if (status === "checking") {
    return (
      <p className="flex items-center gap-2 mt-3 text-sm text-muted">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-muted" />
        Checking availability…
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="flex items-center gap-2 mt-3 text-sm text-busy">
        <span className="h-2.5 w-2.5 rounded-full bg-busy" />
        Couldn&apos;t check this member. Try again.
      </p>
    );
  }

  if (status === "available") {
    return (
      <p className="flex items-center gap-2 mt-3 text-sm font-medium text-available">
        <span className="h-2.5 w-2.5 rounded-full bg-available" />
        Available on this date
      </p>
    );
  }

  if (status === "busy") {
    return (
      <div className="mt-3 rounded-md border border-busy/20 bg-busy/5 p-2.5">
        <p className="flex items-center gap-2 text-sm font-medium text-busy">
          <span className="h-2.5 w-2.5 rounded-full bg-busy" />
          Busy on this date
        </p>
        {reason && <p className="mt-1 text-sm text-muted">{reason}</p>}
      </div>
    );
  }

  return null;
}
