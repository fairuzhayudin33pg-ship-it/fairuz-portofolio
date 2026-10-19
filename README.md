# Panduan Website Portofolio – Fairuz Al Hayudin

Panduan ini ditulis untuk pemula. **Hampir semua perubahan cukup dilakukan di satu file: `data.js`.**

## Isi folder

| File / Folder | Fungsinya | Perlu kamu edit? |
|---|---|---|
| `data.js` | Semua isi website (teks, proyek, kontak) | **Ya, sering** |
| `style.css` | Tampilan dan warna | Hanya bagian warna di paling atas |
| `index.html` | Kerangka halaman | Tidak perlu |
| `script.js` | Membuat halaman otomatis dari `data.js` | Tidak perlu |
| `assets/profile/` | Foto profil | Taruh foto di sini |
| `assets/projects/` | Screenshot game | Taruh gambar di sini |

**Istilah singkat:** *folder* = map berisi file. *Ekstensi* = akhiran nama file (`.png`, `.js`). *Teks di dalam tanda kutip* `"seperti ini"` = bagian yang boleh kamu ganti.

**Aturan emas saat mengedit `data.js`:** ganti hanya teks di dalam `"..."`. Jangan hapus tanda kutip, koma `,`, kurung `{ }` dan `[ ]`.

---

## 1. Membuka folder di Visual Studio Code
1. Install VS Code dari https://code.visualstudio.com
2. Ekstrak ZIP `Fairuz-Portfolio` (klik kanan → Extract All).
3. Buka VS Code → menu **File → Open Folder** → pilih folder `Fairuz-Portfolio`.
4. Di panel kiri kamu akan melihat `index.html`, `data.js`, dan lainnya.

## 2. Menjalankan website
**Cara mudah:** klik dua kali `index.html` di File Explorer, website terbuka di browser.

**Cara lebih nyaman (Live Server):**
1. Di VS Code buka menu Extensions (ikon kotak-kotak), cari **Live Server**, klik Install.
2. Klik kanan `index.html` → **Open with Live Server**.
3. Setiap kali kamu menyimpan file (`Ctrl + S`), browser otomatis memuat ulang.

## 3. Mengganti nama dan deskripsi profil
Buka `data.js`.

Sebelum:
```js
name: "Fairuz Al Hayudin",
role: "Game Programmer & Developer",
```
Sesudah (contoh):
```js
name: "Fairuz Al Hayudin",
role: "Unity Developer",
```
Deskripsi singkat ada di `hero: { description: "..." }`. Teks "About Me" ada di `about: { paragraphs: [ "...", "..." ] }`. Satu teks dalam tanda kutip = satu paragraf.

## 4. Mengganti foto profil
1. Salin fotomu ke folder `assets/profile/`, misalnya `fairuz.jpg`.
2. Di `data.js`, bagian `about`:

Sebelum: `photo: "assets/profile/profile.svg",`
Sesudah: `photo: "assets/profile/fairuz.jpg",`

Gunakan foto persegi (rasio 1:1) agar rapi. Nama file harus sama persis, termasuk huruf besar/kecil.

## 5. Menambah proyek game baru
1. Buka `data.js`, cari bagian `projects: { items: [ ... ] }`.
2. **Salin satu blok proyek** dari `{` sampai `}`.
3. Tempel setelah blok terakhir, **tambahkan koma `,` di antara dua blok**.
4. Ganti isinya. Selesai: kartu baru muncul otomatis, tanpa mengedit HTML.

Contoh blok baru:
```js
{
  title: "Syringe Shooter",
  category: "2D Health Game",
  description: "A health-themed game developed using Unity.",
  engine: "Unity",
  language: "C#",
  image: "assets/projects/syringe-shooter.png",
  features: ["Player Movement", "Shooting Mechanics", "Virus Enemies"],
  demoUrl: "",
  sourceUrl: ""
}
```
Penting: tulis hanya fitur yang benar-benar ada di gamemu.

## 6. Menghapus proyek
Hapus satu blok `{ ... }` utuh beserta komanya. Pastikan antar blok yang tersisa tetap dipisah koma, dan blok terakhir tidak perlu koma setelahnya.

## 7. Mengganti screenshot game
1. Simpan gambar di `assets/projects/` (disarankan rasio 16:9, format `.png` / `.jpg`).
2. Ubah `image` pada proyek.

Sebelum: `image: "assets/projects/flight-simulator.png",`
Sesudah: `image: "assets/projects/flight-simulator-v2.jpg",`

Selama gambar belum ada, website menampilkan gambar pengganti "Screenshot belum tersedia".

## 8. Mengisi link demo dan GitHub
Link harus diawali `https://`.

