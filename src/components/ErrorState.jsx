// Shown when the /api/members request itself fails.
// Explains what happened and gives a way to retry.
export default function ErrorState({ message, onRetry }) {
  return (
    <div className="rounded-lg border border-busy/20 bg-busy/5 p-6 text-center sm:p-8">
      <p className="font-medium text-busy">Couldn&apos;t load the member list.</p>
      <p className="mt-1 text-sm text-muted">{message}</p>
      <button
        onClick={onRetry}
        className="mt-4 rounded-md border border-busy px-4 py-1.5 text-sm font-medium text-busy
                   hover:bg-busy hover:text-white"
      >
        Retry
      </button>
    </div>
  );
}
