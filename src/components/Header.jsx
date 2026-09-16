// Top bar: brand name on the left, member count + date control on the right.
// Stacks vertically on small screens, sits in one row from sm upward.
export default function Header({ count, date, onDateChange }) {
  return (
    <header className="border-b border-line bg-surface">
      <div
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5
                   sm:flex-row sm:items-center sm:justify-between sm:px-6
                   lg:px-8"
      >
        <div>
          <p className="font-display text-xl font-600 text-ink sm:text-2xl lg:text-3xl">
            MoraSpirit
          </p>
          <p className="text-sm text-muted">Member availability dashboard</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label className="flex flex-col text-sm text-muted sm:flex-row sm:items-center sm:gap-2">
            Checking date
            <input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className="mt-1 rounded-md border border-line bg-base px-3 py-1.5 text-ink
                         focus:border-brand sm:mt-0"
            />
          </label>
          <span className="text-sm text-muted">
            {count} member{count === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </header>
  );
}
