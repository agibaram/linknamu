type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      className="flex w-full items-center justify-center rounded-2xl border border-orange-100/70 bg-white/80 px-5 py-3.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
