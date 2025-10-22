(function () {
  const d = document;
  const themeBtn = d.getElementById("theme-toggle");
  const setDark = (on) => {
    if (on) { d.documentElement.classList.add("dark"); localStorage.setItem("phu-theme","dark"); }
    else { d.documentElement.classList.remove("dark"); localStorage.setItem("phu-theme","light"); }
  };
  setDark(localStorage.getItem("phu-theme") === "dark");
  themeBtn.onclick = () => setDark(!d.documentElement.classList.contains("dark"));

  const berita = [
    { title: "Persiapan Haji 2026", date: "2025-10-18", tag: "Rilis" },
    { title: "Bimbingan Manasik Gelombang I Dibuka", date: "2025-10-12", tag: "Kegiatan" },
  ];
  const pengumuman = [
    { title: "Rekrutmen Petugas Haji 2026", date: "2025-10-20" },
    { title: "Perubahan Jadwal Manasik Waru", date: "2025-10-15" },
  ];
  const jadwal = [
    { tgl: "2025-10-25", kegiatan: "Manasik Akbar", lokasi: "Gedung Islamic Center", penanggung: "Seksi PHU" },
    { tgl: "2025-10-28", kegiatan: "Verifikasi Paspor", lokasi: "Kemenag Pamekasan", penanggung: "Layanan Dokumen" },
  ];
  const layanan = [
    { title: "Pendaftaran Haji Reguler", tag: "Reguler" },
    { title: "Pembinaan Manasik", tag: "Pembinaan" },
    { title: "SISKOHAT", tag: "Digital" },
  ];

  const beritaList = d.getElementById("berita-list");
  beritaList.innerHTML = berita.map(b => `<div class='card'><span class='badge'>${b.tag}</span><h4>${b.title}</h4><p>${new Date(b.date).toLocaleDateString('id-ID')}</p></div>`).join('');

  const pengumumanList = d.getElementById("pengumuman-list");
  pengumumanList.innerHTML = pengumuman.map(p => `<div class='card'><h4>${p.title}</h4><p>${new Date(p.date).toLocaleDateString('id-ID')}</p></div>`).join('');

  const layananGrid = d.getElementById("layanan-grid");
  layananGrid.innerHTML = layanan.map(l => `<div class='card'><h4>${l.title}</h4><span class='badge'>${l.tag}</span></div>`).join('');

  const bulanSel = d.getElementById("bulan");
  const jadwalBody = d.getElementById("jadwal-body");
  function renderJadwal() {
    const m = bulanSel.value;
    const rows = jadwal.filter(j => j.tgl.startsWith(m)).map(j => `<tr><td>${new Date(j.tgl).toLocaleDateString('id-ID')}</td><td>${j.kegiatan}</td><td>${j.lokasi}</td><td>${j.penanggung}</td></tr>`).join('');
    jadwalBody.innerHTML = rows || "<tr><td colspan='4'>Tidak ada agenda bulan ini</td></tr>";
  }
  bulanSel.onchange = renderJadwal;
  renderJadwal();

  const form = d.getElementById("contact-form");
  form.onsubmit = (e) => { e.preventDefault(); alert("Pesan Anda telah dikirim (demo)."); form.reset(); };
})();
