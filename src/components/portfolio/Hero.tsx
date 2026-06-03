import { ArrowRight, Mail } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

export function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for new opportunities
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-primary sm:text-6xl md:text-7xl">
            Leny Jasvina <br className="hidden sm:block" />
            Wanda
          </h1>
          <p className="mt-5 text-base font-medium text-accent sm:text-lg">
            Informatics Engineering Graduate · Data Management & Tech Support Specialist
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            An Informatics Engineering graduate with experience in government and healthcare
            sectors. Skilled in operational data management, digital financial administration
            (Mass Payment), and IT support. Detail-oriented, structured, and experienced in
            implementing geolocation-based technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/5 to-transparent" />
          <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-sm">
            <img
              src={profileImg}
              alt="Portrait of Leny Jasvina Wanda"
              width={768}
              height={768}
              className="aspect-square w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Placeholder — replace with your professional photo
          </p>
        </div>
      </div>
    </section>
  );
}
