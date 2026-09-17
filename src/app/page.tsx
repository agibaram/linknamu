import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "Github", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fffaf2] via-[#fef1e2] to-[#fde3c8] px-6 py-16 sm:px-10 dark:from-[#1c1712] dark:via-[#211a14] dark:to-[#261e16]">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="여우제이"
          bio="생활체육 복싱인간"
          imageUrl="https://placehold.co/150x150/orange/white"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
