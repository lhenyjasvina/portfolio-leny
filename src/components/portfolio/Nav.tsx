const links = [
  { href: "/#about", label: "Tentang" },
  { href: "/#experience", label: "Pengalaman" },
  { href: "/#projects", label: "Proyek" },
  { href: "/#skills", label: "Keahlian" },
  { href: "/#contact", label: "Kontak" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-xl text-primary">
          Leny<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Hubungi Saya
        </a>
      </div>
    </header>
  );
}
