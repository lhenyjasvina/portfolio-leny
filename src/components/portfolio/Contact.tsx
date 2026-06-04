import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./About";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  message: z.string().trim().min(5, "Pesan terlalu pendek").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Client-only acknowledgement
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    toast.success("Pesan siap dikirim", {
      description:
        "Terima kasih! Untuk saat ini, silakan kirim email ke lhenyjasvinaw0907@gmail.com.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Kontak" title="Mari Terhubung" />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <Reveal delay={100} className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Terbuka untuk peran di bidang manajemen data, administrasi keuangan, dan dukungan TI.
              Silakan hubungi saya melalui salah satu saluran di bawah ini.
            </p>
            <ContactItem
              icon={Mail}
              label="Email"
              value="lhenyjasvinaw0907@gmail.com"
              href="mailto:lhenyjasvinaw0907@gmail.com"
            />
            <ContactItem
              icon={Phone}
              label="Telepon"
              value="+62 852 9036 1510"
              href="tel:+6285290361510"
            />
            <ContactItem icon={MapPin} label="Lokasi" value="Urung, Pinrang" />
          </Reveal>

          <Reveal delay={200}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nama" name="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={100}
                    className="input-base"
                    placeholder="Nama Anda"
                  />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className="input-base"
                    placeholder="anda@example.com"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Pesan" name="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className="input-base resize-y"
                    placeholder="Apa yang bisa saya bantu?"
                  />
                </Field>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {submitting ? "Mengirim..." : "Kirim pesan"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-primary">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
