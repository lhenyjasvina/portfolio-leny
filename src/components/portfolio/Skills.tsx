import { Code2, Database, Users, Award, Languages } from "lucide-react";
import { SectionHeader } from "./About";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: Code2,
    title: "Dasar Pemrograman Web",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    icon: Database,
    title: "Data & Perkantoran",
    items: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Microsoft Excel (Pengolahan & Analisis Data)",
    ],
  },
  {
    icon: Users,
    title: "Pelayanan & Analisis",
    items: ["Pelayanan Publik & Administrasi", "Problem Solving & Analisis"],
  },
  {
    icon: Languages,
    title: "Bahasa",
    items: ["Indonesia — Fasih", "Inggris — Basic"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Keahlian" title="Kemampuan & Sertifikasi" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 100}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <g.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-primary">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={300}
          className="mt-6 flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-6"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Sertifikasi</p>
            <h3 className="mt-1 text-lg font-semibold text-primary">Operator Komputer Madya</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Diterbitkan oleh VSGA — Vocational School Graduate Academy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
