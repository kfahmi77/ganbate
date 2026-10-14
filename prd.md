# PRD — For Ica: Before Tomorrow

## 1. Product Overview

**Product Name:** For Ica: Before Tomorrow  
**Product Type:** Personal Interactive Web Experience  
**Target User:** Ica  
**Purpose:** Memberikan dukungan dan semangat kepada Ica menjelang interview terakhir LPDP pada 14 Oktober 2026.

Website ini bukan sekadar halaman ucapan "good luck", tetapi sebuah **interactive digital letter** yang bisa dibuka Ica sebelum interview.

Tone yang ingin dibangun:

- Personal
- Warm
- Calm
- Minimalist
- Subtle romantic
- Cinematic
- Tidak terlalu cheesy
- Tidak terlalu eksplisit mengenai hubungan

---

# 2. Product Goals

### Primary Goal

Membuat Ica merasa:

> "Ada seseorang yang benar-benar mendukung aku."

### Secondary Goals

1. Memberikan sedikit ketenangan sebelum interview.
2. Mengingatkan Ica bahwa dia sudah berhasil melewati proses panjang.
3. Memberikan pengalaman yang memorable.
4. Menyampaikan perasaan secara subtle tanpa membuatnya terlalu awkward.
5. Membuat website yang tetap memiliki makna setelah interview selesai.

---

# 3. Target Experience

Saat membuka website, Ica harus merasa seperti sedang membuka **surat digital yang dibuat khusus untuk dirinya**.

Experience yang diinginkan:

```text
Curious
   ↓
Warm
   ↓
Calm
   ↓
Emotional
   ↓
Smile
   ↓
"Someone is rooting for me."
```

---

# 4. User Flow

```text
Landing Page
     ↓
"For Ica."
     ↓
Before Tomorrow
     ↓
Scroll
     ↓
A Short Message
     ↓
Things To Remember
     ↓
Interview Countdown
     ↓
One Last Thing...
     ↓
Personal Message
     ↓
Good Luck, Ica.
```

---

# 5. Page Structure

## 5.1 Hero — "For Ica"

Fullscreen section.

### Content

```text
For Ica.

Before tomorrow.
```

Small date:

```text
14 · 10 · 2026
```

### Visual

Background minimal dengan nuansa:

- warm cream
- soft orange
- muted pink
- dark brown typography
- subtle grain
- soft gradient

Tidak menggunakan visual yang terlalu ramai.

### Animation

Saat halaman dibuka:

1. Background fade-in.
2. "For Ica." muncul perlahan.
3. "Before tomorrow." muncul setelah beberapa saat.
4. Small scroll indicator muncul di bawah.

---

# 6. Section — "Hey, Ica."

Section kedua memperkenalkan pesan.

### Copy

> Hey, Ica.
>
> Besok mungkin cuma satu hari dari sekian banyak hari.
>
> Tapi kamu sudah berjalan cukup jauh untuk sampai di sana.

### Animation

Text muncul berdasarkan scroll.

Setiap paragraf menggunakan fade + slight upward motion.

---

# 7. Section — "For Tomorrow"

Section berisi tiga reminder.

### Card 01

**Breathe.**

> Tarik napas.
> Pelan-pelan.

### Card 02

**Trust Yourself.**

> Kamu sudah sampai sejauh ini.

### Card 03

**Tell Your Story.**

> Nggak harus sempurna.
>
> Cukup jadi Ica.

### Interaction

Card muncul satu per satu ketika user melakukan scroll.

Hover/tap:

- card sedikit naik
- typography berubah ukuran
- background gradient bergerak perlahan

---

# 8. Section — Interview Countdown

Section utama sebelum closing.

### Header

```text
Until your interview
```

### Countdown

```text
08 : 42 : 17 : 32
```

Format:

```text
DAYS : HOURS : MINUTES : SECONDS
```

Target:

```text
14 October 2026
```

### Behavior

Countdown harus menggunakan timezone:

```text
Asia/Jakarta
```

Ketika waktu interview belum diketahui, countdown diarahkan ke awal tanggal 14 Oktober sebagai placeholder.

Sebaiknya waktu interview dapat diubah melalui satu configuration constant.

Contoh:

```typescript
INTERVIEW_DATE = "2026-10-14T09:00:00+07:00"
```

---

# 9. Section — "Remember This"

Setelah countdown, suasana dibuat lebih tenang.

### Copy

> Whatever happens tomorrow,
>
> I hope you remember that
>
> **you've already done something brave.**

Kemudian:

> Getting this far
> wasn't an accident.

Animasi sangat minimal.

Tidak ada card atau UI tambahan.

Tujuannya memberikan emotional pause.

---

# 10. Section — "One Last Thing..."

Ini merupakan emotional climax dari website.

Initial state:

```text
One last thing, Ica.
```

Ada button:

```text
Open
```

Ketika diklik:

Screen berubah menjadi lebih gelap / warm.

Text muncul secara bertahap:

> I'm rooting for you.

Pause.

Kemudian:

> Maybe a little more than I should. :)

Ini menjadi bagian romantis dari website.

Tidak perlu menjelaskan maksudnya.

---

# 11. Final Section

### Main Message

```text
Good luck tomorrow, Ica.
```

Kemudian:

```text
Go get it.
```

Small text:

```text
I'll be rooting for you.
```

### Visual

Soft animated particles / stars.

Tidak menggunakan confetti yang terlalu meriah karena tone website tetap intimate.

---

# 12. Post-Interview Experience

Website tidak boleh rusak setelah tanggal 14 Oktober.

Countdown otomatis berubah.

Sebelum interview:

```text
Until your interview
```

Setelah waktunya lewat:

