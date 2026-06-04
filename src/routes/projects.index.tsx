import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FolderGit2 } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/components/portfolio/projects-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Proyek — Leny Jasvina Wanda" },
      {
        name: "description",
        content:
          "Proyek unggulan Leny Jasvina Wanda — pengembangan web, manajemen data, dan administrasi keuangan digital.",
      },
      { property: "og:title", content: "Proyek — Leny Jasvina Wanda" },
      {
        property: "og:description",
        content:
          "Karya akademik dan profesional pilihan, termasuk aplikasi absensi berbasis lokasi dari skripsi.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Kembali ke beranda
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Karya</p>
          <h1 className="mt-3 text-4xl text-primary sm:text-5xl">Semua Proyek</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Daftar lengkap karya akademik, magang, dan profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FolderGit2 className="h-4 w-4" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-primary">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <Link
                to="/projects/$projectId"
                params={{ projectId: p.id }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary"
              >
                Lihat detail
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
