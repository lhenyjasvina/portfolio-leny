export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-lg">Leny Jasvina Wanda</p>
        <p className="text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} · Dibuat dengan penuh perhatian.
        </p>
      </div>
    </footer>
  );
}
