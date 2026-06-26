(function () {
  "use strict";

  const translations = {
  "Home": "Beranda",
  "About": "Tentang Saya",
  "Skill": "Keahlian",
  "Experience": "Pengalaman",
  "Portfolio": "Portofolio",
  "Education": "Pendidikan",
  "Achievement": "Pencapaian",
  "Etc": "Lainnya",
  "Etc.": "Lainnya",
  "Download CV": "Unduh CV",
  "CV.Eng": "CV Inggris",
  "CV.Ina": "CV Indonesia",
  "Programming Languages & Tools": "Bahasa Pemrograman & Perangkat",
  "Work Experience & Internship": "Pengalaman Kerja & Magang",
  "Here are some of my projects related to Data Analysis, Web Development, and Visualization.": "Berikut beberapa proyek saya terkait Analisis Data, Pengembangan Web, dan Visualisasi.",
  "Selected projects in data engineering, business intelligence, dashboard development, analytics, and software systems.": "Pilihan proyek dalam data engineering, business intelligence, pengembangan dashboard, analitik, dan sistem perangkat lunak.",
  "Data & Business Intelligence Engineer / Dashboard Developer": "Data & Business Intelligence Engineer / Dashboard Developer",
  "Turning business data into reliable systems, automated workflows, interactive dashboards, and actionable insights.": "Mengubah data bisnis menjadi sistem yang andal, workflow otomatis, dashboard interaktif, dan insight yang dapat ditindaklanjuti.",
  "I combine business analysis and technical implementation to improve data consistency, visibility, traceability, and decision support.": "Saya memadukan analisis bisnis dan implementasi teknis untuk meningkatkan konsistensi, visibilitas, ketertelusuran data, serta dukungan pengambilan keputusan.",
  "I am a Data & Business Intelligence Engineer with experience in competitor research, Oracle database management, SQL development, PHP-based APIs, workflow automation, and enterprise dashboard development. I work across the complete data lifecycle—from collecting and validating operational data, designing database structures, and applying business rules, to presenting reliable insights through interactive dashboards for operational and management users.": "Saya adalah Data & Business Intelligence Engineer dengan pengalaman dalam riset kompetitor, pengelolaan database Oracle, pengembangan SQL, API berbasis PHP, otomatisasi workflow, dan pengembangan dashboard enterprise. Saya bekerja pada keseluruhan siklus data—mulai dari mengumpulkan dan memvalidasi data operasional, merancang struktur database, menerapkan aturan bisnis, hingga menyajikan insight yang andal melalui dashboard interaktif untuk pengguna operasional dan manajemen.",
  "Birthday:": "Tanggal Lahir:",
  "Blog:": "Blog:",
  "Phone:": "Telepon:",
  "City:": "Kota:",
  "Age:": "Usia:",
  "Degree:": "Pendidikan:",
  "Email:": "Email:",
  "Current Activities:": "Aktivitas Saat Ini:",
  "Bachelor Degree of Informatics Engineering": "Sarjana Teknik Informatika",
  "Building enterprise dashboards, managing Oracle-based data workflows, and developing business intelligence solutions": "Mengembangkan dashboard enterprise, mengelola workflow data berbasis Oracle, dan membangun solusi business intelligence",
  "Job Desc:": "Tanggung Jawab:",
  "Jakarta, Indonesia — APR 2025 - Present": "Jakarta, Indonesia — APR 2025 - Sekarang",
  "Supports business analysis, competitor research, data management, dashboard development, and workflow automation for operational and management needs.": "Mendukung kebutuhan analisis bisnis, riset kompetitor, pengelolaan data, pengembangan dashboard, serta otomasi workflow untuk kebutuhan operasional dan manajemen.",
  "Conduct competitor research and market analysis to support business strategy and product positioning.": "Melakukan riset kompetitor dan analisis pasar untuk mendukung strategi bisnis dan positioning produk.",
  "Manage and validate business, operational, product, and competitor data from multiple sources.": "Mengelola serta memvalidasi data bisnis, operasional, produk, dan kompetitor dari berbagai sumber.",
  "Develop Oracle SQL queries for data extraction, transformation, reconciliation, and reporting.": "Mengembangkan query Oracle SQL untuk ekstraksi, transformasi, rekonsiliasi, dan pelaporan data.",
  "Develop PHP-based APIs, application workflows, and enterprise monitoring dashboards.": "Mengembangkan API berbasis PHP, workflow aplikasi, dan dashboard monitoring enterprise.",
  "Develop KPI, SLA, project monitoring, and product portfolio dashboards.": "Mengembangkan dashboard KPI, SLA, monitoring proyek, dan portofolio produk.",
  "Translate business requirements into database structures, business rules, workflows, and dashboard components.": "Menerjemahkan kebutuhan bisnis menjadi struktur database, aturan bisnis, workflow, dan komponen dashboard.",
  "Support ad-hoc analysis, benchmarking, technical documentation, and management decision-making.": "Mendukung analisis ad-hoc, benchmarking, dokumentasi teknis, serta pengambilan keputusan manajemen.",
  "Working as a partner of TELKOM company, by providing performance data support to officers and managers.": "Bekerja sebagai mitra TELKOM dengan memberikan dukungan data kinerja kepada officer dan manajer.",
  "Working as a partner of TELKOMSEL company, by providing performance data support to officers and managers.": "Bekerja sebagai mitra TELKOMSEL dengan memberikan dukungan data kinerja kepada officer dan manajer.",
  "Working as a partner of TELKOM Group company, by providing performance data support to managers and senior managers.": "Bekerja sebagai mitra TELKOM Group dengan memberikan dukungan data kinerja kepada manajer dan senior manajer.",
  "Working as a partner of TELKOM Group company, by providing reporting support to managers and senior managers.": "Bekerja sebagai mitra TELKOM Group dengan memberikan dukungan pelaporan kepada manajer dan senior manajer.",
  "Working as a partner of TELKOM Group company, by providing information services such as company address data and telephone numbers.": "Bekerja sebagai mitra TELKOM Group dengan menyediakan layanan informasi seperti data alamat perusahaan dan nomor telepon.",
  "Internship Field Work Practice as Administrative Correspondence at DEPKUMHAM.": "Praktik Kerja Lapangan sebagai administrasi korespondensi di DEPKUMHAM.",
  "Internship Field Work Practice as Sales at GIANT HYPERMART.": "Praktik Kerja Lapangan sebagai tenaga penjualan di GIANT HYPERMART.",
  "Responsible for collecting, managing, and reporting Sales, Revenue, Line In Service (LIS), and Churn data from the level BUD to the TELKOM regional level, particularly in the Enterprise segment, on a regular basis in accordance with established KPI targets.": "Bertanggung jawab mengumpulkan, mengelola, dan melaporkan data Sales, Revenue, Line In Service (LIS), dan Churn dari tingkat BUD hingga regional TELKOM, khususnya segmen Enterprise, secara berkala sesuai target KPI.",
  "Coordinate across sub-directorates and units in managing and synchronizing various data sources.": "Berkoordinasi lintas subdirektorat dan unit dalam pengelolaan serta sinkronisasi berbagai sumber data.",
  "Conduct comparative analysis of Telkom products and competitors, including querying and processing data using Oracle, SQL, and Python to generate accurate and structured data.": "Melakukan analisis perbandingan produk Telkom dan kompetitor, termasuk query dan pengolahan data menggunakan Oracle, SQL, dan Python untuk menghasilkan data yang akurat dan terstruktur.",
  "Remain vigilant for ad-hoc data requests from management and actively analyze, evaluate, and implement strategic interventions based on data findings to support business decision-making.": "Menangani kebutuhan data ad-hoc dari manajemen serta aktif menganalisis, mengevaluasi, dan menerapkan intervensi strategis berdasarkan temuan data untuk mendukung keputusan bisnis.",
  "Collect, manage data and report the performance of front liners (Grapary, 147, E-Care) weekly or monthly according to existing KPI targets.": "Mengumpulkan, mengelola, dan melaporkan kinerja frontliner (Grapari, 147, E-Care) secara mingguan atau bulanan sesuai target KPI.",
  "Create sales reports starting from the area level, region to the lowest level, namely the name of the TSEL Grapary region itself.": "Membuat laporan penjualan mulai dari tingkat area, regional, hingga unit Grapari TSEL.",
  "Create TNPS (Transactional Net Promoter Score) reports to explore customer needs issues.": "Membuat laporan TNPS (Transactional Net Promoter Score) untuk menggali kebutuhan dan permasalahan pelanggan.",
  "Standby if there is a data request needed by the Manager.": "Siap menangani permintaan data yang dibutuhkan manajer.",
  "Coordination related to management through various data resources, between sub-directorates and units.": "Berkoordinasi terkait pengelolaan berbagai sumber data antar-subdirektorat dan unit.",
  "Analyze and evaluate and intervene from everything that has been done.": "Menganalisis, mengevaluasi, dan melakukan tindak lanjut atas pekerjaan yang telah dilakukan.",
  "Collect data and create executive performance reports according to the specified KPI (Sales, Churn CAPS, Revenue, Collection, Add On CRL, Assurance, TNPS).": "Mengumpulkan data dan membuat laporan kinerja eksekutif sesuai KPI yang ditetapkan (Sales, Churn CAPS, Revenue, Collection, Add On CRL, Assurance, TNPS).",
  "Collect data and create Billing Process reports (BP-1 & BP-2) Telkom starting from regional and witel segmentation.": "Mengumpulkan data dan membuat laporan Billing Process (BP-1 & BP-2) Telkom mulai dari segmentasi regional hingga witel.",
  "Manage applications and collect data for business processes via PostgreSQL to update DAPROS (Data Prospects) which will later be consumed by CTB (Caring Territory Base) agents.": "Mengelola aplikasi dan data proses bisnis melalui PostgreSQL untuk memperbarui DAPROS (Data Prospects) yang digunakan oleh agen CTB (Caring Territory Base).",
  "Synergize and coordinate related to data management between sub-directorates and units from various data resources.": "Membangun sinergi dan koordinasi pengelolaan data antar-subdirektorat dan unit dari berbagai sumber.",
  "Standby if there is a data request needed by the Manager, OSM (Operation Senior Manager), and VP (Vice President).": "Siap menangani permintaan data dari Manager, OSM (Operation Senior Manager), dan VP (Vice President).",
  "Analyze, evaluate and intervene from everything that has been done.": "Menganalisis, mengevaluasi, dan melakukan tindak lanjut atas pekerjaan yang telah dilakukan.",
  "Collect data and create daily, weekly and monthly performance reports 147/108/107.": "Mengumpulkan data dan membuat laporan kinerja harian, mingguan, dan bulanan 147/108/107.",
  "Create business process flow.": "Membuat alur proses bisnis.",
  "Coordination related to solving cases in services if there are findings.": "Berkoordinasi dalam penyelesaian kasus layanan apabila terdapat temuan.",
  "Admin Web Knowledge Information System for Services Frontliner (147, Sosmed, Plasa).": "Mengelola Web Knowledge Information System untuk frontliner layanan (147, media sosial, dan Plasa).",
  "Standby if there is a request for data needed by the Manager": "Siap menangani permintaan data yang dibutuhkan manajer.",
  "Evaluate and intervene from everything that has been done.": "Mengevaluasi dan melakukan tindak lanjut atas pekerjaan yang telah dilakukan.",
  "Fully responsible for the performance of TL (Team Leader) and agents.": "Bertanggung jawab penuh atas kinerja TL (Team Leader) dan agen.",
  "Make attendance of team leaders and agents.": "Membuat rekap kehadiran team leader dan agen.",
  "Monitor, assess and motivate agents and Team Leaders in work performance to match existing KPI.": "Memantau, menilai, dan memotivasi agen serta Team Leader agar kinerja sesuai KPI.",
  "Coordinate with sales and book procurement parties according to existing stakeholders.": "Berkoordinasi dengan bagian sales dan pengadaan buku sesuai kebutuhan stakeholder.",
  "Make daily, weekly and monthly book distribution reports.": "Membuat laporan distribusi buku harian, mingguan, dan bulanan.",
  "Evaluation and discussion with the team.": "Melakukan evaluasi dan diskusi bersama tim.",
  "Scheduling Letters.": "Menjadwalkan surat.",
  "Indexing Incoming Letters.": "Mengindeks surat masuk.",
  "Forwarding Letters.": "Meneruskan surat.",
  "Distributing Letters.": "Mendistribusikan surat.",
  "Numbering Outgoing Letters.": "Memberikan nomor pada surat keluar.",
  "Recapitulating Employee Absences.": "Merekap absensi pegawai.",
  "Typing on a Computer.": "Mengetik menggunakan komputer.",
  "Typing with a Manual Machine.": "Mengetik menggunakan mesin ketik manual.",
  "Receiving Guests from Other Agencies.": "Menerima tamu dari instansi lain.",
  "Receiving Telephones.": "Menerima panggilan telepon.",
  "Checking the condition of expired goods or not.": "Memeriksa kondisi dan masa kedaluwarsa barang.",
  "Displaying goods to make them attractive.": "Menata barang agar tampil menarik.",
  "Conducting Stock Opname.": "Melakukan stock opname.",
  "Bachelor Degree —": "Gelar Sarjana —",
  "After graduating from vocational high school in 2010, I pursued my passion for technology by enrolling at STMIK Mercusuar, majoring in Information Technology (Teknik Informatika). During my studies, I built a strong foundation in computer science, software development, database management, and web programming. Throughout the program, I also developed several projects that combined both technical and analytical skills, which later strengthened my professional direction toward data analytics and software engineering.": "Setelah lulus dari sekolah menengah kejuruan pada 2010, saya melanjutkan minat di bidang teknologi dengan kuliah di STMIK Mercusuar, jurusan Teknik Informatika. Selama perkuliahan, saya membangun dasar yang kuat dalam ilmu komputer, pengembangan perangkat lunak, pengelolaan database, dan pemrograman web. Saya juga mengembangkan sejumlah proyek yang memadukan kemampuan teknis dan analitis, yang kemudian memperkuat arah profesional saya pada data analytics dan software engineering.",
  "Focused on PHP website creation, layout design, CRUD, and project implementation.": "Berfokus pada pembuatan website PHP, desain tata letak, CRUD, dan implementasi proyek.",
  "Studied Python, SQL, Excel, and C programming for data and software solutions.": "Mempelajari Python, SQL, Excel, dan pemrograman C untuk solusi data dan perangkat lunak.",
  "Comprehensive training in analytics, visualization, and reporting using Python, SQL, Tableau, and Excel.": "Pelatihan komprehensif dalam analitik, visualisasi, dan pelaporan menggunakan Python, SQL, Tableau, dan Excel.",
  "Learnt the fundamentals of front-end development and responsive design.": "Mempelajari dasar pengembangan front-end dan desain responsif.",
  "Graduated:": "Lulus:",
  "Completed:": "Selesai:",
  "INTEREST": "MINAT",
  "NON-ACADEMIC": "NONAKADEMIK",
  "ORGANIZATION": "ORGANISASI",
  "Read": "Membaca",
  "Photo": "Fotografi",
  "Music": "Musik",
  "Paint": "Melukis",
  "Film": "Film",
  "Adventure": "Petualangan",
  "Running": "Lari",
  "Hiking": "Mendaki",
  "All Rights Reserved": "Hak Cipta Dilindungi",
  "About this project": "Tentang proyek ini",
  "Loading…": "Memuat…",
  "Failed to load portfolio data.": "Gagal memuat data portofolio."
};
  const originalText = new WeakMap();
  let currentLanguage = localStorage.getItem("portfolio-language") || "en";

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          if (["SCRIPT", "STYLE", "CODE", "PRE"].includes(node.parentElement.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const trimmed = original.trim();
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];

      if (language === "id" && translations[trimmed]) {
        node.nodeValue = leading + translations[trimmed] + trailing;
      } else {
        node.nodeValue = original;
      }
    });
  }

  function updateHero(language) {
    const heroParagraph = document.querySelector("#home .container p");
    const typed = document.querySelector(".typed");
    if (heroParagraph) {
      const prefix = language === "id"
        ? heroParagraph.dataset.prefixId
        : heroParagraph.dataset.prefixEn;
      const firstNode = Array.from(heroParagraph.childNodes)
        .find(node => node.nodeType === Node.TEXT_NODE);
      if (firstNode && prefix) firstNode.nodeValue = prefix;
    }
    if (typed) {
      typed.setAttribute(
        "data-typed-items",
        language === "id" ? typed.dataset.typedId : typed.dataset.typedEn
      );
      if (typeof window.initPortfolioTyped === "function") {
        window.initPortfolioTyped();
      }
    }
  }

  function updateSkillContent(language) {
    document.querySelectorAll("[data-skill-heading-en]").forEach((el) => {
      el.textContent = language === "id" ? el.dataset.skillHeadingId : el.dataset.skillHeadingEn;
    });
    document.querySelectorAll("[data-skill-desc-en]").forEach((el) => {
      el.textContent = language === "id" ? el.dataset.skillDescId : el.dataset.skillDescEn;
    });
  }

  function updateButtons(language) {
    document.querySelectorAll(".lang-btn").forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setLanguage(language) {
    if (!["en", "id"].includes(language)) language = "en";
    currentLanguage = language;
    document.documentElement.lang = language;
    document.body.classList.add("language-transition");

    translateTextNodes(language);
    updateHero(language);
    updateSkillContent(language);
    updateButtons(language);
    localStorage.setItem("portfolio-language", language);

    window.setTimeout(() => {
      document.body.classList.remove("language-transition");
    }, 120);

    document.dispatchEvent(new CustomEvent("portfolioLanguageChanged", {
      detail: { language }
    }));
  }

  function calculateAge() {
    const birth = new Date(1992, 1, 6);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const beforeBirthday =
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
    if (beforeBirthday) age -= 1;
    const ageEl = document.getElementById("dynamic-age");
    if (ageEl) ageEl.textContent = String(age);
  }

  document.addEventListener("DOMContentLoaded", () => {
    calculateAge();
    document.querySelectorAll(".lang-btn").forEach(button => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });
    setLanguage(currentLanguage);
  });

  window.PortfolioI18n = {
    setLanguage,
    getLanguage: () => currentLanguage
  };
})();
