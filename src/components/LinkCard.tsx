type LinkCardProps = {
  label: string;
  href: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-orange-100/70 bg-white/80 px-5 py-3.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-400">
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
