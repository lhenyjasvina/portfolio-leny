import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { getProject, projects, type Project } from "@/components/portfolio/projects-data";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project ? `${project.title} — Leny Jasvina Wanda` : "Proyek — Leny Jasvina Wanda";
    const description = project?.tagline ?? "Detail proyek.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl text-primary">Proyek tidak ditemukan</h1>
        <p className="mt-3 text-sm text-muted-foreground">Proyek yang Anda cari tidak ada.</p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Kembali ke semua proyek
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl text-primary">Terjadi kesalahan</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      </main>
      <Footer />
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="border-b border-border/60 bg-muted/30">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Semua proyek
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {project.context}
            </p>
            <h1 className="mt-3 text-4xl text-primary sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">{project.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-primary">Ringkasan</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary">Fitur Utama</h2>
                <ul className="mt-4 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Hasil
                    </p>
                    <p className="mt-1.5 text-sm text-foreground">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Peran
                </p>
                <p className="mt-2 text-sm text-foreground">{project.role}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Konteks
                </p>
                <p className="mt-2 text-sm text-foreground">{project.context}</p>
              </div>
            </aside>
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-t border-border/60 bg-muted/30">
            <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
              <h2 className="text-xl font-semibold text-primary">Proyek Lainnya</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.id}
                    to="/projects/$projectId"
                    params={{ projectId: p.id }}
                    className="block rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold text-primary">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
