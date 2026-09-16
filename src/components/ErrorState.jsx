// Shown when the api request fails
export default function ErrorState({ message, onRetry }) {
  return (
    <div className="p-6 text-center border rounded-lg border-busy/20 bg-busy/5 sm:p-8">
      <p className="text-lg font-medium md:text-2xl lg:text-md text-busy">Couldn&apos;t load the member list.</p>
      <p className="mt-1 text-lg lg:text-md md:text-xl text-muted">{message}</p>
      <button
        onClick={onRetry}
        className="mt-4 rounded-md border border-busy px-4 py-1.5 text-sm lg:text-sm md:text-xl font-medium text-busy
                  hover:bg-busy hover:text-white"
      >
        Retry
      </button>
    </div>
  );
}
