import { useState } from "react";
import { useMembers } from "./hooks/useMembers";
import Header from "./components/Header";
import MemberGrid from "./components/MemberGrid";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";

// Today's date as YYYY-MM-DD, used as the default value for the date picker.
function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [date, setDate] = useState(today());
  const { members, status, error } = useMembers();

  return (
    <div className="min-h-screen bg-base">
      <Header count={members.length} date={date} onDateChange={setDate} />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {status === "loading" && <LoadingState />}

        {status === "error" && (
          <ErrorState message={error} onRetry={() => window.location.reload()} />
        )}

        {status === "ready" && members.length === 0 && (
          <p className="text-center text-muted">No members found.</p>
        )}

        {status === "ready" && members.length > 0 && (
          <MemberGrid members={members} date={date} />
        )}
      </main>
    </div>
  );
}