Sebelum: `demoUrl: "", sourceUrl: ""`
Sesudah:
```js
demoUrl: "https://fairuz.itch.io/ghost-tricker-blitz",
sourceUrl: "https://github.com/namakamu/ghost-tricker-blitz"
```
Jika kosong, tombol **Play Game** / **Source Code** di jendela detail tampil abu-abu (tidak bisa diklik).

## 9. Mengganti warna website
Buka `style.css`, lihat bagian paling atas `:root { ... }`.

Sebelum: `--accent-color: #38bdf8;` (biru neon)
Sesudah: `--accent-color: #22c55e;` (hijau)

Variabel penting: `--bg-color` (latar), `--surface-color` (kartu), `--accent-color` dan `--accent-2` (aksen), `--text-color` (teks), `--muted-color` (teks sekunder). Kode warna bisa dicari lewat "color picker" di Google.

## 10. Mengubah email dan media sosial
Di `data.js`, bagian `contact: { links: [...] }`.

Sebelum: `{ label: "Email", value: "", url: "", isEmail: true },`
Sesudah: `{ label: "Email", value: "emailkamu@gmail.com", url: "", isEmail: true },`

Untuk GitHub/LinkedIn/Instagram isi `url`:
`{ label: "GitHub", value: "", url: "https://github.com/usernamekamu" },`

Yang masih kosong tampil sebagai "Not set yet".

## 11. Gambar tidak muncul
- Cek nama file **sama persis** (huruf besar/kecil, ekstensi `.png` vs `.jpg`).
- Cek file ada di folder yang benar (`assets/projects/`).
- Hindari spasi pada nama file; pakai tanda strip: `ghost-tricker-blitz.png`.
- Pastikan `image: "..."` tertulis dalam tanda kutip.

## 12. Perubahan tidak terlihat
- Pastikan file sudah disimpan (`Ctrl + S`, titik putih di tab VS Code harus hilang).
- Refresh paksa browser: `Ctrl + F5`.
- Tekan `F12` → tab **Console**. Jika ada tulisan merah, biasanya ada koma atau tanda kutip yang hilang di `data.js` (perhatikan nomor barisnya).
- Pastikan kamu mengedit file di folder yang sama dengan yang dibuka browser.

## 13. Backup sebelum mengedit
Salin seluruh folder `Fairuz-Portfolio` (Ctrl + C, Ctrl + V), ubah namanya menjadi `Fairuz-Portfolio-backup-tanggal`. Jika ada yang rusak, kembalikan dari salinan itu.

## 14. Mengunggah ke hosting
Website ini statis, jadi mudah di-hosting gratis.

**Netlify Drop (paling mudah):**
1. Buka https://app.netlify.com/drop dan buat akun.
2. Seret folder `Fairuz-Portfolio` ke halaman tersebut.
3. Kamu mendapat alamat website yang bisa dibagikan.

**GitHub Pages:**
1. Buat repository baru di GitHub, unggah semua isi folder (file `index.html` harus di lokasi paling atas).
2. Buka **Settings → Pages**, pilih branch `main` dan folder `/ (root)`, lalu Save.
3. Tunggu beberapa menit; alamatnya `https://usernamekamu.github.io/nama-repo`.

Setiap kali kamu mengubah file, unggah ulang file yang berubah.

## 15. Menambah sertifikat
1. Simpan foto/scan sertifikat di `assets/certificates/` (contoh: `unity-basic.jpg`).
2. Buka `data.js`, cari bagian `certificates: { items: [ ... ] }`.
3. Hapus tanda `//` di depan blok contoh, lalu isi datanya. Untuk sertifikat kedua dan seterusnya, salin blok dan pisahkan dengan koma.

Sebelum (masih kosong, semua baris diawali `//`):
```js
items: 
  // {
  //   title: "Nama Sertifikat",
```
Sesudah (contoh format; isi dengan sertifikatmu yang asli):
```js
items: [
  {
    title: "Nama Sertifikat Kamu",
    issuer: "Nama Penerbit",
    date: "2026",
    description: "Penjelasan singkat (boleh dikosongkan).",
    image: "assets/certificates/nama-file.jpg",
    credentialUrl: ""
  }
]
```
`credentialUrl` adalah link verifikasi online (opsional, harus diawali `https://`). Jika kosong, tombol Verify tidak muncul.

Selama daftar kosong, website menampilkan tulisan "Certificates will be added soon." (ubah di `emptyText`). Untuk menghapus sertifikat, hapus satu blok `{ ... }`. Untuk menyembunyikan menu Certificates, hapus baris `{ label: "Certificates", ... }` di bagian `nav` pada `data.js`.

---
Selamat berkarya!
