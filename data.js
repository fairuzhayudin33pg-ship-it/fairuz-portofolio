/* =====================================================
   DATA.JS — TEMPAT UTAMA UNTUK MENGEDIT ISI WEBSITE
   Aturan: edit hanya teks di dalam tanda kutip "..."
   Jangan hapus tanda kutip, koma (,), kurung { } atau [ ].
   Kosongkan ("") jika belum ada datanya.
   ===================================================== */
const siteData = {
  brand: "FAIRUZ.DEV",
  name: "Fairuz Al Hayudin",
  role: "Game Programmer & Developer",
  pageTitle: "Fairuz Al Hayudin | Game Programmer",

  // Menu navigasi: target = id bagian di index.html (jangan diubah)
  nav: [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Certificates", target: "certificates" },
    { label: "Contact", target: "contact" }
  ],

  hero: {
    title: "Fairuz Al Hayudin.",
    description: "Membangun pengalaman digital yang interaktif lewat game unity 2D Dan 3D beserta perangkat lunak",
    primaryButton: "Explore My Projects",
    secondaryButton: "Contact Me"
  },

  about: {
    title: "About Me",
    photo: "assets/profile/Profil.jpeg",
    photoAlt: "Portrait of Fairuz Al Hayudin",
    paragraphs: [
      "I'm a Game Developer / Game Progammer A vocational high school (SMK) student specializing in Game Development with a strong interest in the field. Experienced in using Unity and C# to create simple gameplay, perform debugging, and build interactive applications. Proficient in the fundamentals of HTML5, CSS, and C#, with practical experience using Blender and Visual Studio Code. Capable of working effectively within a team, communicating well, managing time efficiently, and always enthusiastic about learning new technologies and taking on new challenges.",
    ],
    focus: ["Pendidikan: SMK TELKOM MALANG", "Tujuan Karier: Game Developer/Software Development", "Minat: Game Development,Web Development", "Lokasi: Malang,Jawa Timur",]
  },

  skills: {
    title: "Skills & Technologies",
    items: [
      { icon: "U",   name: "Unity",               description: "Intermediate." },
      { icon: "U",   name: "HTML",               description: "Intermediate." },
      { icon: "C#",  name: "C#",                  description: "Intermediate." },
      { icon: "2D",  name: "2D Game Development", description: "Intermediate." },
      { icon: "3D",  name: "3D Game Development", description: "Intermediate." },
      { icon: "⚙",   name: "Gameplay Mechanics",  description: "Basic." },
      { icon: "🐞",  name: "Problem Solving",     description: "Advanced." },
      { icon: "Git", name: "Communication",        description: "Intermediate." },
      { icon: "🐞",  name: "Team Work",           description: "Advanced." },
      { icon: "Git", name: "Public Speaking",     description: "Intermediate." }
    ]
  },

  projects: {
    title: "Projects",
    // Tambah proyek: salin satu blok { ... }, tempel setelah koma, lalu ganti isinya.
    items: [
      {
        title: "Adventure Guest",
        category: "Jump And Run Simulation",
        description: "A high-speed arcade survival game in which players control the main character, striving to survive an onslaught of homing rockets. Players must move with agility, dodge lethal projectiles, and accumulate as many points as possible across various levels, each featuring unique difficulty settings and specific objectives..",
        engine: "Unity",
        language: "C#",
        image: "assets/projects/Project1.png",
        features: ["Aircraft Controls", "Aircraft Movement", "Interactive Gameplay"],
        demoUrl: "",
        sourceUrl: ""
      },
      {
        title: "Ghost Tricker Blitz",
        category: "Action Game",
        description: "A high-intensity, time-attack maze survival game in which players must navigate through chilling, labyrinthine corridors to collect as many points as possible before time runs out—all while staying on the move to evade ghostly entities that patrol the area dynamically.",
        engine: "Unity",
        language: "C#",
        image: "assets/projects/Project2.png",
        features: ["Escaping Pursuing Enemies", "Collecting Points", "Survival Gameplay"],
        demoUrl: "",
        sourceUrl: ""
      },
      {
        title: "Syringge Shooter",
        category: "First-Person Shooter",
        description: "An action-arcade shooter game in which players control a syringe to eradicate waves of dangerous germs and microbes. Players must act quickly, firing at approaching germs before they collide with the player, all while seizing opportunities to collect health items (extra lives) that drift among the swarms of enemies.",
        engine: "Unity",
        language: "C#",
        image: "assets/projects/Project3.png",
        features: ["FPS Gameplay Mechanics", "Interactive Combat Systems"],
        demoUrl: "",
        sourceUrl: ""
      },
      {
        title: "Flight Simulator",
        category: "Flight Dynamics",
        description: "A realistic flight simulation game that offers the experience of piloting an aircraft, featuring precise aerodynamic physics, responsive navigation controls, and navigational challenges across diverse weather conditions and environmental terrains.",
        engine: "Unity",
        language: "C#",
        image: "assets/projects/Project4.png",
        features: ["FPS Gameplay Mechanics", "Interactive Combat Systems"],
        demoUrl: "",
        sourceUrl: ""
      },
      {
        title: "Car Simulator",
        category: "Driving Dynamics",
        description: "In Car Simulator, players take on the role of a driver, operating a vehicle across various road scenarios. The game prioritizes authentic control mechanics, combining accurate vehicle physics with responsive steering.",
        engine: "Unity",
        language: "C#",
        image: "assets/projects/Project5.png",
        features: ["FPS Gameplay Mechanics", "Interactive Combat Systems"],
        demoUrl: "",
        sourceUrl: ""
      }
    ]
  },

  // SERTIFIKAT — isi hanya sertifikat yang benar-benar kamu miliki.
  // Tambah sertifikat: salin satu blok { ... } di bawah (hapus tanda // di depannya), lalu isi.
  certificates: {
    title: "Certificates",
    emptyText: "Certificates will be added soon.",   // tampil jika daftar items masih kosong
    items: [
       {
         title: "Nama Sertifikat",
         issuer: "Penerbit / Lembaga",
         date: "2026",
         description: "Penjelasan singkat (opsional).",
         image: "assets/certificates/Sertifikasi.jpg",
         credentialUrl: ""    // link verifikasi (opsional)
       }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      { title: "Concept & Planning",    description: "Defining the game idea, goals, and core mechanics." },
      { title: "Gameplay Programming",  description: "Implementing mechanics and systems in Unity with C#." },
      { title: "Testing & Debugging",   description: "Playtesting, finding bugs, and fixing them." },
      { title: "Polish & Improvement",  description: "Refining gameplay feel and overall quality." }
    ]
  },

  contact: {
    title: "Have a Game Idea? Let's Build It.",
    text: "Feel free to reach out for collaboration or project discussions.",
    // Isi "url" dengan link lengkap. Kosong = tampil sebagai "Not set yet".
    // Email: tulis alamat email saja di "value"; link mailto dibuat otomatis.
    links: [
      { label: "Email",     value: "",  url: "", isEmail: true },
      { label: "GitHub",    value: "",  url: "" },
      { label: "LinkedIn",  value: "",  url: "" },
      { label: "Instagram", value: "",  url: "" }
    ]
  },

  footer: {
    text: "Fairuz Al Hayudin. All rights reserved.",
    year: 2026
  }
};
