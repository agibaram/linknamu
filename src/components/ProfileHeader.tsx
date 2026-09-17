type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={name}
          className="h-28 w-28 rounded-full object-cover shadow-[0_12px_28px_-10px_rgba(154,82,26,0.45)] ring-4 ring-white/80 sm:h-32 sm:w-32 dark:ring-white/10"
        />
      ) : (
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-orange-100 text-3xl font-semibold text-orange-500 shadow-[0_12px_28px_-10px_rgba(154,82,26,0.45)] ring-4 ring-white/80 sm:h-32 sm:w-32 dark:bg-orange-900/40 dark:text-orange-200 dark:ring-white/10">
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {name}
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-300">{bio}</p>
      </div>
    </div>
  );
}
