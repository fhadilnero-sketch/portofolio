# Product Requirements Document (PRD)
## Aplikasi Web Portofolio — Hariz

---

## 1. Ringkasan Proyek

**Nama Produk:** Portofolio Web Hariz  
**Tipe Produk:** Aplikasi Web Statis (Single Page Application)  
**Tujuan:** Menampilkan profil pribadi, keahlian di bidang pemrograman & teknologi, pengalaman proyek, dan informasi kontak kepada publik (recruiter, kolaborator, klien).  
**Target Pengguna:** Recruiter, developer lain, klien potensial, dan siapapun yang ingin mengenal Hariz secara profesional.

---

## 2. Profil Pemilik

| Atribut         | Detail                              |
|-----------------|-------------------------------------|
| **Nama**        | Hariz                               |
| **Bidang**      | Web Development / Computer Science  |
| **Minat Utama** | Coding, membangun website, teknologi|
| **Bahasa**      | Indonesia, Inggris (pasif)          |

---

## 3. Tujuan & Sasaran

- Memberikan kesan profesional kepada siapapun yang mengunjungi portofolio.
- Menampilkan keahlian teknis secara visual dan informatif.
- Mendokumentasikan pengalaman membangun website.
- Mempermudah orang lain menghubungi Hariz.
- Memperlihatkan foto diri agar pengunjung lebih mengenal secara personal.

---

## 4. Fitur & Section Utama

### 4.1 Hero / Landing Section
- Foto profil Hariz (ukuran besar, tampil di tengah atau sisi kiri).
- Nama lengkap dengan animasi teks (typewriter effect).
- Tagline singkat, contoh: *"Passionate Web Developer & Problem Solver"*.
- Tombol CTA: **"Lihat Portofolio"** dan **"Hubungi Saya"**.
- Background modern (gradient atau partikel animasi).

### 4.2 Tentang Saya (About Me)
- Foto diri (berbeda pose atau sama dengan hero, opsional).
- Paragraf deskripsi diri:
  - Siapa Hariz.
  - Hobi utama: coding dan membangun website.
  - Motivasi belajar ilmu komputer.
  - Kepribadian singkat (pekerja keras, suka tantangan teknis, dll).
- Informasi dasar:
  - Nama: Hariz
  - Bidang: Web Development
  - Status: Pelajar / Developer Muda
  - Domisili: Indonesia
  - Email: *(diisi sesuai data asli)*
  - GitHub: *(link GitHub jika ada)*

### 4.3 Keahlian (Skills)
Ditampilkan dengan progress bar, badge, atau card per kategori.

#### Frontend Development
- HTML5
- CSS3 / Tailwind CSS / Bootstrap
- JavaScript (ES6+)
- React.js *(jika sudah dipelajari)*

#### Backend Development
- Node.js / Express.js *(jika relevan)*
- PHP (dasar) *(jika relevan)*
- Python (dasar) *(jika relevan)*

#### Database
- MySQL
- SQLite *(jika relevan)*

#### Tools & Lainnya
- Git & GitHub
- VS Code
- Command Line / Terminal
- Responsive Web Design
- Basic UI/UX Principles

> **Catatan:** Tingkat keahlian (Pemula / Menengah / Mahir) ditampilkan secara visual per skill.

### 4.4 Pengalaman & Proyek (Experience / Projects)
Ditampilkan dalam bentuk kartu (card grid) dengan detail:

| # | Nama Proyek | Deskripsi | Teknologi | Tahun |
|---|-------------|-----------|-----------|-------|
| 1 | **Website Profil Pribadi** | Website statis pertama untuk menampilkan data diri dan hobi. | HTML, CSS, JavaScript | 2023 |
| 2 | **Website Toko Sederhana** | Halaman depan toko online sederhana dengan tampilan produk. | HTML, CSS, Bootstrap | 2023 |
| 3 | **Aplikasi To-Do List** | Aplikasi manajemen tugas dengan fitur tambah, hapus, dan tandai selesai. | HTML, CSS, JavaScript | 2024 |
| 4 | **Landing Page Bisnis** | Landing page responsif untuk bisnis lokal dengan form kontak. | HTML, Tailwind CSS, JS | 2024 |
| 5 | **Portofolio Web Interaktif** | Proyek ini — portofolio pribadi dengan animasi dan desain modern. | HTML, CSS, JS / React | 2025 |

> **Catatan untuk Developer:** Tambahkan screenshot atau live demo link untuk setiap proyek jika tersedia.

