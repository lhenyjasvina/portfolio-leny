export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  role: string;
  tags: string[];
  features: string[];
  outcome: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "location-based-attendance",
    title: "Aplikasi Absensi Berbasis Lokasi",
    tagline: "Proyek skripsi — sistem absensi web menggunakan Geolocation API browser.",
    description:
      "Platform absensi berbasis web yang dikembangkan sebagai skripsi untuk SMAN 5 Pinrang. Sistem memverifikasi kehadiran di lokasi melalui Geolocation API browser, menggantikan catatan manual dengan alur kerja digital yang cepat dan teraudit.",
    context: "Skripsi · SMAN 5 Pinrang (2024)",
    role: "Pengembang tunggal — riset, desain, implementasi, dan deployment.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Geolocation API"],
    features: [
      "Validasi koordinat GPS terhadap radius geofence sekolah",
      "Akses berbasis peran untuk siswa, guru, dan administrator",
      "Laporan absensi harian, mingguan, dan bulanan yang dapat diekspor ke Excel",
      "Antarmuka responsif mobile-first untuk check-in di kelas",
    ],
    outcome:
      "Mengurangi waktu pencatatan manual dan menyediakan data absensi yang terverifikasi dan berbasis lokasi bagi staf.",
    featured: true,
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
