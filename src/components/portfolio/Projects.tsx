import { Link } from "@tanstack/react-router";
import { ArrowRight, FolderGit2 } from "lucide-react";
import { SectionHeader } from "./About";
import { projects } from "./projects-data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Work" title="Featured projects" />
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          A selection of academic and professional work spanning web
          development, data management, and digital administration.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FolderGit2 className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/projects/$projectId"
                params={{ projectId: p.id }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary"
              >
                View details
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            See all projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
