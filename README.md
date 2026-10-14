# For Ica — Before Tomorrow (Pure Editorial Edition)

Sebuah **interactive digital letter** dan esai personal berestetika editorial sastra (*Kinfolk/Cereal*) yang hening, intim, dan bersih dari elemen "AI slop" (tanpa box cards SaaS, tanpa neon mesh blur blobs, tanpa icon generik, dan tanpa animasi mainan). Dibuat khusus untuk Ica menjelang interview terakhir LPDP (14 Oktober 2026).

---

## 🕊️ Filosofi Desain: Anti-AI Slop

1. **Kanvas Kertas Archival & Tekstur Alami** (`#F7F1E8`):
   - Menggunakan palet kertas hangat murni dengan tekstur *fine paper grain* alami.
   - Bersih dari *fuzzy gradient blobs* (`blur-[120px]`) dan elemen neon digital.

2. **Tipografi Sastra Berkelas Tinggi**:
   - Judul & kutipan emosional: *Cormorant Garamond* (Serif).
   - Penomoran bab, indeks romawi (*I, II, III*), keterangan waktu, dan metadata: *Inter* (Sans) dengan spasi renggang (*letter-spacing*).
   - Pembatas antar bagian menggunakan garis rambut (*hairline rules* tipis yang tenang).

3. **Bait Pengingat Vertikal (Tanpa Kotak Kartu SaaS)** ([`components/Reminders.tsx`](file:///Users/tid/web/ganbate/components/Reminders.tsx)):
   - Disusun mengalir vertikal seperti bait dalam buku sastra:
     - `I. Breathe.` — *"Tarik napas. Pelan-pelan."*
     - `II. Trust Yourself.` — *"Kamu sudah sampai sejauh ini."*
     - `III. Tell Your Story.` — *"Nggak harus sempurna. Cukup jadi Ica."*

4. **Countdown Tipografi Murni (Bukan Widget Toko Online)** ([`components/Countdown.tsx`](file:///Users/tid/web/ganbate/components/Countdown.tsx)):
   - Angka countdown serif murni yang diapit dua garis tipis horizontal, tanpa rounded box atau колонка flash sale.

5. **Intimate Dark Canvas Fade** ([`components/LastThing.tsx`](file:///Users/tid/web/ganbate/components/LastThing.tsx)):
   - Menghapus amplop 3D palsu dan bintang jatuh kartun.
   - Undangan sederhana *"Buka catatan rahasia →"* bertransisi hening ke layar malam hangat (`#1C1715`) dengan teks krem tipis yang muncul bertahap seperti bisikan:
     > *"I'm rooting for you."*  
     > *(jeda sunyi)*  
     > *"Maybe a little more than I should. :)"*

6. **Quiet Audio Controller** ([`components/MusicToggle.tsx`](file:///Users/tid/web/ganbate/components/MusicToggle.tsx)):
   - Kontrol teks tipografi minimalis di sudut atas: `[ ♫ sound: on / off ]`.
   - Melodi piano lembut dimainkan secara hening dengan Web Audio API fallback.

7. **Easter Egg Sastra** ([`components/EasterEggModal.tsx`](file:///Users/tid/web/ganbate/components/EasterEggModal.tsx)):
   - Ketukan 3x pada nama **Ica** memunculkan kartu catatan tersembunyi yang bersahaja:
     *“Psst... You were always the main character here.”*

---

## 🛠️ Pengaturan Konten

Seluruh teks dan jam interview dapat disesuaikan langsung di:  
👉 [`lib/config.ts`](file:///Users/tid/web/ganbate/lib/config.ts)

---

## 🚀 Menjalankan Website

```bash
# Development
pnpm dev

# Build
pnpm build
```

Buka **[http://localhost:3000](http://localhost:3000)** di browser (disarankan membaca di layar ponsel atau tablet dengan santai).
