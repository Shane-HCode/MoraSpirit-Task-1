export default function LoadingState() {
  const placeholders = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {placeholders.map((_, i) => (
        <div
          key={i}
          className="h-32 border rounded-lg animate-pulse border-line bg-surface"
        />
      ))}
    </div>
  );
}
