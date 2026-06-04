import { Briefcase } from "lucide-react";
import { SectionHeader } from "./About";
import { Reveal } from "./Reveal";

const jobs = [
  {
    role: "Operator Bendahara",
    org: "Puskesmas Suppa",
    period: "Mar 2025 — Sekarang",
    points: [
      "Mengelola administrasi keuangan, termasuk pencatatan dan pengolahan transaksi menggunakan sistem Pembayaran Massal.",
      "Menyusun laporan keuangan bulanan dan tahunan secara akurat dan tepat waktu.",
      "Menyiapkan Buku Kas Umum (BKU) serta Laporan Realisasi Anggaran sesuai dengan standar yang berlaku.",
      "Memastikan ketelitian dan kesesuaian data keuangan melalui proses verifikasi dan pencatatan yang sistematis.",
    ],
  },
  {
    role: "Magang",
    org: "Kantor Kelurahan Galung Maloang",
    period: "Sep 2023 — Okt 2023",
    points: [
      "Melayani masyarakat dalam pengurusan berbagai dokumen administrasi kependudukan.",
      "Mengelola penginputan dan pencatatan data administrasi masyarakat secara rapi dan akurat.",
      "Mendukung kelancaran pelayanan publik melalui pengecekan berkas, pengarahan masyarakat, dan koordinasi administrasi.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Pengalaman" title="Tempat Saya Bekerja" />
        </Reveal>

        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {jobs.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 120} className="relative">
              <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background sm:-left-[42px]">
                <Briefcase className="h-3 w-3 text-accent" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
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
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