### 4.5 Foto / Galeri (Photo Section)
- **Foto Profil Resmi:** Foto formal atau semi-formal Hariz.
- **Foto Aktivitas Coding:** Foto saat bekerja di depan laptop/komputer.
- **Foto Proyek:** Screenshot hasil website yang pernah dibuat (opsional).
- Layout: Grid 2–3 kolom dengan efek hover zoom.
- Caption singkat di setiap foto.

### 4.6 Kontak (Contact)
- Form kontak sederhana:
  - Nama
  - Email
  - Pesan
  - Tombol Kirim
- Informasi kontak langsung:
  - Email
  - GitHub
  - LinkedIn *(jika ada)*
  - Instagram *(opsional)*
- Peta lokasi kota domisili *(opsional, pakai Google Maps embed)*.

### 4.7 Footer
- Nama & tagline singkat.
- Link navigasi cepat.
- Ikon sosial media.
- Copyright: `© 2025 Hariz. All rights reserved.`

---

## 5. Desain & UI/UX

| Aspek             | Ketentuan                                                      |
|-------------------|----------------------------------------------------------------|
| **Tema Warna**    | Dark mode modern (hitam/abu gelap + aksen biru/cyan/ungu)     |
| **Font**          | Google Fonts — `Inter` untuk body, `Poppins` untuk heading    |
| **Ikon**          | Font Awesome atau Lucide Icons                                 |
| **Animasi**       | Scroll reveal, typewriter effect, hover effect pada kartu     |
| **Responsif**     | Mobile-first, tampil baik di HP, tablet, dan desktop          |
| **Aksesibilitas** | Kontras warna memadai, alt-text pada semua gambar             |

---

## 6. Teknologi yang Digunakan

| Layer       | Teknologi                          |
|-------------|------------------------------------|
| Markup      | HTML5                              |
| Styling     | CSS3 + Tailwind CSS atau Bootstrap |
| Interaksi   | JavaScript (Vanilla atau React)    |
| Animasi     | AOS.js / GSAP / CSS Transitions   |
| Font        | Google Fonts                       |
| Ikon        | Font Awesome / Lucide              |
| Deploy      | GitHub Pages / Netlify / Vercel    |

---

## 7. Struktur File Proyek

```
portofolio-hariz/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg        ← Foto profil utama
│   │   ├── coding.jpg         ← Foto aktivitas coding
│   │   └── projects/          ← Screenshot proyek
│   └── icons/
├── README.md
└── prd.md
```

---

## 8. Halaman & Navigasi

```
[ Home ] [ Tentang Saya ] [ Keahlian ] [ Proyek ] [ Foto ] [ Kontak ]
```

- Navigasi sticky di atas (fixed navbar).
- Smooth scroll antar section.
- Hamburger menu untuk tampilan mobile.

---

## 9. Konten yang Perlu Disiapkan

- [ ] Foto profil resolusi tinggi (min. 500×500px)
- [ ] Foto aktivitas coding
- [ ] Screenshot proyek-proyek yang pernah dibuat
- [ ] Email aktif untuk form kontak
- [ ] Link GitHub (jika ada)
- [ ] Link LinkedIn (jika ada)
- [ ] Deskripsi singkat masing-masing proyek

---

## 10. Milestone Pengembangan

| Fase | Kegiatan                                      | Estimasi |
|------|-----------------------------------------------|----------|
| 1    | Setup proyek, struktur HTML dasar             | 1 hari   |
| 2    | Desain & styling (CSS/Tailwind)               | 2–3 hari |
| 3    | Konten: About, Skills, Projects, Photo        | 2 hari   |
| 4    | Animasi & interaktivitas (JS)                 | 1–2 hari |
| 5    | Testing responsif (mobile/tablet/desktop)     | 1 hari   |
| 6    | Deploy ke GitHub Pages / Netlify              | 1 hari   |
| **Total** |                                          | **~9–10 hari** |

---

## 11. Kriteria Sukses

- Website tampil sempurna di semua ukuran layar.
- Semua section terisi konten yang akurat dan menarik.
- Foto profil dan foto aktivitas tampil dengan baik.
- Form kontak berfungsi (minimal membuka email client).
- Loading cepat (< 3 detik di koneksi normal).
- Desain memberikan kesan profesional dan modern.

---

*Dokumen ini dibuat sebagai panduan pengembangan aplikasi web portofolio milik Hariz.*  
*Versi: 1.0 | Tanggal: Mei 2025*
