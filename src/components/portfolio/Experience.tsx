import { Briefcase } from "lucide-react";
import { SectionHeader } from "./About";

const jobs = [
  {
    role: "Operator Bendahara",
    org: "Puskesmas Suppa",
    period: "Mar 2025 — Present",
    points: [
      "Manage operational financial data and digital disbursement using the Mass Payment system.",
      "Prepare and reconcile financial reports including BKU (Buku Kas Umum) and Budget Realization.",
      "Coordinate with internal staff to ensure accurate, on-time payment processing.",
    ],
  },
  {
    role: "Administrative Intern",
    org: "Kantor Kelurahan Galung Maloang",
    period: "Sep 2023 — Oct 2023",
    points: [
      "Supported public service administration and resident document processing.",
      "Performed accurate data entry and maintained structured digital records.",
      "Assisted with organizing and archiving official correspondence.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />

        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {jobs.map((job) => (
            <li key={job.role} className="relative">
              <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background sm:-left-[42px]">
                <Briefcase className="h-3 w-3 text-accent" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{job.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
