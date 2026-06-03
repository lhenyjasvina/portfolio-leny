import { GraduationCap, MapPin, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="About" title="Education & background" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={100} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Degree
                </p>
                <h3 className="mt-1 text-xl font-semibold text-primary">
                  Bachelor of Engineering, Informatics Engineering
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Universitas Muhammadiyah Parepare
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                  GPA 3.81 / 4.00
                </div>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Parepare, Indonesia
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Thesis Project
                </p>
                <h3 className="mt-1 text-xl font-semibold text-primary">
                  Location-Based Attendance Application
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built for SMAN 5 Pinrang — a web-based attendance system leveraging
                  HTML, CSS, JavaScript, and PHP with the browser Geolocation API to
                  verify on-site presence and reduce manual record-keeping.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Web", "Geolocation API", "PHP", "JavaScript"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl text-primary sm:text-4xl">{title}</h2>
    </div>
  );
}