```text
You did it.
```

Kemudian:

> Whatever the result,
> you showed up.
>
> And that's something worth being proud of.

Dengan demikian website tetap bisa dibuka setelah interview.

---

# 13. Design Direction

## Style

**Minimal Cinematic Romantic**

Bukan:

- Valentine's website
- overly cute
- pink everywhere
- heart animation berlebihan
- template AI-generated
- excessive gradients

Tetapi:

- editorial
- cinematic
- elegant
- warm
- intimate

---

# 14. Color Palette

### Background

```text
#F7F1E8
```

### Primary Text

```text
#2B2522
```

### Accent

```text
#D9825B
```

### Secondary Accent

```text
#C9A58D
```

### Dark Section

```text
#201B19
```

### Light Text

```text
#F8F3EC
```

---

# 15. Typography

Recommended combination:

### Display Font

```text
Cormorant Garamond
```

atau

```text
DM Serif Display
```

### Body Font

```text
Inter
```

atau

```text
Manrope
```

Karakter:

- Large typography
- Banyak whitespace
- Short sentences
- Editorial layout

---

# 16. Animation Direction

Animation harus **slow dan intentional**.

Gunakan:

- fade-in
- fade-up
- blur-to-clear
- text reveal
- parallax ringan
- gradient movement
- subtle grain
- slow floating particles

Hindari:

- bouncing animation
- excessive spring animation
- confetti berlebihan
- loading animation yang lama
- flashy transitions

---

# 17. Music

Music bersifat optional.

Landing page menyediakan:

```text
♫
```

Jika user menekan tombol, musik mulai dimainkan.

Default:

```text
Muted
```

Karena browser biasanya memblokir autoplay audio.

Musiknya harus:

- instrumental
- soft piano
- ambient
- cinematic
- tidak terlalu sedih

---

# 18. Responsive Design

Prioritas utama:

**Mobile-first**

Karena kemungkinan besar Ica membuka website melalui smartphone.

### Mobile

- fullscreen sections
- large typography
- simple interactions
- touch-friendly buttons

### Desktop

- centered content
- max-width sekitar 1000–1200px
- typography lebih besar
- subtle background effects

---

# 19. Technical Requirements

## Recommended Stack

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide Icons
```

Deployment:

```text
Vercel
```

Tidak membutuhkan backend.

---

# 20. Suggested Project Structure

```text
app/
├── page.tsx
├── layout.tsx
├── globals.css
│
components/
├── Hero.tsx
├── Intro.tsx
├── Reminders.tsx
├── Countdown.tsx
├── Remember.tsx
├── LastThing.tsx
├── FinalMessage.tsx
├── MusicToggle.tsx
└── Background.tsx
│
lib/
├── countdown.ts
└── config.ts
│
public/
├── audio/
│   └── background.mp3
└── images/
```

---

# 21. Configuration

Semua data personal sebaiknya berada di satu configuration file.

Contoh:

```typescript
export const siteConfig = {
  name: "Ica",

  interviewDate: "2026-10-14T09:00:00+07:00",

  messages: {
    intro: "Besok mungkin cuma satu hari dari sekian banyak hari.",
    reminder: "Nggak harus sempurna. Cukup jadi Ica.",
    final: "Good luck tomorrow, Ica.",
  },
};
```

Dengan demikian konten mudah diubah tanpa mengubah component.

---

# 22. Performance Requirements

Target:

- Lighthouse Performance > 90
- First Contentful Paint < 1.5s
- No unnecessary dependencies
- Optimized images
- Lazy-load audio
- Animations menggunakan GPU-friendly properties
- Tidak menggunakan video background berukuran besar

---

# 23. Accessibility

Website harus tetap usable ketika:

- animation disabled
- audio disabled
- user menggunakan keyboard
- mobile screen kecil

Gunakan:

```css
prefers-reduced-motion
```

untuk mematikan animasi berat.

---

# 24. SEO / Metadata

Title:

```text
For Ica — Before Tomorrow
```

Description:

```text
A little something before tomorrow.
```

Open Graph image:

Minimal typography:

```text
For Ica.

Before tomorrow.
```

---

# 25. Easter Egg

Opsional.

Jika user menekan nama **Ica** beberapa kali atau melakukan gesture tertentu, muncul tulisan kecil:

> Psst...
>
> You were always the main character here.

Tetapi jangan terlalu banyak easter egg agar emotional flow tetap terjaga.

---

# 26. Success Criteria

Website dianggap berhasil apabila:

- Ica dapat memahami website tanpa instruksi.
- Website dapat dibuka dengan baik dari smartphone.
- Countdown berjalan realtime.
- Website terasa personal.
- Pesan dukungan terasa tulus.
- Unsur romantis terasa subtle.
- Tidak terasa seperti template ucapan ulang tahun/Valentine.
- Website tetap relevan setelah interview selesai.

---

# 27. MVP

### Must Have

- Hero
- Personal message
- 3 reminders
- Countdown
- Final message
- Responsive mobile
- Smooth animations
- Post-interview state

### Should Have

- Background music
- Grain effect
- Ambient particles
- Open Graph image

### Nice to Have

- Easter egg
- Interactive letter
- Custom cursor desktop
- Subtle parallax
- Dynamic sunrise/sunset background

---

# 28. Final Emotional Flow

Secara keseluruhan website harus terasa seperti:

> **"Aku nggak tahu apa yang akan terjadi besok.**
>
> **Tapi sebelum kamu masuk ke ruangan itu,**
>
> **aku cuma ingin kamu tahu bahwa ada seseorang yang percaya sama kamu."**

Dan website ditutup dengan:

> **Good luck, Ica.**
>
> **Go get it. ❤️**