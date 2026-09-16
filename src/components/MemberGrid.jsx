import MemberCard from "./MemberCard";

// Breakpoint plan: 1 col on mobile, 2 on sm, 3 on md, 4 on lg and up.
export default function MemberGrid({ members, date }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5
                 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
    >
      {members.map((member) => (
        <MemberCard key={member.id} member={member} date={date} />
      ))}
    </div>
  );
}
