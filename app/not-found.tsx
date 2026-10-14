import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center select-none bg-paper text-ink">
      <span className="text-xs font-sans uppercase tracking-[0.3em] text-terracotta mb-4">
        404 — Halaman Tidak Ditemukan
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink mb-6">
        Kembali ke Surat
      </h1>
      <Link
        href="/"
        className="text-xs font-sans uppercase tracking-[0.2em] text-ink-light border-b border-hairline hover:border-ink pb-1 transition-colors"
      >
        ← Buka Halaman Utama
      </Link>
    </div>
  );
}
