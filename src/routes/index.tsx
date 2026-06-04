import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leny Jasvina Wanda — Lulusan Teknik Informatika" },
      {
        name: "description",
        content:
          "Portofolio Leny Jasvina Wanda — spesialis manajemen data, administrasi keuangan digital (Pembayaran Massal), dan dukungan TI yang berbasis di Pinrang.",
      },
      { property: "og:title", content: "Leny Jasvina Wanda — Portofolio" },
      {
        property: "og:description",
        content:
          "Lulusan Teknik Informatika yang mahir dalam manajemen data operasional, Pembayaran Massal, dukungan TI, dan teknologi berbasis geolokasi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
