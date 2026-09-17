type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 dark:bg-zinc-700 dark:text-zinc-300">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{name}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
    </div>
  );
}
