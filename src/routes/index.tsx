import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leny Jasvina Wanda — Informatics Engineering Graduate" },
      {
        name: "description",
        content:
          "Portfolio of Leny Jasvina Wanda — data management, digital financial administration (Mass Payment), and IT support specialist based in Pinrang.",
      },
      { property: "og:title", content: "Leny Jasvina Wanda — Portfolio" },
      {
        property: "og:description",
        content:
          "Informatics Engineering graduate skilled in operational data management, Mass Payment, IT support, and geolocation-based technology.",
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
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
