export default function Header({ count, date, onDateChange }) {
  return (
    <header className="bg-red-700 border-b border-line">
      <div
        className="flex flex-col max-w-6xl gap-4 px-4 py-5 mx-auto sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
      >
        <div>
          <p className="text-3xl font-bold text-black md:text-4xl lg:text-3xl">
            MoraSpirit
          </p>
          <p className="text-white text-md md:text-xl lg:text-md">
            Member availability dashboard
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label className="flex flex-col text-white sm:text-md md:text-lg lg:text-md sm:flex-row sm:items-center sm:gap-2">
            Checking date
            <input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className="mt-1 rounded-md border border-line bg-base px-3 py-1.5 text-ink
                        focus:border-blue-700 sm:mt-0"
            />
          </label>
          <span className="text-white text-md md:text-lg lg:text-md">
            {count} member{count === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </header>
  );
}
