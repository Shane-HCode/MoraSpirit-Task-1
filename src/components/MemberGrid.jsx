import MemberCard from "./MemberCard";
export default function MemberGrid({ members, date }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      {members.map((member) => (
        <MemberCard key={member.id} member={member} date={date} />
      ))}
    </div>
  );
}
