
const skillsData = [
    // ========== Programming ==========
    { category: "Programming", icon: "devicon-php-plain", name: "PHP", percent: 90 },
    { category: "Programming", icon: "devicon-javascript-plain", name: "JavaScript", percent: 90 },
    { category: "Programming", icon: "devicon-python-plain", name: "Python", percent: 80 },
    { category: "Programming", icon: "devicon-html5-plain", name: "HTML", percent: 90 },
  
    // ========== Frameworks ==========
    { category: "Framework", icon: "devicon-flutter-plain", name: "Flutter", percent: 80 },
    { category: "Framework", icon: "devicon-codeigniter-plain", name: "CodeIgniter", percent: 90 },
    { category: "Framework", name: "NodeJs", percent: 50, custom: "https://www.svgrepo.com/show/452075/node-js.svg" },
    { category: "Framework", name: "Vue Js", percent: 60, custom: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  
    // ========== Databases ==========
    { category: "Database", icon: "devicon-mysql-original", name: "MySQL", percent: 90 },
    { category: "Database", icon: "devicon-postgresql-plain colored", name: "Postgress", percent: 70 },
    { category: "Database", name: "Mongo DB", percent: 60, custom: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg" },
  
    // ========== DevOps ==========
    { category: "DevOps", icon: "devicon-docker-plain", name: "Docker", percent: 75 },
    { category: "DevOps", icon: "devicon-nginx-original", name: "Nginx", percent: 75 },
    { category: "DevOps", icon: "devicon-git-plain", name: "Git", percent: 85 },
    { category: "DevOps", icon: "devicon-proxmox-plain", name: "Proxmox", percent: 80 },
  
    // ========== Tools ==========
    { category: "Tools", icon: "devicon-vscode-plain", name: "VS Code", percent: 90 },
    { category: "Tools", name: "Postman", percent: 70, custom: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    { category: "Tools", name: "n8n", percent: 80, custom: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png" },
  
    // ========== System ==========
    { category: "System", name: "Linux", percent: 75, custom: "https://www.svgrepo.com/show/448236/linux.svg" },
    { category: "System", name: "Mac Os", percent: 85, custom: "https://upload.wikimedia.org/wikipedia/commons/2/22/MacOS_logo_%282017%29.svg" },
  
    // ========== Cloud ==========
    { category: "Cloud", name: "Google Cloud Platform", percent: 50, custom: "https://www.svgrepo.com/show/353805/google-cloud.svg" },
    { category: "Cloud", name: "Google Play Console", percent: 75, custom: "https://www.svgrepo.com/show/223032/playstore.svg" },
    { category: "Cloud", name: "App Store", percent: 70, custom: "https://www.svgrepo.com/show/353415/apple-app-store.svg" },
  ];
  
  
  const certificationData = [
    {
      pdf: "./assets/images/certification/pdf/Sertifikat Gemastik.pdf",
      img: "./assets/images/certification/image/Sertifikat Gemastik.png",
      category: "Competition Certificate",
      date: "2021-10-07",
      dateText: "Oct 07, 2021",
      title: "GEMASTIK 2021 Competition",
      desc: "1st place nationally in the Software Development division at GEMASTIK 2021, representing Lambung Mangkurat University."
    },
    {
      pdf: "./assets/images/certification/pdf/Sertifikat Flutter.pdf",
      img: "./assets/images/certification/image/Sertifikat Flutter.png",
      category: "Training Certificate",
      date: "2020-08-13",
      dateText: "Aug 13, 2020",
      title: "Mobile Development with Flutter – Inixindo",
      desc: "Mobile Development training using Flutter organized by Inixindo (2020)."
    },
    {
      pdf: "./assets/images/certification/pdf/Sertifikat Junior Web Developer.pdf",
      img: "./assets/images/certification/image/Sertifikat Junior Web Developer.png",
      category: "Training Certificate",
      date: "2021-07-14",
      dateText: "Jul 13, 2021",
      title: "Junior Web Developer – Digital Talent Scholarship (Kominfo)",
      desc: "Junior Web Developer training through the Vocational School Graduate Academy (DTS Kominfo) program in 2021."
    },
    {
      pdf: "./assets/images/certification/pdf/Sertifikat PHP Security And Safe Programing.pdf",
      img: "./assets/images/certification/image/Sertifikat PHP Security And Safe Programing.png",
      category: "Training Certificate",
      date: "2022-07-02",
      dateText: "Jul 02, 2022",
      title: "PHP Security & Safe Programming – Sinau Jogja",
      desc: "Training on PHP Security and secure programming practices organized by Sinau Jogja (2022)."
    },
    {
      pdf: "./assets/images/certification/pdf/Sertifikat Senior Programmer - Ahmad Juhdi20251119_16461043_0588.pdf",
      img: "./assets/images/certification/image/Sertifikat Senior Programmer - Ahmad Juhdi20251119_16461043_0588.png",
      category: "Training Certificate",
      date: "2025-11-21",
      dateText: "Nov 21, 2025",
      title: "Senior Programmer – Sinau Jogja",
      desc: "Senior Programming training organized by Sinau Jogja (2025)."
    },
    {
      pdf: "./assets/images/certification/pdf/sertifikat_course_261_221655_281222140722 DICODING Membuat  Aplikasi Backend Untuk Pemula.pdf",
      img: "./assets/images/certification/image/sertifikat_course_261_221655_281222140722 DICODING Membuat  Aplikasi Backend Untuk Pemula.png",
      category: "Training Certificate",
      date: "2022-12-28",
      dateText: "Dec 28, 2022",
      title: "Beginner Back-End Development – Dicoding",
      desc: "Introductory back-end development training through an official Dicoding Indonesia course (2022)."
    },
    {
      pdf: "./assets/images/certification/pdf/sertifikat_course_382_221655_281222105523 DICODING DevOps.pdf",
      img: "./assets/images/certification/image/sertifikat_course_382_221655_281222105523 DICODING DevOps.png",
      category: "Training Certificate",
      date: "2022-12-28",
      dateText: "Dec 28, 2022",
      title: "Introduction to DevOps – Dicoding",
      desc: "Introductory DevOps training through an official Dicoding Indonesia course (2022)."
    },
    {
      pdf: "./assets/images/certification/pdf/sertifikat_course_387_221655_281222133548 DICODING Belajar Jaringan Komputer.pdf",
      img: "./assets/images/certification/image/sertifikat_course_387_221655_281222133548 DICODING Belajar Jaringan Komputer.png",
      category: "Training Certificate",
      date: "2022-12-28",
      dateText: "Dec 28, 2022",
      title: "Computer Networking for Beginners – Dicoding",
      desc: "Basic computer networking training through a Dicoding Indonesia course (2022)."
    }
  ];
  
  const portfolioData = [
    {
      category: "mobile ui slicing",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_ui_taksi/main/image/README/Thumbnail.png",
      link: "https://github.com/sh4dowByte/flutter_ui_taksi",
      title: "Flutter Taxi UI",
      tag: "Mobile UI Slicing"
    },
    {
      category: "mobile development",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_movie_app/main/image/README/Thumbnail.png",
      link: "https://github.com/sh4dowByte/flutter_movie_app",
      title: "Flutter Movie App",
      tag: "Mobile App"
    },
    {
      category: "mobile development",
      img: "./assets/images/porto/Menyambang.jpg",
      link: "#",
      title: "Menyambang App",
      tag: "Mobile App"
    },
    {
      category: "mobile ui slicing",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_ui_meditation_app/main/image/README/1732238804004.png",
      link: "https://github.com/sh4dowByte/flutter_ui_meditation_app",
      title: "Flutter Meditation UI",
      tag: "Mobile UI Slicing"
    },
    {
      category: "mobile ui slicing",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_ui_messaging_app/main/image/README/Cover.png",
      link: "https://github.com/sh4dowByte/flutter_ui_messaging_app",
      title: "Flutter Messaging UI",
      tag: "Mobile UI Slicing"
    },
    {
      category: "mobile ui slicing",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_ui_dribbox_online_cloud_storage/main/image/README/Thumbnail.png",
      link: "https://github.com/sh4dowByte/flutter_ui_dribbox_online_cloud_storage",
      title: "Flutter Dribbox UI",
      tag: "Mobile UI Slicing"
    },
    {
      category: "mobile ui slicing",
      img: "https://raw.githubusercontent.com/sh4dowByte/flutter_ui_live_score/main/image/README/Thumbnail.png",
      link: "https://github.com/sh4dowByte/flutter_ui_live_score",
      title: "Flutter Live Score UI",
      tag: "Mobile UI Slicing"
    },
    {
      category: "mobile development",
      img: "./assets/images/porto/Presensi.png",
      link: "https://apps.apple.com/id/app/presensi-ulm/id1531042438",
      title: "Presensi ULM",
      tag: "Mobile Development"
    },
  
    /* === WEB DEVELOPMENT === */
    {
      category: "web development",
      img: "assets/images/porto/psikotes.png",
      link: "#",
      title: "Ujian CAT E-Psikotes ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "Sipeg Dosen ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "Presensi Dosen ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "Tracerstudy Dosen ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIIRS - Skripsi FKG ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIMTAM - Skripsi FK ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIA OBE ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "CAT UTMBK ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SNPMB ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIA FK ULM",
      tag: "Web Development"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "PERMATA MERDEKA ULM",
      tag: "Web Development"
    },
  
    /* === APPLICATION SUPPORT === */
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "IMPORTER PDDIKTI ULM",
      tag: "Application Support"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIA ULM",
      tag: "Application Support"
    },
    {
      category: "web development",
      img: "assets/images/porto/ULM APPS.jpg",
      link: "#",
      title: "SIAPPS ULM",
      tag: "Application Support"
    },
  
    /* === NETWORK SECURITY === */
    {
      category: "network security tools",
      img: "https://raw.githubusercontent.com/sh4dowByte/alpha/main/icon.png",
      link: "https://github.com/sh4dowByte/alpha",
      title: "Alpha - Reverse Shell",
      tag: "Network Security Tools"
    },
    {
      category: "network security tools",
      img: "https://raw.githubusercontent.com/sh4dowByte/beta/main/icon.png",
      link: "https://github.com/sh4dowByte/beta",
      title: "Beta - Port Scanner",
      tag: "Network Security Tools"
    },
    {
      category: "network security tools",
      img: "https://raw.githubusercontent.com/sh4dowByte/delta/main/icon.png",
      link: "https://github.com/sh4dowByte/delta",
      title: "Delta - Exploit Discovery",
      tag: "Network Security Tools"
    }
  ];
  