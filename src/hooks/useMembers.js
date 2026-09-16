import { useEffect, useState } from "react";
import { getMembers } from "../api/client";

// Loads the member directory and exposes loading/error state
// so the UI can render the right thing at every stage.
export function useMembers() {
  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getMembers()
      .then((data) => {
        if (cancelled) return;
        setMembers(data.members ?? []);
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setStatus("error");
      });

    // Avoid setting state if the component unmounts mid-fetch.
    return () => {
      cancelled = true;
    };
  }, []);

  return { members, status, error };
}
